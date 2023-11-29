import React from 'react'
import LeaveReview from './LeaveReview'
import UserReview from './UserReview'

function Reviews() {
  return (
    <div className='w-full space-y-4 pb-12'>
    <h3 className='text-5xl font-extrabold text-neutral py-8 capitalize'>Testimonials</h3>
    <UserReview />
    <UserReview />

    <LeaveReview />
    </div>
  )
}

export default Reviews