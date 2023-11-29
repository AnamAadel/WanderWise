import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../context/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

function useBooking() {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch ,isPending, isError, data: bookingData = [], error } = useQuery({ queryKey: ['booking'], queryFn: async ()=> {
        const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
        return res.data;
    } })
  return {bookingData , refetch, isPending, isError, error};
}

export default useBooking