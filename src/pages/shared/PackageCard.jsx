import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function PackageCard({item, wishlist, setWishlist}) {

  const addWishlist = async (id)=> {
      console.log(wishlist.findIndex(item => item?.id === id) === -1)
      if(wishlist.findIndex(item => item.id === id) === -1){
    const newArr = [...wishlist, {id}] ;

      setWishlist(newArr);
      console.log(newArr)
      const parseData = JSON.stringify(newArr)
      localStorage.setItem("wishlist", parseData);
    }else{
      const filterIds = wishlist.filter((wishlistId) => wishlistId.id !== id )
      
      setWishlist(filterIds);
      const parseData = JSON.stringify(filterIds)
      localStorage.setItem("wishlist", parseData);
  }
}


  return (
    <div className='relative shadow-sm z-[1] text-white h-[550px] group'>
        <img src={item.images[0]} className='w-full h-full absolute top-0 left-0 z-[-1]  object-cover' alt="" />
        <div className="w-full h-full bg-black bg-opacity-50 group-hover:bg-opacity-10 absolute top-0 left-0 transition-all duration-500 z-[-1]"></div>
        <div className='w-full h-full flex flex-col justify-end items-start p-6 gap-4 '>
          <span className='absolute top-5 right-5 text-4xl cursor-pointer' onClick={()=> addWishlist(item._id)} >{wishlist.findIndex(ids => ids.id === item._id) !== -1 ? <FaHeart /> : <FaRegHeart /> } </span>
          <h3 className='text-2xl font-bold group-hover:opacity-0 transition-all duration-500'>{item.tourTitle}</h3>
          <h4 className='text-lg group-hover:opacity-0 transition-all duration-500'>{item.tourType}</h4>
        <h5 className='text-base group-hover:opacity-0 transition-all duration-500'>${item.price}</h5>
          <Link to={`/packageDetail/${item._id}`} className='btn self-end'>View Package</Link>
        </div>
    </div>
  )
}

export default PackageCard