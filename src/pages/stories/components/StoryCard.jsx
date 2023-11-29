import React from 'react';
import { Link } from 'react-router-dom';

function StoryCard({story}) {
  const {name, location, date, tourType, story : script , photo, spotPhoto, tourGuideRecognition} = story;

  
  return (
    <Link to={`/story/${story._id}`} className="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 shadow-xl" href="#">
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <img className="w-full h-full absolute top-0 start-0 object-cover" src={spotPhoto} alt="Image Description" />
      </div>

      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="flex items-center justify-between gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {tourType} <span>{location}</span>
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            {story?.title ? story?.title : tourGuideRecognition}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {script.length > 30 ? <p>{script.slice(0, 30)} <span className='text-blue-400 font-bold'>Read More</span> </p> : script }
          </p>

          <div className="mt-5 sm:mt-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-[2.875rem] w-[2.875rem] rounded-full object-cover" src={photo} alt="Image Description" />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                {name}
                </h4>
                <p className="text-xs text-gray-500">
                  {date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default StoryCard