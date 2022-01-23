import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

export default function App() {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Recently-visited" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  )
}

//96c0d4ae4c61d740de7427a252eb54e7
//https://api.themoviedb.org/3/movie/550?api_key=96c0d4ae4c61d740de7427a252eb54e7
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmMwZDRhZTRjNjFkNzQwZGU3NDI3YTI1MmViNTRlNyIsInN1YiI6IjYxNmU1YzhhYzhmODU4MDAyNjVlMjViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5J22L 
