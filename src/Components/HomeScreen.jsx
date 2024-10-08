import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Row } from './Row'
import requests from './Request'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='home'>

      <Navbar />

      <Banner />

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDramaMovies} />


    </div>
  )
}

export default HomeScreen