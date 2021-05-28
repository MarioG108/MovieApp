import React, { useState,useEffect } from 'react'


// Import Swiper React components
import SwiperCore, { Navigation, Scrollbar, Zoom } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';
// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, Zoom]);

function Carousel(props) {
    const {slides, SpaceBetween } = props;
    var children = [props.children];
    const [childs, setchilds] = useState([...children])

useEffect(() => {
    setchilds([...props.children])
  
}, [])

    return (
        <>

            <Swiper
                autoHeight={true}
                loop={true}
                scrollbar={{ draggable: true }}
                navigation
                slidesPerView={(typeof(slides) == 'undefined' ||slides <= 0 ? 5 : slides )}
                spaceBetween={(typeof(SpaceBetween) === 'undefined' || SpaceBetween <= 0 ?  3 :SpaceBetween )}

            >
                {childs.map((child, index) => {
                    return (
                        <SwiperSlide key={index} >
                            {child}
                        </SwiperSlide>
                        )
                })}
            </Swiper>
        </>
    )
}

export default Carousel;