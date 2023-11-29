import React, { useState } from 'react';
import { IoIosVideocam } from "react-icons/io";
import { useAuth } from '../../../context/AuthProvider';

function HeroGallery({images , video}) {
    const [imgIndex, setImgIndex] = useState(0);
    const {modalVideoLink, setModalVideoLink} = useAuth();
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-2 relative'><img src={images[imgIndex]} className='w-full h-full object-cover rounded-2xl aspect-video' alt="" />
        <div className="absolute top-4 left-4 cursor-pointer p-4 text-neutral text-lg bg-white rounded-3xl flex gap-2 items-center" onClick={()=>{document.getElementById('my_modal_3').showModal(); setModalVideoLink(video)}}><IoIosVideocam /> Video</div>
        </div>
        <div className="flex md:grid grid-cols-2 gap-4 overflow-auto md:overflow-hidden">
            {images.map((image, indx)=> (
                <img key={indx} src={image} onClick={()=> setImgIndex(indx)} className='aspect-square object-cover cursor-pointer rounded-2xl hover:scale-110 transition-all duration-200' />
            ))}
        </div>
    </div>
  )
}

export default HeroGallery