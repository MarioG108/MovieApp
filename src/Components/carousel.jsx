import React from 'react'


// Import Swiper React components
import SwiperCore, { Navigation, Scrollbar, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/components/lazy/lazy.min.css"
import 'swiper/components/navigation/navigation.scss';
// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, Lazy]);

function Carousel({autoHeight =false, children}) {
    
    return (
        <>
        
            <Swiper
                breakpoints={{
                    // when window width is >= 320
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 1
                    },
                    // when window width is >= 380px
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 1
                    },
                    // when window width is >= 480px

                    480: {
                        slidesPerView: 3,
                        spaceBetween: 3
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 3 
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 1
                    },
                }}
                loop={true}
                scrollbar={{ draggable: true }}
                navigation
                lazy={true}
            >

                {
                    
                    typeof (children) != 'undefined' && children.length > 1 ?
                        children.map((child, index) => {
                            return (
                                <SwiperSlide key={index} className="swiper-lazy"  >
                                    {child}
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </SwiperSlide>
                            )
                        }) : <div className="wrapper" >                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></div>

                }

            </Swiper>
        </>
    )
}

export default Carousel;