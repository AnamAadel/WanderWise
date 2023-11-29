import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import useTourGuide from '../../../hooks/useTourGuide';
import ProfileCard from '../../shared/ProfileCard';

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

function TourGuideList() {
    const {tourGuideData} = useTourGuide();
    const swiper = useSwiper();

    return (
        <div className='py-12 text-center container mx-auto relative'>
            <h2 className='font-thin text-5xl text-neutral capitalize mb-10 font-permanent relative'>Tour Guides</h2>
            <Swiper
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                loop={true}
                autoplay={true}
                navigation={true}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                className="tourGuideList"

            >
                {tourGuideData.map((info, idx) => (
                    <SwiperSlide key={idx}>
                        <ProfileCard tourGuideInfo={info} />
                    </SwiperSlide>

                ))}
            </Swiper>
            {/* <button className='absolute bottom-[100px] left-0 text-6xl' onClick={() => swiper.slidePrev()}><GrFormPreviousLink /></button>
            <button className='absolute bottom-[100px] right-0 text-6xl' onClick={() => swiper.slideNext()}><GrFormNextLink /></button> */}
        </div>
    )
}

export default TourGuideList