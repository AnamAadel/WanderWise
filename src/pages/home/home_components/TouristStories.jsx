import React from 'react'
import { Link } from 'react-router-dom'
import useStory from '../../../hooks/useStory'
import StoryCard from '../../stories/components/StoryCard'

function TouristStories() {
  const {storyData} = useStory()
  console.log(storyData)
  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<h2 className='font-thin text-5xl text-neutral capitalize mb-10 font-permanent relative text-center'>Tourist Stories</h2>
  <div className="grid lg:grid-cols-2 gap-6">
  {storyData.slice(0, 6).map(story => (
    <StoryCard story={story} key={story._id} />

  ))}
  <Link to="/packages" className='btn btn-neutral font-bold col-span-full my-12'>All Stories</Link>
  </div>
</div>
  )
}

export default TouristStories