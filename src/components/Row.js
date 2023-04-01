import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseUrl'
import './Row.css'

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
    async function fetchData(){                   //api asynchronous call
        const result=await instance.get(fetchUrl)
        setMovies(result.data.results)
        // console.log(result); //object data
        // console.log(result.data.results);  //array of data
    }
    useEffect(()=>{
        fetchData();
    },[])
    // console.log(movies); //data comes due to setMovies(....)
    const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movies'>
            {
                movies.map(movie=>(
                    // <img className='movie' src={`${base_url}${movie.backdrop_path}`}/>
                    <img className={`movie ${isLargeRow && "largemovie"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}/>

                ))
            }
        </div>
    </div>
  )
}

export default Row