import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CommentCart from './CommentCart';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper/modules';


function Testimonials() {
  return (
    <div className='col-span-4'>
    <h3 className='text-5xl font-extrabold text-neutral pt-8 capitalize'>Testimonials</h3>
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        autoplay={true}
        loop={true}
        freeMode={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay, FreeMode]}
        className="mySwiper pb-12"
      >
        <SwiperSlide>

        <CommentCart />
        </SwiperSlide>
        <SwiperSlide>

        <CommentCart />
        </SwiperSlide>
        <SwiperSlide>

        <CommentCart />
        </SwiperSlide>
        <SwiperSlide>

        <CommentCart />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials