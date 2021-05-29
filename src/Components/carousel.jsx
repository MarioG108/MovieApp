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

function Carousel(props) {
   const { children, slides, SpaceBetween } = {...props}
    return (
        <>
            <Swiper
                autoHeight={true}
                loop={true}
                scrollbar={{ draggable: true }}
                navigation
                slidesPerView={(typeof (slides) == 'undefined' || slides <= 0 ? 5 : slides)}
                spaceBetween={(typeof (SpaceBetween) === 'undefined' || SpaceBetween <= 0 ? 3 : SpaceBetween)}
                lazy={true}
            >

                {
                    typeof(children) != 'undefined' && children.length > 1   ?
                    children.map((child, index) => {
                        return (
                            <SwiperSlide key={index}  >
                                {child}
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </SwiperSlide>
                        )
                    }):''
                }

            </Swiper>
        </>
    )
}

export default Carousel;