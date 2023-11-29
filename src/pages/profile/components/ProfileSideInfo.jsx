import React from 'react';
import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaPhone } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

function ProfileSideInfo({profileInfo}) {
    console.log(profileInfo)
    return (
        <div className='w-full px-4 text-2xl font-bold space-y-3'>
            <p className='flex items-center justify-center gap-4'><FaPhone /> {profileInfo?.phone ? profileInfo.phone : "+880123456789"}</p>
            <p className='flex items-center justify-center gap-4'><MdOutlineMail className='text-4xl' />{profileInfo?.email ? profileInfo.email : "progamingHero@email.com"} </p>
            <button className='py-2 flex justify-center items-center gap-3 hover:bg-neutral hover:text-white transition-all duration-500 bg-blue-400 w-full rounded-full text-2xl text-white shadow-xl'><BsFillChatRightTextFill /> Chat</button>

            <div>
                <h3 className='text-2xl font-extrabold text-neutral pt-8 capitalize'>Language</h3>
                <ul className='list-disc text-xl list-inside mt-4'>
                {profileInfo?.languages ?
                    profileInfo?.languages.map((language, idx) => (
                    <li key={idx}>{language}</li>
                        
                    )) : 
                 
                    <li>Bengali</li>
                 }
                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-extrabold text-neutral pt-8 capitalize'>specialties</h3>
                <ul className='list-disc text-xl list-inside mt-4'>
                {profileInfo?.specialties.length > 0 ?
                    profileInfo?.specialties.map((specialty, idx) => (
                    <li key={idx}>{specialty}</li>
                        
                    )) : 
                 
                    <>
                    <li>Cultural Experiences</li>

                    </>
                 }
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-extrabold text-neutral pt-8 capitalize'>experience</h3>
                <ul className='list-disc text-xl list-inside mt-4'>
                {profileInfo?.experience ? <li>{profileInfo?.experience}</li> : <li>2 Years</li>}
                    
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-extrabold text-neutral pt-8 capitalize'>availability</h3>
                <ul className='list-disc text-xl list-inside mt-4'>
                {profileInfo?.availability.length > 0 ?
                    profileInfo?.availability.map((day, idx) => (
                    <li key={idx}>{day}</li>
                        
                    )) : 
                 
                    <>

                    <li>Tuesday</li>
                    <li>Thursday</li>
                    </>
                 }
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-extrabold text-neutral pt-8 capitalize'>accepted Payment Methods</h3>
                <ul className='list-disc text-xl list-inside mt-4'>
                    <li>Cash</li>
                    <li>Bank Transfer</li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-extrabold text-neutral pt-8 capitalize'>Cancellation Policy</h3>
                {profileInfo?.cancellation !== "" ? <p className='text-xl mt-4'>{profileInfo?.cancellation}</p> : <p className='text-xl mt-4'>Cancellation must be made 48 hours in advance for a full refund.</p>}
                
            </div>
            <div>
                <h3 className='text-2xl font-extrabold text-neutral pt-8 capitalize'>Terms And Conditions</h3>
                {profileInfo?.termsAndCondition !== "" ? <p className='text-xl mt-4'>{profileInfo?.termsAndCondition}</p> : <p className='text-xl mt-4'>Please respect local customs and guidelines during the tour for a harmonious experience.</p>}
                
            </div>
        </div>
    )
}

export default ProfileSideInfo