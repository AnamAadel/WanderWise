import React from 'react';

import ReactStars from "react-rating-stars-component";
import ReviewForm from './ReviewForm';

function LeaveReview() {
  return (
    <div className='w-full p-12 shadow-xl space-y-6 bg-white'>
        <h3 className='text-3xl font-extrabold text-neutral py-4 capitalize border-b-2 border-blue-600'>Leave a Review</h3>

        <h3 className='text-xl font-extrabold text-neutral capitalize flex gap-6 items-center'>
        <span className='-mt-[1rem]'>Rating</span>
          <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        classNames="-mt-4"
                    />
        </h3>

        <ReviewForm />

    </div>
  )
}

export default LeaveReview