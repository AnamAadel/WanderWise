import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

function ReviewForm({rating, setRatingError, guideInfo, reviews, setReviews}) {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
} = useForm()

const handleComment = (data)=> {
  if(rating > 0){
    console.log(data)
    const commentData = {...data, rating, photo: user?.photoURL}
    console.log(commentData)

    axiosSecure.put(`/tourGuides/review/${guideInfo?._id}`, commentData).then(res => {
      console.log(res)
      swal({
        title: "Added comment successfully!",
        icon: "success",
    });
    setReviews([...reviews, commentData]);
    }).catch(err => {
      console.log(err);
    })

  }else{
    setRatingError("This field is required")
  }
}
  return (
<div className="w-full">
      <form onSubmit={handleSubmit(handleComment)}>
        <div className="mb-4 sm:mb-8">
          <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full name</label>
          <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full border-gray-400 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Full name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-400">This field is required</span>}
        </div>

        <div className="mb-4 sm:mb-8">
          <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
          <input type="email" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border-gray-400 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email address" {...register("email", { required: true })} />
        {errors.email && <span className="text-red-400">This field is required</span>}
        </div>

        <div>
          <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Comment</label>
          <div className="mt-1">
            <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" className="py-3 px-4 block w-full border-gray-400 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Leave your comment here..." {...register("comment", { required: true })}></textarea>
            {errors.comment && <span className="text-red-400">This field is required</span>}
          </div>
        </div>

        <div className="mt-6 grid ">
          <button type="submit" className="w-1/2 ml-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit</button>
        </div>
      </form>
</div>
  )
}

export default ReviewForm