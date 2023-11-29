import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import MenuCart from '../../shared/MenuCart'

function CheckItOut() {
    return (
        <>
            <SectionTitle title="ORDER ONLINE" subTitle="From 11:00am to 10:00pm " />
            <div className="container mx-auto gird grid-cols-1 sm:grid-cols-2" style={{ display: "grid" }}>
                <MenuCart />
                <MenuCart />
                <MenuCart />
                <MenuCart />
                <MenuCart />
                <MenuCart />
            </div>
            <button className="btn border-0 border-b-4 border-black px-8 mx-auto block mb-8">View Full Menu</button>
        </>

    )
}

export default CheckItOut