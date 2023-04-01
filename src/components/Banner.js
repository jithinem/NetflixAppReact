import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseUrl'
import './Banner.css'


function Banner({fetchUrl}) {
    const [movie,setMovies]=useState([])
    async function fetchData(){                   //api asynchronous call
        const result=await instance.get(fetchUrl)
        // setMovies(result.data.results[4])
        setMovies(result.data.results[Math.floor(Math.random()*result.data.results.length-1)])

        // console.log(result); //object data
        // console.log(result.data.results);  //array of data
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(movie); //data comes due to setMovies(....)
    const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='banner' style={{
        backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
        
    }}>Banner</div>
  )
}

export default Banner