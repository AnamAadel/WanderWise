import React from 'react'

function DayPlan() {
    return (
        <div className="w-full py-6 lg:py-14">
            <div className="mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Day Plan</h2>
            </div>

            <div className="">
                <div className="hs-accordion-group">
                    <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                        <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                        <span className="text-blue-500 font-bold">Day 1:</span> July 1, 2023 - City Exploration
                            <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <ol>
                                <li>9:00 AM: Meet at the hotel lobby for a guided city walking tour in the City Center.</li>
                                <li>12:30 PM: Enjoy lunch at a charming local restaurant, savoring authentic flavors.</li>
                                <li>2:30 PM: Immerse yourself in the city's cultural scene with a hands-on workshop at the Creative Arts Center.</li>
                                <li>5:00 PM: Explore the vibrant local market, interact with local artisans, and discover unique crafts.</li>
                                <li>7:30 PM: Dine at an authentic restaurant, indulging in a culinary journey of local specialties at Rustic Eats.</li>
                                <li>9:00 PM: Optional evening show at the historic City Theater for those interested in entertainment.</li>
                            </ol>
                            <ul>
                                <li><b>Accommodations:</b>City Hotel Name</li>
                                <li><b>Transportation:</b> Private Bus</li>
                                <li><b>Tour Guide:</b>Tour Guide Name</li>
                                <li><b>What to Bring:</b>Comfortable Shoes, Water Bottle, Sunscreen</li>
                                <li><b>Special Notes:</b> Please be mindful of local customs and traditions.</li>
                                <li><b>Emergency Contact:</b>+123456789</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                        <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                        <span className="text-blue-500 font-bold">Day 2:</span> July 2, 2023 - City Exploration
                            <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                        <ol>
                                <li>9:00 AM: Meet at the hotel lobby for a guided city walking tour in the City Center.</li>
                                <li>12:30 PM: Enjoy lunch at a charming local restaurant, savoring authentic flavors.</li>
                                <li>2:30 PM: Immerse yourself in the city's cultural scene with a hands-on workshop at the Creative Arts Center.</li>
                                <li>5:00 PM: Explore the vibrant local market, interact with local artisans, and discover unique crafts.</li>
                                <li>7:30 PM: Dine at an authentic restaurant, indulging in a culinary journey of local specialties at Rustic Eats.</li>
                                <li>9:00 PM: Optional evening show at the historic City Theater for those interested in entertainment.</li>
                            </ol>
                            <ul>
                                <li><b>Accommodations:</b>City Hotel Name</li>
                                <li><b>Transportation:</b> Private Bus</li>
                                <li><b>Tour Guide:</b>Tour Guide Name</li>
                                <li><b>What to Bring:</b>Comfortable Shoes, Water Bottle, Sunscreen</li>
                                <li><b>Special Notes:</b> Please be mindful of local customs and traditions.</li>
                                <li><b>Emergency Contact:</b>+123456789</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                        <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                        <span className="text-blue-500 font-bold">Day 3:</span> July 3, 2023 - City Exploration
                            <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                        <ol>
                                <li>9:00 AM: Meet at the hotel lobby for a guided city walking tour in the City Center.</li>
                                <li>12:30 PM: Enjoy lunch at a charming local restaurant, savoring authentic flavors.</li>
                                <li>2:30 PM: Immerse yourself in the city's cultural scene with a hands-on workshop at the Creative Arts Center.</li>
                                <li>5:00 PM: Explore the vibrant local market, interact with local artisans, and discover unique crafts.</li>
                                <li>7:30 PM: Dine at an authentic restaurant, indulging in a culinary journey of local specialties at Rustic Eats.</li>
                                <li>9:00 PM: Optional evening show at the historic City Theater for those interested in entertainment.</li>
                            </ol>
                            <ul>
                                <li><b>Accommodations:</b>City Hotel Name</li>
                                <li><b>Transportation:</b> Private Bus</li>
                                <li><b>Tour Guide:</b>Tour Guide Name</li>
                                <li><b>What to Bring:</b>Comfortable Shoes, Water Bottle, Sunscreen</li>
                                <li><b>Special Notes:</b> Please be mindful of local customs and traditions.</li>
                                <li><b>Emergency Contact:</b>+123456789</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                        <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                        <span className="text-blue-500 font-bold">Day 4:</span> July 4, 2023 - City Exploration
                            <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                        <ol>
                                <li>9:00 AM: Meet at the hotel lobby for a guided city walking tour in the City Center.</li>
                                <li>12:30 PM: Enjoy lunch at a charming local restaurant, savoring authentic flavors.</li>
                                <li>2:30 PM: Immerse yourself in the city's cultural scene with a hands-on workshop at the Creative Arts Center.</li>
                                <li>5:00 PM: Explore the vibrant local market, interact with local artisans, and discover unique crafts.</li>
                                <li>7:30 PM: Dine at an authentic restaurant, indulging in a culinary journey of local specialties at Rustic Eats.</li>
                                <li>9:00 PM: Optional evening show at the historic City Theater for those interested in entertainment.</li>
                            </ol>
                            <ul>
                                <li><b>Accommodations:</b>City Hotel Name</li>
                                <li><b>Transportation:</b> Private Bus</li>
                                <li><b>Tour Guide:</b>Tour Guide Name</li>
                                <li><b>What to Bring:</b>Comfortable Shoes, Water Bottle, Sunscreen</li>
                                <li><b>Special Notes:</b> Please be mindful of local customs and traditions.</li>
                                <li><b>Emergency Contact:</b>+123456789</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                        <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                        <span className="text-blue-500 font-bold">Day 5:</span> July 5, 2023 - City Exploration
                            <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                        <ol>
                                <li>9:00 AM: Meet at the hotel lobby for a guided city walking tour in the City Center.</li>
                                <li>12:30 PM: Enjoy lunch at a charming local restaurant, savoring authentic flavors.</li>
                                <li>2:30 PM: Immerse yourself in the city's cultural scene with a hands-on workshop at the Creative Arts Center.</li>
                                <li>5:00 PM: Explore the vibrant local market, interact with local artisans, and discover unique crafts.</li>
                                <li>7:30 PM: Dine at an authentic restaurant, indulging in a culinary journey of local specialties at Rustic Eats.</li>
                                <li>9:00 PM: Optional evening show at the historic City Theater for those interested in entertainment.</li>
                            </ol>
                            <ul>
                                <li><b>Accommodations:</b>City Hotel Name</li>
                                <li><b>Transportation:</b> Private Bus</li>
                                <li><b>Tour Guide:</b>Tour Guide Name</li>
                                <li><b>What to Bring:</b>Comfortable Shoes, Water Bottle, Sunscreen</li>
                                <li><b>Special Notes:</b> Please be mindful of local customs and traditions.</li>
                                <li><b>Emergency Contact:</b>+123456789</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                        <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                        <span className="text-blue-500 font-bold">Day 6:</span> July 6, 2023 - City Exploration
                            <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                        <ol>
                                <li>9:00 AM: Meet at the hotel lobby for a guided city walking tour in the City Center.</li>
                                <li>12:30 PM: Enjoy lunch at a charming local restaurant, savoring authentic flavors.</li>
                                <li>2:30 PM: Immerse yourself in the city's cultural scene with a hands-on workshop at the Creative Arts Center.</li>
                                <li>5:00 PM: Explore the vibrant local market, interact with local artisans, and discover unique crafts.</li>
                                <li>7:30 PM: Dine at an authentic restaurant, indulging in a culinary journey of local specialties at Rustic Eats.</li>
                                <li>9:00 PM: Optional evening show at the historic City Theater for those interested in entertainment.</li>
                            </ol>
                            <ul>
                                <li><b>Accommodations:</b>City Hotel Name</li>
                                <li><b>Transportation:</b> Private Bus</li>
                                <li><b>Tour Guide:</b>Tour Guide Name</li>
                                <li><b>What to Bring:</b>Comfortable Shoes, Water Bottle, Sunscreen</li>
                                <li><b>Special Notes:</b> Please be mindful of local customs and traditions.</li>
                                <li><b>Emergency Contact:</b>+123456789</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DayPlan