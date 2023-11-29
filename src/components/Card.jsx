import React from 'react'
import useAddToCart from '../hooks/useAddToCart'
function Card({item}) {
	const handleAddToCart = useAddToCart()
  return (
    <div className="rounded-md shadow-md bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
	<img src={item?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between items-center p-6 space-y-8 text-center">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracki">{item?.name}</h2>
			<p className="dark:text-gray-100">{item?.recipe}</p>
		</div>
		<button type="button" className="flex items-center justify-center px-6 p-3 font-semibold tracki rounded-md border-b-4 border-yellow-600 text-yellow-600 bg-gray-300 hover:bg-gray-800 hover:border-0 transition-all duration-300" onClick={()=> handleAddToCart(item)}>Add To Cart</button>
	</div>
</div>
  )
}

export default Card