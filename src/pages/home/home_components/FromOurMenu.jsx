import React from 'react'
import bg from "../../../assets/home/featured.jpg"
import SectionTitle from '../../../components/SectionTitle'

function FromOurMenu() {
    return (
        <div className="container relative mx-auto px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100 z-[1]" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-[-1]"></div>
            <SectionTitle title="ORDER ONLINE" subTitle="From 11:00am to 10:00pm " />
            <div className="container mx-auto mt-16  gird grid-cols-1 sm:grid-cols-2" style={{ display: "grid" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 p-6 items-center mt-8 lg:mt-0  gap-8">
                <img src={bg} alt="" className="object-contain" />
                <div className="flex flex-col md:justify-center md:items-start p-6 text-center rounded-sm md:text-left text-white">
                    <h1 className="text-lg"> March 20, 2023 <br />
                        WHERE CAN I GET SOME?
                    </h1>
                    <p className="mt-6 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur. </p>
                    <button type="button" className="flex items-center justify-center px-6 p-3 font-semibold rounded-md border-b-4 border-gray-200 text-gray-200 hover:bg-gray-800 hover:border-gray-800 transition-all duration-300">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default FromOurMenu