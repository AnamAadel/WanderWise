import React, { useState } from 'react';
import LeaveReview from './LeaveReview';
import UserReview from './UserReview';

function Reviews({guideInfo}) {
  const [reviews, setReviews] = useState(guideInfo?.reviews);
  console.log(reviews)
  return (
    <div className='w-full space-y-4 pb-12'>
    <h3 className='text-5xl font-extrabold text-neutral py-8 capitalize'>Testimonials</h3>
    {reviews && reviews.map((comment, idx)=> (
    <UserReview key={idx} comment={comment} />

    ))}
    <UserReview />

    <LeaveReview reviews={reviews} setReviews={setReviews} guideInfo={guideInfo} />
    </div>
  )
}

export default Reviews