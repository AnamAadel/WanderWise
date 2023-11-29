import React from 'react';
import { BiSolidPurchaseTagAlt } from 'react-icons/bi';
import { IoNewspaperOutline, IoPricetagsOutline, IoVideocamOutline } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";
import { MdAutoStories } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";


function AdminStats({adminStats}) {
  return (
    <section className="p-6 px-16 my-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
    {/* bookings */}
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
					<polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
					<path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
					<path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.bookings}</p>
				<p className="capitalize">Bookings</p>
			</div>
		</div>
        {/* users */}
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
					<path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
					<path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
					<polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
					<polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.users}</p>
				<p className="capitalize">customers</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <BiSolidPurchaseTagAlt className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">0%</p>
				<p className="capitalize">Purchases</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <LuPackageOpen className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.packages}</p>
				<p className="capitalize">Packages</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <IoVideocamOutline className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.videos}</p>
				<p className="capitalize">Videos</p>
			</div>
		</div>
		{/* admin */}
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <RiAdminLine className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.admin}</p>
				<p className="capitalize">Tour Guides</p>
			</div>
		</div>
		{/* tour guide */}
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <PiChalkboardTeacherFill className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.tourGuide}</p>
				<p className="capitalize">Tour Guides</p>
			</div>
		</div>

		{/* Revenue */}
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <IoPricetagsOutline className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">0%</p>
				<p className="capitalize">Revenue</p>
			</div>
		</div>

		{/* stories */}
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <MdAutoStories className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.stories}</p>
				<p className="capitalize">Stories</p>
			</div>
		</div>

		{/* stories */}
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 border-2 border-blue-400">
            <IoNewspaperOutline className="text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{adminStats.blog}</p>
				<p className="capitalize">blog</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default AdminStats