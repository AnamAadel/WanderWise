import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoMdShare } from "react-icons/io";
import { FacebookShareButton } from 'react-share';

function HeroStory({image, title, photo, name}) {
    return (
        <div className="hero h-[80vh] relative" style={{ backgroundImage: `url(${image})`, backgroundPosition: "bottom center" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[100%]">
                    <h1 className="mb-5 text-6xl font-bold">{title}</h1>
                    <div className="flex gap-6 items-center justify-center mt-28">
                    {photo &&
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                 <img src={photo} /> 
                            </div>
                        </div>
                    }
                        <h3 className="text-xl font-bold uppercase">By {name}</h3>
                    </div>
                    <div className='flex gap-2 absolute bottom-8 left-4'>
                        <button className='w-10 h-10 flex justify-center items-center bg-white text-neutral text-2xl'><IoMdShare /></button>
                    <FacebookShareButton url="https://www.facebook.com" className='w-10 flex justify-center items-center' style={{backgroundColor: "#fff"}} >
                    <button className="className='h-10 bg-white text-neutral text-2xl" >

                        <FaFacebookF />
                    </button>
                    </FacebookShareButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroStory