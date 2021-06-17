import React, { useState, useEffect, useContext, useMemo } from 'react'
import Preloader from './preloader.jsx'
import Carousel from './Slider/carousel'
// import Upcomming from './Slider/upcomming.jsx'
import { FindMovie } from '../Services/apicontroller.js'
import { MovieContext } from '../Context/movieContext'

async function SearchMovie(querySearch) {
  const response = await FindMovie(querySearch);
  const data = await response.json();
  return data;
}

function Home() {

  const [isloading, setIsloading] = useState(true)
  const [movies, setmovies] = useContext(MovieContext);
  const movieList = useMemo(() => movies, [movies, setmovies])

  useEffect(() => {
    if (isloading && movieList != null) {

      setIsloading(false)
    }

  }, [movieList])

  return (<>

    {isloading ?
      <Preloader /> :
      <div >
        <h1><i class="fas fa-ticket-alt"></i> Trending movies this week</h1>
        <Carousel movies={movieList} />
        {/* <Upcomming></Upcomming> */}
      </div>}
  </>
  )
}

export default Home;