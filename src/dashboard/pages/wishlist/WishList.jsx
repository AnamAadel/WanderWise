import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import swal from 'sweetalert';

function WishList() {
    
    const axiosSecure = useAxiosSecure();
    const { wishlist , setWishlist } = useAuth();
    const [wishlistItem, setWishlistItem] = useState([]);

    const handleDeleteItem = (id) => {
        const filterIds = wishlist.filter(itemId => itemId.id !== id);
        const filterItem = wishlistItem.filter(item => item._id !== id);

        console.log(filterIds)
        console.log(filterItem)
        setWishlist(filterIds)
        setWishlistItem(filterItem)
        const parsingData = JSON.stringify(filterIds)
        localStorage.setItem("wishlist", parsingData)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {


                    axiosSecure.delete(`/menu/${item._id}`).then(res => {
                        console.log(res.data);
                        swal(` "${item.name}" has been deleted!`, {
                            icon: "success",
                        });
                        refetch()
                    }).catch((err) => console.log(err));
                } else {
                    swal("Your item is safe!");
                }
            });

    }

    useEffect(()=> {
        axiosSecure.post("wishlist", wishlist).then(res => {
            console.log(res.data)
            setWishlistItem(res.data)
        }).catch(err => console.log(err))
    },[axiosSecure, wishlist])

    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden pl-12">
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h2 className='text-4xl font-semibold text-center'>MY WISHLIST</h2>
                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Total items: {wishlist?.length}
                        </p>
                        <div className="bg-white overflow-auto">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-neutral text-white'>
                                        <tr>
                                            <th>

                                            </th>
                                            <th>Tour Image</th>
                                            <th>Tour Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {wishlist && wishlistItem.map(item => (
                                        <tr key={item._id}>
                                            <th>
                                                {1}
                                            </th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.images[0]} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.tourTitle}
                                            </td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="btn btn-neutral" onClick={()=> handleDeleteItem(item._id)}>Delete</button>
                                            </td>
                                            <td>
                                                <Link to={`/packageDetail/${item._id}`} className="btn btn-neutral ">View Details</Link>
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

export default WishList
