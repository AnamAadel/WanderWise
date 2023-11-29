import React from 'react'
import AboutUsHero from './components/AboutUsHero'
import AboutCard from './components/AboutCard'

function AboutUs() {
    return (
        <>
            <AboutUsHero />
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
                <AboutCard title={"Tailored Travel Experiences"} description={"Unlock the world of personalized adventures with our Customized Itineraries. Let our travel experts craft a bespoke journey that aligns with your interests, preferences, and pace. Whether you crave cultural immersion, thrilling escapades, or serene getaways, we design the perfect itinerary for your wanderlust."} image={"https://i.pinimg.com/564x/f1/2c/dc/f12cdc93ac4de9b3897fd34b841f8ea3.jpg"} isImageTop={true} />

                <AboutCard title={"Group Adventures Unleashed"} description={"Dive into the joy of shared exploration with our Group Travel Packages. From exotic group getaways to themed travel events, we curate experiences that foster camaraderie among like-minded travelers. Join a community of adventurers and embark on unforgettable journeys together."} image={"https://i.pinimg.com/564x/6f/e7/a5/6fe7a519f6b30d6ef53f4e63224b7dc8.jpg"} isImageTop={false} />

                <AboutCard title={"Members-Only Savings"} description={" As a valued member of our travel community, enjoy exclusive access to unbeatable travel discounts. From accommodation deals to transportation savings, our Members-Only Discounts ensure you maximize your travel experiences without breaking the bank."} image={"https://i.pinimg.com/564x/a0/32/5e/a0325ec66b175841f5ed9d46d5be9f63.jpg"} isImageTop={true} />

                <AboutCard title={"Your Personal Travel Concierge"} description={"Elevate your travel experience with our dedicated Travel Concierge Services. From trip planning and reservations to on-the-go support, our concierge team is here to ensure every aspect of your journey is seamless and stress-free. Focus on creating memories; we'll handle the details."} image={"https://i.pinimg.com/564x/5b/67/d6/5b67d6d6f1f8d4f620adda92a7dfd489.jpg"} isImageTop={false} />

                <AboutCard title={"Explore from Anywhere"} description={"Immerse yourself in the world of travel without leaving your home. Our Virtual Travel Experiences bring destinations to your fingertips through interactive virtual tours, cultural workshops, and live-streamed events. Join the adventure from the comfort of your own space."} image={"https://i.pinimg.com/236x/5d/85/cd/5d85cd208381378150e34a3efd843cad.jpg"} isImageTop={true} />

                <AboutCard title={"Journey with Knowledge"} description={"Expand your travel horizons with our Travel Education Workshops. Led by experts, these workshops cover everything from sustainable travel practices to language basics for different regions. Equip yourself with the knowledge to make your journeys more meaningful and impactful."} image={"https://images.pexels.com/photos/13108628/pexels-photo-13108628.jpeg?auto=compress&cs=tinysrgb&w=400"} isImageTop={false} />
            </div>
        </>
    )
}

export default AboutUs