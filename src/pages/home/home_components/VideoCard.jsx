import React from 'react';
import { FaPlay } from "react-icons/fa";
function VideoCard({item, setModalVideoLink}) {
  return (
    <div className=' p-4 rounded-md bg-white group cursor-pointer' onClick={()=>{document.getElementById('my_modal_3').showModal(); setModalVideoLink(item.video)} }>
        <div className='w-full h-44 relative'>
            <img src={item.image} className='w-full h-full object-cover object-center' alt="" />
            <div className='w-16 h-16 rounded-full bg-white text-neutral flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl group-hover:bg-neutral group-hover:text-white transition-all duration-500'><FaPlay /></div>
        </div>
        <h2 className='py-6 font-bold text-2xl text-center bg-white'>{item.name}</h2>
    </div>
  )
}

export default VideoCard