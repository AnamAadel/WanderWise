import React from 'react'
import { Link } from 'react-router-dom'

function AboutUsHero() {
    return (
        <div className="hero z-0 h-[70vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">About Our Community</h1>
                    <div className="text-2xl font-semibold breadcrumbs mx-auto flex justify-center">
                        <ul className='mx-auto'>
                            <li><Link to="/">Home</Link></li>
                            <li>About us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHero