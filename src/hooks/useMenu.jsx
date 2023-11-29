import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

function useMenu() {
    const axiosSecure = useAxiosSecure();

    const {data: menuData = [], isPending, error, refetch} = useQuery({
      queryKey: ["menu"],
      queryFn: async ()=> {
      const res = await axiosSecure.get("/menu");
      return res.data

      }
    })
    
  return [menuData, refetch]
}

export default useMenu