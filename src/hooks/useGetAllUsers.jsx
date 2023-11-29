import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


function useGetAllUsers() {
    const axiosSecure = useAxiosSecure();
    const { refetch ,isPending, isError, data: AllUsers = [], error } = useQuery({ queryKey: ['users'], queryFn: async ()=> {
        const res = await axiosSecure.get("/users");
        return res.data ;
    } })
  return {AllUsers, refetch, isPending, isError, error};
}

export default useGetAllUsers