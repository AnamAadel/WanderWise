import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useBooking from '../../../hooks/useBooking';

function MyAssignTour() {
    
    
    const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [assignData, setAssignData] = useState([]);
//    const {assignData} =  useAssignData();
   const {refetch} = useBooking();

    const makeStatusAccepted = (item) => {
        console.log(item)
        swal({
            title: "Are you sure?",
            text: " you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {


                    axiosSecure.put(`/bookings/${item._id}`, {status: "Accepted"}).then(res => {
                        console.log(res.data);
                        swal(` "${item.tourTitle}" has been Accepted!`, {
                            icon: "success",
                        });
                        refetch()
                    }).catch((err) => console.log(err));
                } else {
                    swal("item can not be updated!");
                }
            });

    }

    const makeStatusRejected = (item) => {
        console.log(item)
        swal({
            title: "Are you sure?",
            text: " you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {


                    axiosSecure.put(`/bookings/${item._id}`, {status: "Rejected"}).then(res => {
                        console.log(res.data);
                        swal(` "${item.tourTitle}" has been Rejected!`, {
                            icon: "success",
                        });
                        refetch()
                    }).catch((err) => console.log(err));
                } else {
                    swal("item can not be updated!");
                }
            });

    }

    useEffect(()=> {
        const fetchData = async ()=> {
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
            setAssignData(res.data);
        }
        fetchData();
    },[axiosSecure, user])
    


    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden pl-12">
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h2 className='text-4xl font-semibold text-center'>MY Assign Tour</h2>
                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Total items: {assignData?.length}
                        </p>
                        <div className="bg-white overflow-auto">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-neutral text-white'>
                                        <tr>
                                            <th>

                                            </th>
                                            <th>Package Name</th>
                                            <th>Tourist Name</th>
                                            <th>Date</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {assignData && assignData.map((item, idx)=> (

                                        <tr key={item._id} >
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                                {item.tourTitle}
                                            </td>
                                            <td>
                                            {item.tourGuide?.name}
                                            </td>
                                            <td>{item.date}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="btn btn-success btn-xs" onClick={() => makeStatusAccepted(item)}>Accept</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-warning btn-xs" onClick={() => makeStatusRejected(item)}>Reject</button>
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

export default MyAssignTour