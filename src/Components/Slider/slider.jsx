import React from 'react'
import { Link } from 'react-router-dom'

function Slide({ id, poster_path, title, release_date, original_language, overview, vote_average }) {
    
 
    return (
        <div key={id} className="card ">
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={id} className="card-img-top swiper-lazy" loading="lazy" />
            <div className="card-img-overlay" >

                <div>
                    <span className="card-title slide-title" ><Link to={`/details/${id}`}> {title}</Link> {original_language}</span>
                </div>
                <div className="slide-info">
                    <span className="card-text slide-info-vote"><i className="fas fa-star" style={{ color: '#ffa41c' }}></i> {vote_average}</span>
                    <span className="card-text slide-info-date">{release_date}</span>
                </div>
                <div>

                    <p className="card-text slide-description">{overview}</p>
                </div>

            </div>
        </div>

    )
}
export default Slide;