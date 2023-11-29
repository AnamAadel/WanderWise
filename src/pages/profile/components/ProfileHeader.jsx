import React from 'react';
import { FaFacebook, FaLinkedin, FaLocationArrow, FaTwitter } from 'react-icons/fa';
import { LiaCertificateSolid } from "react-icons/lia";
function ProfileHeader({name, certify, location, photo}) {
    console.log(photo)
    return (
        <div className='relative w-full container mx-auto py-12'>
            <div className="avatar absolute -top-1/2 left-1/2 -translate-x-1/2 md:left-56">
                <div className="w-52 rounded-full ring-white ring-8 ring-offset-base-100 ring-offset-2">
                    <img src={photo} />
                </div>
            </div>
            <div className='space-y-4 pt-[50px] md:pt-0 pl-0 md:pl-[400px] text-center md:text-left'>
                <h3 className='text-3xl font-bold'>{name}</h3>
                <h4 className='text-2xl font-bold flex items-center justify-center md:justify-start gap-4'><LiaCertificateSolid className='text-3xl' /> {certify}</h4>
                <div className='flex gap-4 items-center justify-center md:justify-start'>
                    <p className='flex gap-6 text-xl items-center'><FaLocationArrow /> {location}</p>
                    <button className='w-12 h-12 text-3xl rounded-full bg-gray-300 flex justify-center items-center'><FaFacebook /></button>
                    <button className='w-12 h-12 text-3xl rounded-full bg-gray-300 flex justify-center items-center'><FaTwitter /></button>
                    <button className='w-12 h-12 text-3xl rounded-full bg-gray-300 flex justify-center items-center'><FaLinkedin /></button>
                </div>

            </div>

        </div>
    )
}

export default ProfileHeader