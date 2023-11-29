import React from 'react'
import bg from "../../assets/home/chef-service.jpg"
function AboutSection({overlay, title, description}) {
  return (
    <div className="hero container mx-auto min-h-screen my-12" style={{backgroundImage: `url(${bg})`}}>
  <div className="hero-content text-center text-neutral-content ">
    <div className={`max-w-3xl p-20 ${overlay === "white" ? "bg-white text-gray-900" : "bg-gray-900 bg-opacity-60"}`}>
      <h1 className="mb-5 text-5xl font-cinzel">{title}</h1>
      <p className="mb-5">{description}</p>
    </div>
  </div>
</div>
  )
}

export default AboutSection