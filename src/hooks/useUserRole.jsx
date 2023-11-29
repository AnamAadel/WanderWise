import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../context/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

function useUserRole() {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    console.log(user?.email)
    const { refetch ,isPending, isError, data: userRole = {}, error } = useQuery({
      queryKey: ['userRole'] ,
        queryFn: async ()=> {
          const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          console.log(res.data)
          return res.data ;
          
    } })

  return {userRole , refetch, isPending, isError, error};
  
}

export default useUserRole