import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosPublic from './useAxiosPablic';

function useTourGuide() {
    const axiosPublic = useAxiosPublic();
    const { refetch ,isPending, isError, data: tourGuideData = [], error } = useQuery({ queryKey: ['tourGuide'], queryFn: async ()=> {
      const res = await axiosPublic.get("/tourGuides");
      return res.data;
    } })
  return {tourGuideData , refetch, isPending, isError, error};
}

export default useTourGuide