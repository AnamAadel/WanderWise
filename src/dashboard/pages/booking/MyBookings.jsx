import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import swal from 'sweetalert';
import useAssignData from '../../../hooks/useAssignData';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useBooking from '../../../hooks/useBooking';

function MyBookings() {

    const axiosSecure = useAxiosSecure();
    const { bookingData, refetch } = useBooking();
    const {reload} = useAssignData()
    const [isDiscount, setDiscount] = useState(false)
    const [party, setParty] = useState(true)
    const total = bookingData.reduce((initial, item) => initial + parseInt(item.price), 0)


    const handleDeleteItem = (item) => {
        console.log(item)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {


                axiosSecure.delete(`/bookings/${item._id}`).then(res => {
                    console.log(res.data);
                    swal(` "${item.tourTitle}" has been deleted!`, {
                        icon: "success",
                    });
                    refetch()
                    reload()
                }).catch((err) => console.log(err));
            } else {
                swal("Your item is safe!");
            }
        });

    }

    useEffect(() => {
        const filterData = bookingData.filter(item => item.status !== "Rejected")
        if (filterData.length >= 3) {
            setDiscount(true)
        } else {
            setDiscount(false)

        }
    }, [])

    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden pl-12">
            {isDiscount ?
                <Confetti
                    style={{ pointerEvents: 'none' }}
                    numberOfPieces={1000}
                    recycle={false}
                    onConfettiComplete={confetti => {

                        setParty(false)
                        swal(`Congratulation!`, {
                            text: "Congratulation!  You Got A Discount",
                            icon: "success",
                        }).then((willDelete) => {
                            if (willDelete) {
                                confetti.reset()

                            }
                        }).catch((err) => console.log(err));
                    }}
                /> : null
            }
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h2 className='text-4xl font-semibold text-center'>MY BOOKINGS</h2>
                    <div className="w-full mt-12">

                        <div className="bg-white overflow-auto">
                            <div className="overflow-x-auto">
                                <div className='flex justify-between items-center gap-4 mb-3'>
                                    <p className="text-xl pb-3 font-bold flex items-center">
                                        Total items: {bookingData?.length}
                                    </p>
                                    <p className="text-xl pb-3 font-bold flex items-center">
                                        Total Price: {total}
                                    </p>


                                </div>
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-neutral text-white'>
                                        <tr>
                                            <th>

                                            </th>
                                            <th>Tour Name</th>
                                            <th>Guide Name</th>
                                            <th>Date</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookingData.map((item, idx) => (
                                            <tr key={item._id}>
                                                <th>
                                                    {idx + 1}
                                                </th>
                                                <td>
                                                    {item.tourTitle}
                                                </td>
                                                <td>
                                                    {item.tourGuide.name}
                                                </td>
                                                <td>{item.date}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    {item.status === "In Review" ?

                                                        <button className="btn btn-primary">{item.status}</button>
                                                        :
                                                        item.status === "Accepted" ?
                                                            <button className="btn btn-success">{item.status}</button>
                                                            :
                                                            <button className="btn btn-warning">{item.status}</button>
                                                    }

                                                </td>
                                                <td>
                                                    {
                                                        item.status === "Accepted" ?
                                                            <button className={`btn ${isDiscount ? "btn-success" : "btn-info"}`}>{isDiscount ? <span onClick={() => setDiscount(false)}>Apply</span> : <span>Pay</span>}</button>
                                                            :
                                                            <button onClick={() => setDiscount(false)} className={`btn ${isDiscount ? "btn-success" : "btn-warning"}`}>
                                                                {isDiscount ? <span onClick={() => setDiscount(false)}>Apply</span> : <span onClick={() => handleDeleteItem(item)}>Cancel</span>}
                                                            </button>
                                                    }
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default MyBookings