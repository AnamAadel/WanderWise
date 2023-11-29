function CommunityHero() {
    return (
        <div className="hero z-0 h-[70vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1637276661836-9ca7bf61eb0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Wanderlust Central</h1>
                    <p className="mb-5">We're thrilled to have you join our community of [your niche/interest]. Whether you're a seasoned expert or just starting out, this is the perfect place to connect, share, and learn. Take a moment to explore the various sections and make yourself at home. We believe in fostering a positive and supportive environment, and we're excited to have you as part of our growing community!</p>
                </div>
            </div>
        </div>
    )
}

export default CommunityHero