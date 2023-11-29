import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPablic';
import useGetPackages from '../../../hooks/useGetPackages';

function PackageSidebar({setPackages}) {
	const {packageData} = useGetPackages();
	const axiosPublic = useAxiosPublic();
	const types = packageData.map(item => item.tourType);

	const loadPackageByType = (type)=> {
		axiosPublic.get(`/packages/type/${type}`).then(res => {
			setPackages(res.data);
		}).catch(err => console.lgo(err));
	}
  return (
    <aside className="dark:bg-gray-900 dark:text-gray-100 py-12 px-8">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-xl md:text-2xl  lg:text-3xl font-bold uppercase dark:text-gray-400">Categories</h2>
			<div className="flex flex-col space-y-1 text-xl font-semibold">
				<Link to="/packages" className='py-2 text-left pl-4 hover:pl-10 hover:text-blue-600 transition-all duration-500 border-b-2' >All</Link>
			{types.map(type => (

				<Link key={type} to={`/packages/${type}`} onClick={()=> loadPackageByType(type)} className='py-2 text-left pl-4 hover:pl-10 hover:text-blue-600 transition-all duration-500 border-b-2 whitespace-nowrap' >{type}</Link>
			))}
			</div>
		</div>
	</nav>
</aside>
  )
}

export default PackageSidebar