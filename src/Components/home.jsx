import React, { useState, useEffect } from 'react'
import Preloader from './preloader.jsx'
import Carousel from './Slider/carousel'
import FormSearch from './FormSearch'
import Upcomming from './Slider/upcomming.jsx'
import { GetTrending, FindMovie } from '../Services/apicontroller.js'

async function SearchMovie(querySearch) {
  const response = await FindMovie(querySearch);
  const data = await (await response).json();
  return data;
}

function Home() {
  const [isloading, setIsloading] = useState(true)
  const [movies, setmovies] = useState([]);
  const [txtSearch, setTxtSearch] = useState('');

  useEffect(() => {
    async function GetTrendings() {
      const response = await GetTrending()
      const data = await response.json();
      setmovies(() => { return [...data.results] })
      setIsloading(false)
    }

    if (isloading) { GetTrendings() }

  }, [isloading])

  const handleChange = (e) => {
    setTxtSearch(e.target.value)
  }  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(txtSearch !== null || txtSearch.trim() === ' ')
    {SearchMovie(txtSearch).then(data=>setmovies([...data.results])) }
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
      <Upcomming></Upcomming>
      </div>}
  </>
  )
}

export default Home;