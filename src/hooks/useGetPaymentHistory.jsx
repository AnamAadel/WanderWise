import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


function useGetPaymentHistory() {
    const axiosSecure = useAxiosSecure();
    const { refetch ,isPending, isError, data = [], error } = useQuery({ queryKey: ['users'], queryFn: async ()=> {
        const res = await axiosSecure.get("/payments");
        return res.data ;
    } })
  return {data, refetch, isPending, isError, error};
}

export default useGetPaymentHistory