import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import CoverPhoto from '../../../pages/profile/components/CoverPhoto';
import ProfileHeader from '../../../pages/profile/components/ProfileHeader';
import AddProfileInfo from './components/AddProfileInfo';

function TourGuide() {
  const [guideHeaderInfo, setGuideHeaderInfo] = useState([]);
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  useEffect(()=> {

    axiosSecure.get(`/tourGuides?email=${user?.email}`).then(res => {
      setGuideHeaderInfo(res.data)
      console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
},[axiosSecure, user])
  return (
    <div className='w-full'>
        <CoverPhoto />
        <ProfileHeader name={guideHeaderInfo.name} certify={guideHeaderInfo.certifications} location={guideHeaderInfo.location} />
        <AddProfileInfo />
    </div>
  )
}

export default TourGuide