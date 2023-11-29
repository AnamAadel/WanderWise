import React from 'react'
function CommonHero({title, description, bg}) {
  return (
    <div className="hero mx-auto min-h-screen bg-cover mb-16" style={{backgroundImage: `url(${bg})`}}>
  <div className="text-center text-neutral-content max-w-3xl md:w-full">
    <div className={`p-20 bg-gray-900 bg-opacity-60`}>
      <h1 className="mb-5 text-5xl font-cinzel">{title}</h1>
      <p className="mb-5">{description}</p>
    </div>
  </div>
</div>
  )
}

export default CommonHero