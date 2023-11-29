import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from './components/dashboardSidebar'
import { useAuth } from '../context/AuthProvider'

function Main() {
  const {loading}= useAuth();
  return (
    <>
    {
      !loading ?
    <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-5">
        <DashboardSidebar />
        <div className='col-span-full lg:col-span-4'>

        <Outlet />
        </div>
    </div>
    :
    <img src="https://i.pinimg.com/originals/eb/70/7a/eb707ae7096cc8df384f1bf87dab547a.gif" className='w-full h-screen fixed top-0 left-0 z-[9999999]' alt="" />

    }

    </>
  )
}

export default Main