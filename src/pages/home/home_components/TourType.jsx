import React from 'react';
// Import Swiper React components
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Link } from 'react-router-dom';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

const types = [
    {
        type: "City Tour",
        image: "https://cdn-icons-png.flaticon.com/128/2451/2451590.png",
    },
    {
        type: "Wildlife",
        image: "https://cdn-icons-png.flaticon.com/128/6956/6956167.png?ga=GA1.1.863241194.1678273173&semt=ais",
    },
    {
        type: "Cultural",
        image: "https://cdn-icons-png.flaticon.com/128/2063/2063141.png?ga=GA1.1.863241194.1678273173&semt=ais",
    },
    {
        type: "Nature",
        image: "https://cdn-icons-png.flaticon.com/128/2795/2795585.png",
    },
    {
        type: "Cruise",
        image: "https://cdn-icons-png.flaticon.com/128/8295/8295537.png?ga=GA1.1.863241194.1678273173&semt=ais",
    },
    {
        type: "Adventure",
        image: "https://cdn-icons-png.flaticon.com/128/1974/1974099.png?ga=GA1.1.863241194.1678273173&semt=ais",
    },
    {
        type: "Culinary",
        image: "https://cdn-icons-png.flaticon.com/128/7064/7064944.png?ga=GA1.1.863241194.1678273173&semt=ais",
    },
    {
        type: "Beach",
        image: "https://cdn-icons-png.flaticon.com/128/1086/1086426.png?ga=GA1.1.863241194.1678273173&semt=ais",
    },

]

function TourType() {
    const swiper = useSwiper();
    return (
        <div className='py-12 text-center container mx-auto relative'>
            <h2 className='font-thin text-5xl text-neutral capitalize mb-10 font-permanent relative'>Tour Types</h2>
            <Swiper
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={true}
                navigation={true}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 90,
                    },
                }}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                className="tourTypeSlider bg-blue-400  rounded-full cursor-pointer select-none px-16"

            >
                {types.map((item, idx) => (
                    <SwiperSlide key={idx}><Link to={`packages/${item.type}`} className='w-[150px] h-[150px] rounded-full bg-neutral text-white flex flex-col gap-2  justify-center items-center'><img src={item.image} className='w-12 invert' alt="" /> <h3>{item.type}</h3></Link></SwiperSlide>

                ))}
            </Swiper>
            <button className='absolute bottom-[100px] left-0 text-6xl' onClick={() => swiper.slidePrev()}><GrFormPreviousLink /></button>
            <button className='absolute bottom-[100px] right-0 text-6xl' onClick={() => swiper.slideNext()}><GrFormNextLink /></button>
        </div>
    )
}

export default TourType