import React from 'react'

function MenuCart({item}) {

  return (
    <div className="relative flex max-w-2xl p-6 flex-row items-start gap-4">
                    <div className="w-28">
                        <img alt="" src={item?.image} className="object-cover w-full h-full rounded-full rounded-tl-none shadow" />
                    </div>
                    <div className="p-3 gap-4 flex flex-col justify-center" >
                        <h3 className="text-2xl flex justify-between">{item?.name} BREAST ------------- <span className='text-yellow-500'>{item?.price}</span></h3>
                        <p className="text-sm dark:text-gray-400 font-medium text-gray-600">{item?.recipe}</p>
                    </div>
                </div>
  )
}

export default MenuCart