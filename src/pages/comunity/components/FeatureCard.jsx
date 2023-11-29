import React from 'react'

function FeatureCard({heading, description}) {
    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-medium leadi dark:text-gray-50">{heading}</h4>
                <p className="mt-2 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard