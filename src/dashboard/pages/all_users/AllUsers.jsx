import React from 'react';
import swal from 'sweetalert';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useGetAllUsers from '../../../hooks/useGetAllUsers';

function AllUsers() {
    const {data, isPending, refetch} = useGetAllUsers();
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
              

              axiosSecure.delete(`/users/${item._id}`).then(res => {
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

    const handleMakeAdmin = (item)=> {
        console.log(item)
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((isMakeAdmin) => {
            if (isMakeAdmin) {
              
              axiosSecure.put(`/users/admin/${item._id}`).then(res => {
                console.log(res.data);
                swal(` "${item.name}" has been admin!`, {
                    icon: "success",
                  });
                  refetch()
            }).catch((err)=> console.log(err));
            } else {
              swal("Your item is safe!");
            }
          });
        
    }


    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <SectionTitle title="MANAGE ALL ITEMS" subTitle="Hurry Up!" />
                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Total items: {data?.length}
                        </p>
                        <div className="bg-white overflow-auto">
                            <div className="overflow-x-auto">
                            <table className="table">
                                    {/* head */}
                                    <thead className='bg-neutral text-white'>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
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
                                            <th> {
                                                item?.role === "admin"?
                                                <div>Admin</div> :

                                                <button className="btn btn-ghost btn-xs" onClick={()=> handleMakeAdmin(item)}>Make Admin</button>
                                            }
                                            </th>
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

export default AllUsers