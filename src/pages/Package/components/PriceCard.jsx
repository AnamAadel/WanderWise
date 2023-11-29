import React from 'react';
import { BiMessage, BiSolidLike } from "react-icons/bi";
import { FaPhoneAlt, FaStarOfLife } from "react-icons/fa";
import { LiaGgCircle } from "react-icons/lia";

function PriceCard({price}) {
    return (
        <div className="w-full rounded-lg shadow-2xl p-8 mt-28">
        <div className="space-y-4 ">
        <h3 className="text-2xl font-bold text-neutral ">Price</h3>
        <span className="flex items-start border-b-2 pb-6">
        <span className="text-lg text-blue-500">From</span>
        <span className="text-3xl font-bold">${price}</span>
        </span>
        <h3 className='text-3xl font-extrabold text-neutral mt-8'>Book With Confidence</h3>
        
        <p className='text-lg py-3 flex gap-4'> <BiSolidLike className='text-blue-500 text-2xl' /> No-hassle best price guarantee</p>
        <p className='text-lg py-3 flex gap-4'> <FaPhoneAlt className='text-blue-500 text-2xl' />Customer care available 24/7</p>
        <p className='text-lg py-3 flex gap-4'> <FaStarOfLife className='text-blue-500 text-2xl' />Hand-picked Tours & Activities</p>
        <p className='text-lg py-3 flex gap-4'> <LiaGgCircle className='text-blue-500 text-2xl' /> Free Travel Insureance</p>

        </div>
        <div className="space-y-4 ">
        <h3 className='text-3xl font-extrabold text-neutral mt-8'>Need Help?</h3>
        <p className='text-lg py-3 flex gap-4'> <FaPhoneAlt className='text-blue-500 text-2xl' />01234567891</p>
        <p className='text-lg py-3 flex gap-4'> <BiMessage className='text-blue-500 text-2xl' />Hand-picked Tours & Activities</p>

        </div>
        </div>
    )
}

export default PriceCard