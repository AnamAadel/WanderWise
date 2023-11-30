import React from 'react';
import { IoIosStar } from "react-icons/io";
function UserReview({comment}) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src={comment?.photo} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
		<div className="flex flex-col gap-3 items-start grow">
			<h4 className="text-lg font-semibold text-center md:text-left">{comment?.name}</h4>
            <div className="flex gap-2 items-center">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            </div>
			<p className="dark:text-gray-400">{comment?.comment}</p>
        
		</div>
	</div>
</div>
  )
}

export default UserReview