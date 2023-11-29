import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'
import VideoModal from './pages/home/home_components/VideoModal'
import Footer from './pages/shared/Footer'
import NavBar from './pages/shared/NavBar'

function Root() {
  const {loading, modalVideoLink} = useAuth();
  return (
    <>  
      {!loading ? 
        <>
        <NavBar />
        <Outlet />
        
        <VideoModal modalVideoLink={modalVideoLink} />
        <Footer />
        </>
         :
        <img src="https://i.pinimg.com/originals/cb/a7/ad/cba7ad38fe88b09cb908afaac1ea7a21.gif" className='w-full h-screen fixed top-0 left-0 z-[9999999] object-cover' alt="" /> 
      }
    </>
  )
}

export default Root