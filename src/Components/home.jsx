import React, { useState, useEffect } from 'react'
import Preloader from './preloader.jsx'
import Carousel from './Slider/swiper'
import Slide from './Slider/slider'

function Home() {
    const [isloading, setIsloading] = useState(true)
    const [slides, setSlides] = useState([])
    useEffect(() => {
        if (slides.length <= 50) {
            var id = slides.length + 1;
            var date = new Date()
            const newSlide = <Slide key={id}
                keyid={id}
                src={`https://picsum.photos/200/300`}
                title={'nombre' + id}
                original_language={'EN'}
                overview={"Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister."}
                vote_average={Math.floor(Math.random() * 10)}
                releaseDate={date.getFullYear()}
            />
            setSlides([...slides, newSlide])
            if (slides.length >= 50) { setIsloading(false) }
        }
    }, [slides])
    return (<>
        { isloading ?
            <Preloader /> :
            <div className='container-fluid'>
                <h1>HOME PAGE</h1>

                <Carousel autoHeight={true} >
                    {slides}
                </Carousel>

            </div>}
    </>
    )
}

export default Home;