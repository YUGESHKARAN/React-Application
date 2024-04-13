import React from 'react';
import img from '../Images/poster.png';
import { Link } from 'react-router-dom';



export default function Anime({movie}) {
    const MOvie_Url = "https://www.imdb.com/find/?"
  return (
    <>
     <div className="box">
     <Link  style={{cursor:"pointer", color:"#fff"}} to="/info" state={{movie : movie}}>
              
                <div className="cont">
                <a href={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
                 
                    <div><span>IMDB</span>{movie.vote_average || '0'}</div>
                    <div><span>Year:</span>{movie.release_date || movie.first_air_date || 'Null'}</div>
                    <div  className='title'><span  >Title:</span>{movie.title || movie.name}</div>
                    </a>
                </div>

                <img src={ movie.poster_path==null?`${img}`:`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />

                </Link>
            </div>
    
    
    </>
  )
       }