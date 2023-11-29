import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LocationMap from '../../components/LocationMap';
import HeroStory from './components/HeroStory';
import Story from './components/Story';

function StoryDetails() {
  const {data} = useLoaderData();
  console.log(data);
  return (
    <>
        <HeroStory image={data.spotPhoto} photo={data.photo} title={data?.title ? data?.title : data.tourGuideRecognition} name={data.name} />
        <Story story={data.story} />
        <div className="container mx-auto">
        <LocationMap />

        </div>
    </>
  )
}

export default StoryDetails