import React, { useState, useEffect, useContext, useMemo } from 'react'
import Preloader from './preloader.jsx'
import Carousel from './Slider/carousel'
import Upcomming from './Slider/upcomming.jsx'
import { MovieContext } from '../Context/movieContext'

function Home() {

  const [isloading, setIsloading] = useState(true)
  const [movies, setmovies] = useContext(MovieContext);
  const movieList = useMemo(() => movies, [movies, setmovies])

  useEffect(() => {
    if (isloading && movieList !== null) {setIsloading(false)}

  }, [movieList])

  return (<>

    {isloading ?
      <Preloader /> :
      <div>
        <h2 className="ml-3"><i className="fas fa-ticket-alt"></i> Trending movies this week</h2>
        <Carousel movies={movieList} />
        <h3 className="m-3"><i className="fas fa-ticket-alt"></i> Upcoming movies</h3>
        <Upcomming page={1} ></Upcomming>
        <Upcomming page={2} ></Upcomming>
        <Upcomming page={3} ></Upcomming>
        <Upcomming page={4} ></Upcomming>

      </div>}
  </>
  )
}

export default Home;