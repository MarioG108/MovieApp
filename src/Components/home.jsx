import React, { useState, useEffect } from 'react'
import Carousel from './carousel.jsx'
import Slide from './carousel-slide.jsx'

function Home() {

    const [slides, setSlides] = useState([])

    useEffect(() => {
        //esto es solo un preview, los slides deben ser llenados por la informacion del api
        //esto solo simula un conjunto de peticiones cada 2.5 seg,
        let timer1 = setTimeout(() => {
            var id = slides.length + 1;
            var date = new Date()
            const newSlide = <Slide key={id}
                keyid={id}
                src={`https://picsum.photos/200/300`}
                title={'nombre' + id} 
                lenguage={'EN'}
                rating={ Math.floor(Math.random() * 10)}
                releaseDate={date.getFullYear()}
                />
            setSlides([...slides, newSlide])
        }, 2500);
        return () => {
            clearTimeout(timer1);
        };
    }, [slides])
    return (<div>
        <h1>HOME PAGE</h1>
        <Carousel slides={6} SpaceBetween={1} scroll={true}>
            {slides}

        </Carousel>
        <Carousel slides={10} SpaceBetween={1} scroll={true}>
            {slides}

        </Carousel>
        <Carousel slides={5} SpaceBetween={1} scroll={true}>
            {slides}

        </Carousel>
        <Carousel slides={3} SpaceBetween={2} scroll={true}>
            {slides}

        </Carousel>
    </div>
    )
}

export default Home;