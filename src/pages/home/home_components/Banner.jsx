import React from 'react'

function Banner({ item, index, currentIndex }) {
    console.log(index , currentIndex )
    return (
        <div className="hero min-h-screen relative z-[1] overflow-hidden" >
            <div className="hero-overlay bg-opacity-60"></div>
            <img src={item.image} className='w-full h-full absolute top-0 left-0 z-[-1] transition-all ease-linear duration-[7s] object-cover object-bottom bg' alt="" />
            <div className="hero-content w-full relative text-neutral-content">
                <div className="w-full pb-44  sm:px-12">
                    <div className={`overflow-hidden transition-all delay-1000 duration-[3s] heading`}>
                        <h1 className="mb-5 text-2xl sm:text-4xl  md:text-6xl font-bold w-[220px] sm:w-[380px] md:w-[580px]">{item.title}</h1>
                    </div>
                    <div className='absolute bottom-0 right-12 text-right' ><p className="mb-5 w-full md:w-[380px]">{item.subTitle}.</p></div>
                </div>
            </div>
        </div>
    )
}

export default Banner