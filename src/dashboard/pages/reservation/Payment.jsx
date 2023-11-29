import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import CheckOutForm from './CheckOutForm'


const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_KEY}`)
function Payment() {
  return (
    <div className='flex flex-col gap-8 items-center p-8 w-full'>
        <SectionTitle title="PAYMENT" subTitle="Please Buy to Eat" />
        <Elements stripe={stripePromise}>
            <CheckOutForm />
        </Elements>
    </div>
  )
}

export default Payment