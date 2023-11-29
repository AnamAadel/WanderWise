import React from 'react'
import PageHeader from '../../components/PageHeader'
import useStory from '../../hooks/useStory'
import StoryCard from './components/StoryCard'

function Stories() {
  const {storyData} = useStory()
  return (
    <>
        <PageHeader PageName={"Stories"} />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-12 gap-8">
        {storyData.map(story => (
    <StoryCard story={story} key={story._id} />

  ))}
        </div>
    </>
  )
}

export default Stories