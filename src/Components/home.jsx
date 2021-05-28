import React from 'react'
import Carousel from './carousel.jsx'

function Home() {
    const style = {
        backgroundColor: '#f3f3f3',
        with: '50px',
        height: '28vh',
        color: 'black',
        positionX: '50%'
    }
    return (<div>
        <h1>HOME PAGE</h1>
        <Carousel slides={10} SpaceBetween={1} scroll={true}>           
            <div style={style} className="text-center"><span>1</span></div>
            <div style={style} className="text-center"><span>2</span></div>
            <div style={style} className="text-center"><span>3</span></div>
            <div style={style} className="text-center"><span>4</span></div>
            <div style={style} className="text-center"><span>5</span></div>
            <div style={style} className="text-center"><span>6</span></div>
        </Carousel>
        <hr></hr><Carousel>
            <div style={style} className="text-center"><span>1</span></div>
            <div style={style} className="text-center"><span>2</span></div>
            <div style={style} className="text-center"><span>3</span></div>
        </Carousel>
        <hr></hr>
        <Carousel>
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