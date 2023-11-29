import React from 'react';
import swal from 'sweetalert';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useGetAllUsers from '../../../hooks/useGetAllUsers';

function ManageUsers() {
    
    const axiosSecure = useAxiosSecure();
    const {AllUsers, refetch} = useGetAllUsers();
    
    
    const makeUserAdmin = (tourist) => {
        swal({
            title: "Are you sure?",
            text: "Once do this, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {


                    axiosSecure.put(`/users/admin/${tourist._id}`).then(res => {
                        console.log(res.data);
                        swal(` "${tourist.name}" has been updated!`, {
                            icon: "success",
                        });
                        refetch()
                    }).catch((err) => console.log(err));
                } else {
                    swal("User is safe!");
                }
            });

    }

    const makeUserTourGuide = (user) => {
        swal({
            title: "Are you sure?",
            text: "Once do this, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {


                    axiosSecure.put(`/users/tourGuide/${user._id}`).then(res => {
                        console.log(res.data);
                        swal(` "${user.name}" has been updated!`, {
                            icon: "success",
                        });
                        refetch()
                    }).catch((err) => console.log(err));
                } else {
                    swal("User is safe!");
                }
            });

    }

    const handleDeleteItem = (item) => {
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


    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden pl-12">
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h2 className='text-4xl font-semibold text-center'>MANAGE USER</h2>
                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Total items: {AllUsers?.length}
                        </p>
                        <div className="bg-white overflow-auto">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-neutral text-white'>
                                        <tr>
                                            <th>

                                            </th>
                                            <th>User Name</th>
                                            <th>email</th>
                                            <th>Role</th>
                                            <th>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            AllUsers.map((user, idx)=> (
                                                <tr key={user._id} >
                                                    <th>
                                                        {idx + 1}
                                                    </th>
                                                    <td>
                                                        {user.name}
                                                    </td>
                                                    <td>
                                                        {user.email}
                                                    </td>
                                                    <td>

                                                        {user.role === "admin" || user.role === "tourGuide" ?

                                                        <button className="btn btn-disabled btn-xs">Make Tour Guide</button>
                                                        :
                                                        <button className="btn btn-neutral btn-xs" onClick={() => makeUserAdmin(user)}>Make Admin</button>
                                                    }
                                                    </td>
                                                    <td>
                                                    {user.role === "admin" || user.role === "tourGuide" ?

                                                    
                                                        <button className="btn btn-disabled btn-xs">Make Tour Guide</button>
                                                        :
                                                        <button className="btn btn-neutral btn-xs" onClick={() => makeUserTourGuide(user)}>Make Tour Guide</button>
                                                    }
                                                    </td>
                                                </tr>

                                            ))
                                        }
                                        
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

export default ManageUsers