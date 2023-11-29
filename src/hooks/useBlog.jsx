import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPablic';

function useBlog() {
  
    const axiosPublic = useAxiosPublic();
    const { refetch ,isPending, isError, data: blogData = [], error } = useQuery({ queryKey: ['blog'], queryFn: async ()=> {
        const res = await axiosPublic.get("/blog");
        return res.data;
    } })
  return {blogData , refetch, isPending, isError, error};
 
}

export default useBlog