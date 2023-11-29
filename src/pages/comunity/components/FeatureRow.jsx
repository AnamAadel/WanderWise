import React from 'react'

function FeatureRow({ image }) {
    return (
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
                <div className="mt-12 space-y-12">
                    

                </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
        </div>
    )
}

export default FeatureRow