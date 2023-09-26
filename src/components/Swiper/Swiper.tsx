import React, { ReactNode, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
interface SwiperProps {
  children: ReactNode;
  type: 2 | 3;
}

export default function SwiperCard(props: SwiperProps) {
  const { children, type } = props;
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        style={type == 2 ? { padding: "1rem" } : {}}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: type == 2 ? 1 : 2,
            spaceBetween: 40,
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 45,
          },
          1024: {
            slidesPerView: type,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
