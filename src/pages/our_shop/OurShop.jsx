import React from 'react'
import bg from "../../assets/shop/banner2.jpg"
import CommonHero from '../shared/CommonHero'
import ShopMenu from './shop_componts/ShopMenu'

function OurShop() {
  return (
    <>
      <CommonHero title="OUR SHOP" description="Would you like to try a dish?" bg={bg} />
      <ShopMenu />
    </>
  )
}

export default OurShop