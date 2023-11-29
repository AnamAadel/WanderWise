import React from 'react'
import ProfileCard from '../../shared/ProfileCard'

function OurTeam() {
  return (
    <div className='py-12'>
        <h2 className='font-bold text-5xl text-center mb-12'>Our Team</h2>
        <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </div>
    </div>
  )
}

export default OurTeam