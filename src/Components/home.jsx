import React from 'react'
import Carousel from './carousel.jsx'

function Home() {
    const style = {
        backgroundColor: '#fff',
        with: '40px',
        height: '28vh',
        color: 'black',
        positionX: '50%'
    }
    return (<div>
        <h1>home Page</h1>
        <Carousel
           
            smartSpeed="2000"
            autoplayTimeout="3500">
            <div style={style} className="text-center"><span>1</span></div>
            <div style={style} className="text-center"><span>2</span></div>
            <div style={style} className="text-center"><span>3</span></div>
        </Carousel>
        <hr></hr><Carousel
            
            smartSpeed="2000"
            autoplayTimeout="3500">
            <div style={style} className="text-center"><span>1</span></div>
            <div style={style} className="text-center"><span>2</span></div>
            <div style={style} className="text-center"><span>3</span></div>
            <div style={style} className="text-center"><span>4</span></div>
        </Carousel>
        <hr></hr>
        <Carousel
            
            smartSpeed="2000"
            autoplayTimeout="3500">
            <div style={style} className="text-center"><span>1</span></div>
            <div style={style} className="text-center"><span>2</span></div>
            <div style={style} className="text-center"><span>3</span></div>
            <div style={style} className="text-center"><span>4</span></div>
            <div style={style} className="text-center"><span>5</span></div>
            <div style={style} className="text-center"><span>6</span></div>
            <div style={style} className="text-center"><span>7</span></div>
        </Carousel>
        </div>
    )
}

export default Home;