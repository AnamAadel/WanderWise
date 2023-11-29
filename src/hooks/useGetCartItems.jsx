import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

function useGetCartItems() {
    const axiosSecure = useAxiosSecure();
    const { refetch ,isPending, isError, data = [], error } = useQuery({ queryKey: ['cart'], queryFn: async ()=> {
        const res = await axiosSecure.get("/cart_items");
        return res.data ;
    } })
  return {data, refetch, isPending, isError, error};
}

export default useGetCartItems