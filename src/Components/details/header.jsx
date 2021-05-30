import React from 'react'

function Header({ poster_path, title, release_date, overview, vote_average, backdrop_path, genres }) {

    const baseimg = 'https://image.tmdb.org/t/p/'

    return (<div className='details-header' style={{ backgroundImage: `url(${baseimg}/original/${backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="filter">
            <div className="container">
                <div className="row">
                    <div className="col-12  col-sm-12 col-md-5 ">
                        <img src={`${baseimg}/w500/${poster_path}`} alt="poster_image" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 details-data" >
                        <div className="row title">
                            <h2>{title} <span>({release_date.substring(0, 4)})</span></h2>
                        </div>
                        <div className="row info ">
                            <span className=" ">
                                {release_date}
                            </span>
                            {genres.map((genre,key) => <span key={key} className=" genre">{`${genre.name}`} </span>)}
                        </div>
                        <div className="row info">
                            <span className=" "><i className="fas fa-star" style={{ color: '#ffa41c' }}></i> {vote_average + '/10'}</span>
                        </div>
                        <div className="row description">
                            <p>
                                {overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Header;