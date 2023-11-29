import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useGetPaymentHistory from '../../../hooks/useGetPaymentHistory';

function PaymentHistory() {
    const {data, isPending, refetch} = useGetPaymentHistory();

    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <SectionTitle title="PAYMENT HISTORY" subTitle="At a Glance!" />
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
                                            <th>Email</th>
                                            <th>Price</th>
                                            <th>Transaction Id</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, idx) => (
                                        <tr key={item._id}>
                                            <td>
                                               {item.email}
                                            </td>
                                            <td>
                                               {item.price}
                                            </td>
                                            <td>
                                               {item.transactionId}
                                            </td>
                                            <td>
                                               {item.date}
                                            </td>
                                            <td>
                                               {item.status}
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

export default PaymentHistory