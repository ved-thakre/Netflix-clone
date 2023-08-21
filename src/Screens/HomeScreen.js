// HomeScreen.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Frow from '../Components/Frow'; // Use Frow component
import Row from '../Components/Row';
import './HomeScreen.css';
import requests from '../Requests';

export default function HomeScreen() {
  return (
    <div>
      <Navbar />

      <Banner />

      <Frow
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Animation" fetchUrl={requests.fetchAnime} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
