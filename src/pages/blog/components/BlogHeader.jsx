import React from 'react'
import LocationMap from '../../../components/LocationMap'

function BlogHeader({blog}) {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <h3 rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-4xl text-center py-6">{blog.title}</h3>

                <img src={blog.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="space-y-6 w-full py-8 lg:rounded-md dark:bg-gray-900">
                    <div className="flex flex-col  md:flex-row items-center justify-between w-full dark:text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <img src={blog.image} alt="" className="w-24 h-24 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                            <p className="text-xl font-bold">{blog.author} • {blog.date}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-lg md:mt-0">4 min read • 1,570 views</p>
                    </div>
                    <div className="dark:text-gray-100">
                        <p className='text-gray-600 text-xl font-bold mb-10'>Escape to the pristine beaches and lush landscapes of a tropical paradise. Experience the beauty of crystal-clear waters and vibrant coral reefs.</p>
                        <p className=' text-lg '>
                            In the timeless pursuit of wanderlust, each journey becomes a chapter in the narrative of our lives—a captivating tale woven through diverse cultures, breathtaking landscapes, and the insatiable desire to explore the unknown. The essence of travel lies not only in the destinations we visit but in the transformative experiences that shape our perspectives and enrich our souls. <br />

                            Imagine sinking your toes into the soft, warm sands of a secluded tropical beach, the sun casting a golden glow on crystal-clear waters. These paradises offer sanctuary and tranquility, a chance to disconnect from the bustling world and reconnect with the rhythmic pulse of nature. Whether it's the idyllic beaches of the Maldives or the iconic overwater bungalows of Bora Bora, these destinations paint a canvas of serenity and bliss.<br /><br />

                            On the other side of the globe, Europe unfolds as a living tapestry of history and modernity. Cobblestone streets whisper tales of bygone eras, while modern cityscapes pulsate with the vibrant energy of the present. From the romance of Paris to the historic charm of Rome, Europe invites travelers to step into a living museum where each corner tells a story, and each monument is a testament to the endurance of time.
                            <br /><br />
                            For those seeking the heartbeat of adventure, the vast landscapes of Africa offer a canvas for untamed beauty. A safari adventure becomes a front-row seat to the theater of the wild, where lions roam freely, and elephants graze against the backdrop of a sunset-painted savannah. The raw, unbridled nature of Africa invites intrepid explorers to witness the extraordinary in its purest form.
                            <br /><br />
                            Sailing through the azure waters of the Mediterranean is a journey through time itself. Islands, each with its unique character, beckon sailors and dreamers alike. From the historical richness of Athens to the vibrant markets of Istanbul, the Mediterranean is a mosaic of cultures, where ancient ruins and modern delights coexist in harmonious splendor.<br /><br /><br />

                            Tokyo, a city where tradition meets the avant-garde, comes alive as the sun sets. Neon lights paint the cityscape in vibrant hues, inviting night owls to explore its eclectic nightlife. Traditional izakayas and futuristic clubs stand side by side, offering a sensory feast for those eager to immerse themselves in Tokyo's unique after-dark energy.
                            <br /><br />
                            In the heights of the Andes, the Inca Trail weaves a path through mist-shrouded peaks, leading to the awe-inspiring Machu Picchu. This hiking adventure is a physical and historical odyssey, where each step echoes with the whispers of an ancient civilization lost to time. The journey to Machu Picchu becomes not just a physical ascent but a spiritual connection to the ingenuity of those who came before.
                            <br /><br /><br />
                            Island-hopping through the Caribbean is an indulgence in the laid-back luxury of paradise. Each island, with its own rhythm and charm, invites travelers to slow down and savor the beauty of white sandy beaches, azure waters, and the warmth of the sun. Footprints in the sand become the only evidence of time passing, as worries dissipate with each gentle wave.

                            Southeast Asia, with its mystical allure, invites travelers on an odyssey through ancient temples, bustling markets, and landscapes straight from the realms of folklore. From the bustling streets of Bangkok to the tranquility of Angkor Wat, this part of the world captivates with its rich cultural tapestry. Southeast Asia beckons explorers to immerse themselves in traditions, flavors, and the ever-present allure of the unknown.
                        </p>
                        <LocationMap />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader