import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Testimonials from '../home/home_components/Testimonials'
import VideoCard from '../home/home_components/VideoCard'
import PackageCard from '../shared/PackageCard'
import CoverPhoto from './components/CoverPhoto'
import ProfileHeader from './components/ProfileHeader'
import ProfileSideInfo from './components/ProfileSideInfo'
import Reviews from './components/Reviews'

const video = {
    name: "Lalbagh Dhaka",
    image: "https://media.gettyimages.com/id/90037561/photo/lalbagh-fort-in-dhaka.jpg?s=612x612&w=0&k=20&c=3nrRRaRWS31Wk2qRmdx4hP2XIVKG4EFRc5JYdUz0EKQ=",
    video: "nHNfDlvFBtQ"
}

const item = {
    tourTitle: "Cox's Bazar Beach Retreat",
    tourType: "Beach",
    images: [
        "https://i.pinimg.com/564x/bf/45/64/bf4564ff53c9699e3c153904796b7eb4.jpg",
        "https://i.pinimg.com/564x/ed/d1/9e/edd19ee21fe8e06a96aeab26dcd2129c.jpg",
        "https://i.pinimg.com/564x/c4/19/38/c41938d03a5a82bf284a820837a1086d.jpg",
        "https://i.pinimg.com/564x/f8/03/58/f80358e98fc2b28f072b1b34b7bc54d0.jpg",
        "https://i.pinimg.com/564x/24/19/b7/2419b7faae8de38b3112c7eb7ad3ee64.jpg",
        "https://i.pinimg.com/564x/25/3e/57/253e57d0d79f8389066f45c1553eae4c.jpg"
    ],
    longDescription: "Relax on the longest natural sea beach with our Cox's Bazar Beach Retreat. Enjoy sunsets, beach sports, and the serene atmosphere.",
    price: 79.99,
    tourGuide: {
        "name": "Rahim Khan"
    },
    location: "Cox's Bazar, Bangladesh",
    touristStory: "The Cox's Bazar Beach Retreat was a blissful escape. Rahim, our guide, provided insights into the local culture. A perfect beach getaway!",
    rating: 4.8
}

function TourGuideProfile() {
    const [tourGuideVideos, setTourGuideVideos] = useState([])
    const [tourGuidePackage, setTourGuidePackage] = useState([])
    const {setModalVideoLink} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data} = useLoaderData();
    console.log(tourGuidePackage)

    const {user, wishlist, setWishlist} = useAuth();
    console.log(data)

    useEffect(()=> {
        axiosSecure.get(`/videos?email=${data?.email}`).then(res => {
            setTourGuideVideos(res.data)
        }).catch(err => {
            console.log(err)
        })

        axiosSecure.get(`/packages?email=${data?.email}`).then(res => {
            setTourGuidePackage(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[axiosSecure, data])
  return (
    <>
        <CoverPhoto />
        <ProfileHeader name={data.name} photo={data.photo} certify={data.certifications} location={data.location} />
        <main className='w-full bg-blue-200 '>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className='py-12'>
                <ProfileSideInfo profileInfo={data} />
            </div>
            <div className="py-12 col-span-3 space-y-12">
            {/* videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <h3 className='col-span-full text-5xl font-bold py-8 border-b-2 border-blue-400'>Videos</h3>
                {tourGuideVideos.length > 0 ? tourGuideVideos.map(video => (
                <VideoCard key={video._id} item={video} setModalVideoLink={setModalVideoLink} />

                ))
                :
                <img src="https://i.pinimg.com/564x/88/a9/3f/88a93f1207afd90b0cc1579c9ec12d37.jpg" className="col-span-full h-[500px] mix-blend-multiply" alt="" />
                }
                </div>
                {/* packages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <h3 className='col-span-full text-5xl font-bold pb-8 border-b-2 border-blue-400'>Packages</h3>
                {tourGuidePackage.length > 0 ? tourGuidePackage.map(item => (
                <PackageCard item={item} key={item._id} wishlist={wishlist} setWishlist={setWishlist}  />

                ))
                    :
                    <img src="https://i.pinimg.com/564x/88/a9/3f/88a93f1207afd90b0cc1579c9ec12d37.jpg" className="col-span-full h-[500px] mix-blend-multiply" alt="" />
                }
                </div>


            </div>
            <div className='col-span-full'>

                <Testimonials />
                <Reviews guideInfo={data} />
            </div>
        </div>
        </main>
    </>
  )
}

export default TourGuideProfile