import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPablic";

function useGetPackages() {
  const axiosPublic = useAxiosPublic();
    const { refetch ,isPending, isError, data: packageData = [], error } = useQuery({ queryKey: ['packages'], queryFn: async ()=> {
        const res = await axiosPublic.get("/packages");
        return res.data;
    } })
  return {packageData , refetch, isPending, isError, error};
}

export default useGetPackages