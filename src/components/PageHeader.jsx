import React from 'react'
import { Link } from 'react-router-dom'
function PageHeader({ PageName }) {
    return (
        <div className="w-full h-[50vh] bg-blue-300 flex justify-center items-center">
            <div className="w-full text-center text-neutral space-y-6">
                <h2 className="text-6xl font-bold">{PageName}</h2>
                <ul className="text-xl space-x-1 font-semibold flex justify-center items-center">
                    <li className="no-underline hover:text-blue-600"><Link className='no-underline' to="/">Home </Link></li>
                    <li className="">{`// ${PageName}`}</li>
                </ul>
            </div>
        </div>
    )
}

export default PageHeader