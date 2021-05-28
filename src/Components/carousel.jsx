import React, { useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Carousel(props) {
    const { smartSpeed, autoplayTimeout } = props;
    const [childs] = useState([...props.children])
    

    return (
        <>
            <OwlCarousel
                className='owl-theme'
                loop
                items={4}
                 dots={false}
                margin={5}
                autoplay={true}
                smartSpeed={smartSpeed}
                autoplayTimeout={autoplayTimeout}
                pullDrag={1000}
                autoplayHoverPause={true}
                > 
               
                {childs}
            </OwlCarousel>)
        </>
    )
}

export default Carousel;