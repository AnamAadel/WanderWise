import React from 'react'
import { HiLocationMarker } from "react-icons/hi"
import { MdWatchLater } from "react-icons/md"
import { PiPhoneCallFill } from "react-icons/pi"
import SectionTitle from '../../../components/SectionTitle'
function OurLocation() {
    return (
        <div>
            <SectionTitle subTitle="Visit Us" title="OUR LOCATION" />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div >
                    <h2 className='py-8 flex justify-center bg-yellow-600 text-white text-center text-2xl'><PiPhoneCallFill /></h2>
                    <div className='bg-gray-200 mx-auto w-[95%] text-center space-y-3 py-10'>
                        <h3>PHONE</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div >
                    <h2 className='py-8 flex justify-center bg-yellow-600 text-white text-center text-2xl'><HiLocationMarker /></h2>

                    <div className='bg-gray-200 mx-auto w-[95%] text-center space-y-3 py-10'>
                        <h3>ADDRESS</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div >
                    <h2 className='py-8 flex justify-center bg-yellow-600 text-white text-center text-2xl'><MdWatchLater /></h2>

                    <div className='bg-gray-200 mx-auto w-[95%] text-center space-y-3 py-10'>
                        <h3>ADDRESS</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurLocation