import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Carousel(props) {
    const { items, margin, smartSpeed, autoplayTimeout } = props;

    return (
        <>
            <OwlCarousel
                className='owl-theme'
                loop
                items={(items === "" ? 4 : parseInt(items))}
                 dots={false}
                margin={(margin === "" ? 5 : parseInt(margin))}
                autoplay={true}
                smartSpeed={smartSpeed}
                autoplayTimeout={autoplayTimeout}
                pullDrag={1000}
                autoplayHoverPause={true}
                >
                {props.children}
            </OwlCarousel>
            {console.log(typeof (margin))}
        </>
    )
}

export default Carousel;