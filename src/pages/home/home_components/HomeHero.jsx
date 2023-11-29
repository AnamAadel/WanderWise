import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import Banner from './Banner';
function HomeHero() {
    const [currentIndex, setCurrentIndex] = useState();
    const { refetch ,isPending, isError, data = [], error } = useQuery({ queryKey: ['banner'], queryFn: async ()=> {
        const res = await fetch("heroContent.json");
        const data = res.json();
        console.log(data);
        return data
    } })

    console.log(data)
    return (
        <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{delay: 7000}}
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper => console.log(swiper))}
        onSlideChange={(swiper => setCurrentIndex(swiper.activeIndex))}
        className="homeSlider"
      >
      {data?.map((item, idx)=> (
        <SwiperSlide key={idx} ><Banner item={item} currentIndex={currentIndex} index={idx} /></SwiperSlide>

      )) 
        
      }
      </Swiper>
    </>
    )
}

export default HomeHero