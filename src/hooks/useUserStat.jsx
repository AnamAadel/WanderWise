import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

function useUserStat() {
    const axiosSecure = useAxiosSecure();
    const { refetch ,isPending, isError, data: userStat = [], error } = useQuery({ queryKey: ['userStat'], queryFn: async ()=> {
        const res = await axiosSecure.get("/users/stat");
        return res.data ;
    } })
  return {userStat, refetch, isPending, isError, error};
}

export default useUserStat