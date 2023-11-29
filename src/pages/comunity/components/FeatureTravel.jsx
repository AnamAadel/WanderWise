import React from 'react'
import FeatureCard from './FeatureCard'

function FeatureTravel() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">Featured Travel Adventures</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Quando cetero his ne, eum admodum sapientem ut.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				
				<div className="mt-12 space-y-12">
                <FeatureCard heading="Welcome to Wanderlust Central!" description="Embark on a journey of discovery with our Featured Travel Adventures. This section is your gateway to the most captivating discussions, inspiring travel tales, and exciting events within our travel community. Join us as we explore the world together!" />
                    <FeatureCard heading="Featured Destinations" description="Immerse yourself in the beauty of our world's most enchanting destinations. Our Featured Destinations showcase the wonders of travel, from hidden gems to popular hotspots. Get ready to add new places to your travel bucket list and share your own favorite spots with fellow wanderers" />

                    <FeatureCard heading="Top Travel Tips and Guides" description="Navigate the globe like a pro with our top-rated travel tips and guides. Whether you're a seasoned globetrotter or planning your first adventure, these curated resources will enhance your travel experience. Discover insider insights, packing hacks, and must-try local delicacies." />
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwYXQlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
        <div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwYXQlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
			<div>
				
				<div className="mt-12 space-y-12">
                <FeatureCard heading="Upcoming Travel Events" description="Get ready for takeoff! Our community hosts a variety of travel events, from virtual meetups to on-the-ground excursions. Explore our calendar for upcoming adventures, workshops, and travel-themed celebrations. Connect with fellow explorers and share your passion for travel." />


                    <FeatureCard heading="Member Adventures" description="Celebrate the journeys of our community members. From epic road trips to exotic getaways, our Member Adventures highlight the incredible experiences our members have had. Share your travel stories and gain inspiration for your next adventure." />

                    <FeatureCard heading="Explore the Best of Travel" description="Discover the crème de la crème of travel content in our community. These top-rated posts and articles have captured the essence of wanderlust and are celebrated for their authenticity and storytelling. Dive into the narratives that transport you to far-off lands." />
				</div>
			</div>
			
		</div>
	</div>
</section>
  )
}

export default FeatureTravel