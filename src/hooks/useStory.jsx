import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPablic';

function useStory() {
    const axiosPublic = useAxiosPublic();
    const { refetch ,isPending, isError, data: storyData = [], error } = useQuery({ queryKey: ['stories'], queryFn: async ()=> {
        const res = await axiosPublic.get("/stories");
        return res.data;
    } })
  return {storyData , refetch, isPending, isError, error};
}

export default useStory