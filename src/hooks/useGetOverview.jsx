import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPablic";

function useGetOverview() {
  const axiosPublic = useAxiosPublic();
    const { refetch ,isPending, isError, data: overviewData = [], error } = useQuery({ queryKey: ['overview'], queryFn: async ()=> {
      const res = await axiosPublic.get("/videos");
      return res.data;
    } })
  return {overviewData , refetch, isPending, isError, error};
}

export default useGetOverview