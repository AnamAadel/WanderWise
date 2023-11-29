import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function DashboardSidebar() {
    const [showSideBar, setShowSideBar] = useState(false);
    const {logout, user, role} = useAuth();
    const navigation = useNavigate();

    console.log(role)

    const handleLogout = ()=> {
        logout().then( res =>  {
            navigation("/")
        })
    }
    

    const sidebarWidth = showSideBar ? { width: "16rem" } : null;

    return (
        <>
            <button className='text-3xl font-bold flex justify-center items-center lg:hidden fixed top-8 left-8 bg-white p-2 z-50 rounded-full' onClick={() => setShowSideBar(true)}><BiMenu className='text-4xl' /></button>
            <div className={`hero-overlay fixed w-screen h-screen top-0 left-0 ${showSideBar ? "block" : "hidden"} lg:hidden`} onClick={() => setShowSideBar(false)}></div>


            <div className="overflow-hidden hidden lg:block whitespace-nowrap transition-all duration-300" style={sidebarWidth} id='sidebar'></div>


            <aside className="fixed top-0 left-0 z-[99999] bg-blue-800 min-h-screen w-0 overflow-hidden lg:w-64 lg:block shadow-xl whitespace-nowrap transition-all duration-300" style={sidebarWidth} id='sidebar'>
                <button className='text-lg text-bold text-white block lg:hidden absolute top-8 right-8' onClick={() => setShowSideBar(false)}><IoClose className='text-4xl' /></button>
                <div className="p-6 w-full flex justify-center items-center flex-col gap-4">
                    <div className="avatar" title='user'>
                        <div className="w-24 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <h3 className='text-lg text-bold text-white'>{user?.displayName}</h3>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    
                    { role === "admin" ?
                        <>
                            <NavLink to="/dashboard/admin" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                                <i className="fas fa-tablet-alt mr-3"></i>
                                My Profile
                            </NavLink>
                            <NavLink to="/dashboard/addPackage" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                                <i className="fas fa-tablet-alt mr-3"></i>
                                Add Package
                            </NavLink>
                            <NavLink to="/dashboard/manageUsers" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                                <i className="fas fa-tablet-alt mr-3"></i>
                                Manage User
                            </NavLink>
                            
                        </>
                        :
                        role === "tourGuide" ?
                        <>
                            <NavLink to="/dashboard/tourGuide" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                                <i className="fas fa-tablet-alt mr-3"></i>
                                My Profile
                            </NavLink>
                            <NavLink to="/dashboard/assignTour" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                                <i className="fas fa-tablet-alt mr-3"></i>
                                My Assigned Tour
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/dashboard/tourist" className="flex items-center bg-opacity-0 bg-gray-200 hover:bg-opacity-20 text-white py-4 pl-6">
                                <i className="fas fa-tachometer-alt mr-3"></i>
                                My Profile
                            </NavLink>
                            <NavLink to="/dashboard/myBookings" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                                <i className="fas fa-sticky-note mr-3"></i>
                                My Bookings
                            </NavLink>
                            <NavLink to="/dashboard/wishlist" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                                <i className="fas fa-table mr-3"></i>
                                My Wishlist
                            </NavLink>
                        </>
                    }
                    <div className="w-full border-t-2 border-white">
                        <NavLink to="/" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Home
                        </NavLink>

                        <NavLink to="/communities" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Community
                        </NavLink>
                        <NavLink to="/packages" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Packages
                        </NavLink>
                        <NavLink to="/stories" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Stories
                        </NavLink>
                        <NavLink to="/blog" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Blog
                        </NavLink>
                        <NavLink to="/contact" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            CONTACT
                        </NavLink>
                        <a className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6" onClick={handleLogout}>
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Logout
                        </a>

                    </div>
                </nav>
            </aside>
        </>
    )
}

export default DashboardSidebar