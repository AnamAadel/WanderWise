import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useGetCartItems from '../../../hooks/useGetCartItems';

function MyCart() {
    const {data, isPending, refetch} = useGetCartItems();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item)=> {
        console.log(item)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              

              axiosSecure.delete(`/cart_item/${item._id}`).then(res => {
                console.log(res.data);
                swal(` "${item.name}" has been deleted!`, {
                    icon: "success",
                  });
                  refetch()
            }).catch((err)=> console.log(err));
            } else {
              swal("Your item is safe!");
            }
          });
        
    }
    let initialValue = 0

    const total = data?.reduce((prevItem, currentItem)=> initialValue += parseFloat(currentItem?.price), 0);

    console.log(initialValue)
    console.log(total)

    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <SectionTitle title="WANNA ADD MORE" subTitle="Hurry Up!" />
                    <div className="w-full mt-12">
                        <header className='flex items-center justify-between flex-wrap'>
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Total items: {data?.length}
                        </p>
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Total Price: {total}
                        </p>
                        
                        <button className={`btn btn-neutral ${!(data?.length > 0) && "btn-disabled"}`}><Link to="/dashboard/payment">Pay</Link></button>
                        </header>
                        <div className="bg-white overflow-auto">
                            <div className="overflow-x-auto">
                            <table className="table">
                                    {/* head */}
                                    <thead className='bg-neutral text-white'>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, idx) => (
                                        <tr key={item._id}>
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                               {item.name}
                                            </td>
                                            <td>
                                               {item.email}
                                            </td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs" onClick={()=> handleDeleteItem(item)}>delete</button>
                                            </th>
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

export default MyCart