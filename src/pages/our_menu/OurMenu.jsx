import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import useMenu from '../../hooks/useMenu'
import AboutSection from '../shared/AboutSection'
import CommonHero from '../shared/CommonHero'
import MenuItems from './menu_components/MenuItems'

import bg from "../../assets/menu/banner3.jpg"

function OurMenu() {
  const [menu] = useMenu();

  const dessert = menu?.filter((item)=> item.category === "dessert")
  const salad = menu?.filter((item)=> item.category === "salad")
  const soup = menu?.filter((item)=> item.category === "soup")
  const pizza = menu?.filter((item)=> item.category === "pizza")
  const offered = menu?.filter((item)=> item.category === "offered")
  console.log(dessert)
  return (
    <>
      <CommonHero title="OUR MENU" description="Would you like to try a dish?" bg={bg} />
      <SectionTitle subTitle="Don't miss" title="TODAY'S OFFER" />
      <MenuItems items={offered} />
      <AboutSection title="DESSERTS" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      <MenuItems items={dessert} />
      <AboutSection title="PIZZA" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      <MenuItems items={pizza} />

      <AboutSection title="SALADS" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      <MenuItems items={salad} />

      <AboutSection title="SOUPS" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      <MenuItems items={soup} />
    </>
  )
}

export default OurMenu