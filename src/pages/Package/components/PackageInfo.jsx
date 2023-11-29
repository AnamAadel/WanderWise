import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { FaLocationArrow } from 'react-icons/fa';

function PackageInfo({info}) {
    const {tourTitle,tourType, longDescription, location, touristStory, rating} = info;
    return (
        <div className='py-8 space-y-8'>
            <h2 className='text-6xl font-bold'>{tourTitle}</h2>
            <div className="flex gap-4">
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked />
                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                </div>
                <span className='text-lg font-bold'>{rating}</span>
            </div>
            <h3 className='text-2xl font-bold  flex gap-4'><BiCategory className='text-blue-500'  /> {tourType}</h3>
            <h3 className='text-2xl flex gap-4'><FaLocationArrow className='text-blue-500' /> {location}</h3>
            <p className='text-xl font-medium'>{longDescription}</p>

            <p className='text-xl font-medium'> <b className="text-2xl font-extrabold capitalize">tourist Story: </b>{touristStory}.</p>
        </div>
    )
}

export default PackageInfo