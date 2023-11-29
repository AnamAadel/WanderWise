import React from 'react'
import CoverPhoto from '../../../pages/profile/components/CoverPhoto'
import AddStory from './components/AddStory'

function UserHome() {
  return (
    <div className='w-full'>
      <CoverPhoto />
      <AddStory />
    </div>
  )
}

export default UserHome