import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../context/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

function useAssignData() {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch: reload ,isPending, isError, data: assignData = [], error } = useQuery({ queryKey: ['assignItem'], queryFn: async ()=> {
        const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
        return res.data;
    } })
  return {assignData , reload, isPending, isError, error};
}

export default useAssignData