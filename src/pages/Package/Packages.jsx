import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import useAxiosPublic from '../../hooks/useAxiosPablic'
import useGetPackages from '../../hooks/useGetPackages'
import PackageSidebar from '../profile/components/PackageSidebar'
import PackageCard from '../shared/PackageCard'
import { useAuth } from '../../context/AuthProvider'



function Packages() {
  const {packageData} = useGetPackages();
  const [packages, setPackages] = useState([]);
  const {wishlist, setWishlist} = useAuth()
  
	const axiosPublic = useAxiosPublic();
  const {id} = useParams();
    console.log(id)
  useEffect(()=> {
    if(id){
      axiosPublic.get(`/packages/type/${id}`).then(res => {
        setPackages(res.data);
      }).catch(err => console.lgo(err));
    }else{
      setPackages(packageData)
      
    }
  },[packageData, id, axiosPublic])
  return (
    <>
        <PageHeader PageName={"Packages"} />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <PackageSidebar setPackages={setPackages} />
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 py-12">
          {packages.map(item => (

            <PackageCard key={item._id} item={item} wishlist={wishlist} setWishlist={setWishlist} />
          ))}
          </div>
        </div>
    </>
  )
}

export default Packages