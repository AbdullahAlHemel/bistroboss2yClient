import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-2xl mt-5 m-3 text-center'>Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {payments.map((payment, index) => <tr key={payment._id}>
                        <th>{index + 1} </th>
                        <td className='font-bold'>$ {payment.price}</td>
                        <td className='text-gray-700'>{payment.transactionId}</td>
                        <td>{payment.status}</td>
                    </tr>)}
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default PaymentHistory;