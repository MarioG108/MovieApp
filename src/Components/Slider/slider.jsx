import React from 'react'

function Slide(props) {
    const { keyid, src, title, releaseDate, original_language, overview, vote_average } = { ...props }
 
    return (
        <div key={keyid} className="card ">
            <img src={`${src}/?braker=${keyid} `} alt={keyid} className="card-img-top swiper-lazy" loading="lazy" />
            <div className="card-img-overlay" >

                <div>
                    <span className="card-title slide-title" >{title} ({original_language})</span>
                </div>
                <div className="slide-info">
                    <span className="card-text slide-info-vote"><i className="fas fa-star" style={{ color: '#ffa41c' }}></i> {vote_average}</span>
                    <span className="card-text slide-info-date">{releaseDate}</span>
                </div>
                <div>

                    <p className="card-text slide-description">{overview.substring(0, 180) + '...'}</p>
                </div>

            </div>
        </div>

    )
}
export default Slide;