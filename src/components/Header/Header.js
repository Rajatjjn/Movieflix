import React from 'react'
// import { Fetch } from '../Api/Api';
import { useEffect,useState } from 'react';
import Style from "./Header.module.css"
export default function Header() {

    const[movie,setmovie]=useState([]);

     useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${"be3bea19021d1b7f5288fedb2f447f90"}&with_networks=213`)
        .then(response=>response.json())
        .then(dr=>setmovie(dr.results[Math.floor(Math.random()*dr.results.length-1)]))
        //  .then(dt=>setmovie(dt.data.results[Math.floor(Math.random()*dt.data.results.length)]))
      
       
     },[])
     console.log(movie)

     function truncate(str,n){
      return str?.length>n?str.substr(0,n-1)+"....":str;

     }
  return (
    <>
    <header className={Style.header} style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
<div className={Style.main}>
<h1 className={Style.title}>{movie?.title||movie?.name||movie?.original_name}</h1>
  <div className={Style.button}>
  <button className={Style.btn}>Play</button>
  <button className={Style.btn}>My List</button>

  </div>
  <h1 className={Style.overview}>{truncate(movie?.overview,200)}</h1>
</div>
{/* <div className={Style.extra}/> */}
    </header>
      
    </>
  )
}
