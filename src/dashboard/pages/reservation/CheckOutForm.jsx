import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useGetCartItems from '../../../hooks/useGetCartItems';

function CheckOutForm() {
    const stripe = useStripe()
    const elements = useElements()
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret, setClintSecret] = useState("");
    const axiosSecure = useAxiosSecure();
    const {data: cartItem, isPending} = useGetCartItems();
    const total = cartItem?.reduce((initialValue, item)=> initialValue + parseFloat(item.price) , 0);
    console.log(cartItem)
    const {user} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = await elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            console.log("[error]", error)
        } else {
            console.log("[paymentMethod", paymentMethod);


        }
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName,
                  email: user?.email
                },
              },
            },
          );

          if (intentError) {
            console.log("[intent error]", intentError)
        } else {
            console.log("[paymentIntent", paymentIntent);
            if(paymentIntent.status === "succeeded"){
                const payment = {
                    email: user?.email,
                    price: total,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc convert . use moment js to convert to utc
                    cardIds: cartItem.map(item => item._id),
                    menuIds: cartItem.map(item => item.menuId),
                    status: "pending"
                }

                const res = await axiosSecure.post("/payments", payment);

                console.log(res.data)

            }


        }

    }


    useEffect(()=> {
        axiosSecure.post("/create-payment-intent", {price: total}).then(res => {
            console.log(res.data)
            setClintSecret(res.data.clientSecret)
        }).catch((err)=> console.log(err));
    },[axiosSecure, total])

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='block mx-auto btn btn-neutral px-12 mt-8' disabled={!stripe}> Pay </button>
        </form>
    )
}

export default CheckOutForm