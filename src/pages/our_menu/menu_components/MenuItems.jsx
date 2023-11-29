import React from 'react'
import MenuCart from '../../shared/MenuCart'

function MenuItems({items}) {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
    {items && items.map((item, ind) => (
        <MenuCart key={ind} item={item} />

    ))}
    </div>
  )
}

export default MenuItems