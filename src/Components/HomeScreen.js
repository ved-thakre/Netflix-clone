import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import './HomeScreen.css'
import requests from '../Requests'

export default function HomeScreen() {
  return (
    <div>
      <Navbar/>

      <Banner/>

      <Row
        title = "NETFLIX ORGINALS"
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="Animation" fetchUrl = {requests.fetchAnime} />
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  )
}

// API key -> 2f1dc7c30536ed450e977434151a8479
