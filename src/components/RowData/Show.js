import React, { useState,useEffect } from 'react'
import "./Show.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Footer from '../footer/Footer';


const url="https://image.tmdb.org/t/p/original/"

export default function Show({title,Data,isLargeRow}) {

    const[movie,setMovie]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("")

    useEffect(()=>{

    fetch(Data)
    .then(response=>response.json())
    .then(dt=>setMovie(dt.results))
  
},[Data])

const opts = {
  height: '390',
  width: "100%",
  playerVars: {
   
    autoplay: 1,
  },
};
console.log(movie)

function handleclick(mv){
  if(trailerUrl){
    setTrailerUrl("");
  }else{
    movieTrailer(mv?.name||"")
    .then((url)=>{
      const urlParams=new URLSearchParams(new URL(url).search)
     setTrailerUrl( urlParams.get("v"))
    })
    .catch((error)=>console.log(error))
  }
}
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    <div className="show_Main">
      <h2 className="title">{title}</h2>
      <div className="row">
        {movie.map((mv)=>(
            <>
                <img 
                key={mv.id}
                onClick={()=>handleclick(mv)} 
                className={`row_p ${isLargeRow&& "row_L"}`} 
                src={`${url}${isLargeRow?mv.poster_path:mv.backdrop_path}`}
                 alt={mv.name}/>
               
                
            </>
        ))}
      </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} 
    </div>

</div>

    </>
  )
}
// https://api.themoviedb.org/3/movie/550?api_key=be3bea19021d1b7f5288fedb2f447f90