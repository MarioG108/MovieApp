import React, { useState, useEffect } from 'react'

function Slide(props) {
    const { keyid, src, title,rating,releaseDate,lenguage } = { ...props }
    // useEffect(() => {
    //     console.log({ keyid })
    //     console.log(`${src}/?braker=${keyid}`);


    // }, [])

    return (
        <div key={keyid} class="card " >
            <img src={`${src}/?braker=${keyid} `} alt={keyid} class="card-img-top swiper-lazy" loading="lazy" />
            <div class="card-img-overlay" style={{backgroundColor:'rgba(255,255,255,0.3)', height:'20%'}}>
                          <h6 class="card-title" >{title} ({lenguage})  <span class="card-text"> <i class="fas fa-star" style={{color:'#ffa41c'}}></i>{rating}</span> 
                           </h6>
                <span class="card-text">{releaseDate}</span>
            </div>
        </div>

    )
}
export default Slide;