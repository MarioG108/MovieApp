import React, { useState, useEffect, useContext, useMemo } from 'react'
import Preloader from './preloader.jsx'
import Carousel from './Slider/carousel'
import FormSearch from './search/FormSearch'
import Upcomming from './Slider/upcomming.jsx'
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
  const [txtSearch, setTxtSearch] = useState('');

  const movieList = useMemo(() => movies, [movies, setmovies])

  useEffect(() => {
    if (isloading && movieList != null) {
      console.log("list:", movieList);
      console.log(movies);
      setIsloading(false)
    }

  }, [movieList])

  const handleChange = (e) => {
    setTxtSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (txtSearch !== null || txtSearch.trim() === ' ') { SearchMovie(txtSearch).then(data => setmovies([...data.results])) }
  }

  return (<>

    {isloading ?
      <Preloader /> :
      <div >
        <div className="container d-flex justify-content-end ">
          <FormSearch handleChange={handleChange}
            handleSubmit={handleSubmit} txtSearch={txtSearch} />
        </div>
        <h1>Trending movies this week</h1>
        <Carousel movies={movieList} />
        {/* <Upcomming></Upcomming> */}
      </div>}
  </>
  )
}

export default Home;