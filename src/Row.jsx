import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const base_url = "https://image.tmdb.org/t/original/"

function Row({title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
            //"https://api.themoviedb.org/3"
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
          <h2>{title}</h2>

          <div className="row_posters">
              {movies.map(movie => (
                  <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
              ))}
          </div>
        </div>
    )
}

export default Row;
