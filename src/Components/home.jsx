import React, { useState, useEffect } from 'react'
import Preloader from './preloader.jsx'
import Carousel from './Slider/carousel'
import FormSearch from './FormSearch'


function Home() {
  const [isloading, setIsloading] = useState(true)
  const [movies, setmovies] = useState([]);
  const [txtSearch, setTxtSearch] = useState('');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=7c5d0c6f8811332e3ae2562e7ad9e6ad`)
      .then(respuesta => respuesta.json())
      .then(data => setmovies([...data.results]));
    setIsloading(false)
  }, [])

  const handleChange = (e) => {
    setTxtSearch(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7c5d0c6f8811332e3ae2562e7ad9e6ad&query=${txtSearch}`)
      .then(respuesta => respuesta.json())
      .then(data => setmovies([...data.results]));
  }
  return (<>

    {            isloading ?
      <Preloader />

      : <div >
      <div className="container d-flex justify-content-end ">
        <FormSearch handleChange={handleChange}
          handleSubmit={handleSubmit} txtSearch={txtSearch} /> </div>
        <h1>Trending movies this week</h1>
        <Carousel movies={movies} />

      </div>}
  </>
  )
}

export default Home;