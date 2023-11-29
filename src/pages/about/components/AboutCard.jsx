import React from 'react'

function AboutCard({title, description, image, isImageTop}) {
  return (
    <div className="p-5 sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
    {isImageTop ? 
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image} alt="" className="w-full relative z-10 h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 relative z-20 bg-neutral text-white mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<h3 className='font-bold text-4xl py-6'>{title}</h3>
            <p className='font-medium text-xl'>{description}</p>
		</div>
	</div>
    :
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<div className="p-6 pb-12 m-4 mx-auto z-20 bg-neutral text-white -mb-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<h3 className='font-bold text-4xl py-6'>{title}</h3>
            <p className='font-medium text-xl'>{description}</p>
		</div>
		<img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
	</div>
    }
</div>
  )
}

export default AboutCard