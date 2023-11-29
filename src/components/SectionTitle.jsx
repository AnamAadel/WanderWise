import React from 'react'

function SectionTitle({subTitle, title}) {
  return (
    <div className='text-center space-y-2 mb-6'><h3 className='text-yellow-500 text-lg'>---{subTitle}---</h3> <h2 className='text-2xl py-6 border-t-4 border-b-4 border-gray-200 inline-block px-20'>{title}</h2></div>
  )
}

export default SectionTitle