import React, { useState } from 'react';
import HomeHero from './home_components/HomeHero';
import TourType from './home_components/TourType';
import TourismAndTRavelGuide from './home_components/Tourism&TravelGuide';
import TouristStories from './home_components/TouristStories';
import VideoModal from './home_components/VideoModal';
import { useAuth } from '../../context/AuthProvider';

function Home() {
  const {modalVideoLink, setModalVideoLink} = useAuth();
  return (
    <>
        <HomeHero />
        <TourismAndTRavelGuide setModalVideoLink={setModalVideoLink} />
        <TourType />
        <TouristStories />
    </>
  )
}

export default Home