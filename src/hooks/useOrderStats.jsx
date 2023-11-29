import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

function useOrderStats() {
    const axiosSecure = useAxiosSecure();
    const { refetch ,isPending, isError, data = [], error } = useQuery({ queryKey: ['order'], queryFn: async ()=> {
        const res = await axiosSecure.get("/order/stats");
        return res.data ;
    } })
  return {orderStats: data, refetch, isPending, isError, error};
}

export default useOrderStats