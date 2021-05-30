import React, { useState, useEffect } from 'react'

function Slide(props) {
    const { keyid, src, title,rating,releaseDate,lenguage } = { ...props }
    // useEffect(() => {
    //     console.log({ keyid })
    //     console.log(`${src}/?braker=${keyid}`);


    // }, [])

    return (
        <div key={keyid} className="card ">
            <img src={`${src}/?braker=${keyid} `} alt={keyid} className="card-img-top swiper-lazy" loading="lazy" />
            <div className="card-img-overlay" style={{}}>
                          <h6 className="card-title" >{title} ({lenguage})  <span className="card-text"> <i className="fas fa-star" style={{color:'#ffa41c'}}></i>{rating}</span> 
                           </h6>
                <span className="card-text">{releaseDate}</span>
            </div>
        </div>

    )
}
export default Slide;