import React from 'react'
import Navbar from './Navbar'
import image1 from '../Images/kong.jpg'
import img from '../Images/poster.png'
import { Link } from 'react-router-dom'

import {useLocation} from 'react-router-dom'



export default function InfoBrowse() {

    const location = useLocation();
    const {movie} = location.state;
    const MOvie_Url = "https://www.imdb.com/find/?";


  return (
    <>
    
    <Navbar />

    <div className="Details">
    <h1 className="heading infoc">{movie.name || movie.title}</h1>

        <div className="info">

            <div className="Poster">
                <img src={ movie.poster_path==null?`${img}`:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
            </div>

            <div className="infoCont">
                <pre>
                    <p>TITLE       : <span style={{color:"white", fontSize:"17px"}}>{movie.name || movie.title || 'Null'}</span></p>
                    <p>DESCRIPTION : <span style={{color:"white", fontSize:"17px"}}>{movie.overview || 'Null'}</span></p>
                    <p>YEAR        : <span style={{color:"white", fontSize:"17px"}}>{movie.release_date ||movie.first_air_date || 'Null' }</span></p>
                    <p>IMDB        : <span style={{color:"white", fontSize:"17px"}}>{movie.vote_average || 'Null'}</span></p>
                </pre>
                <a href={`${MOvie_Url}q=${movie.title ||movie.name}`}> <button>BROWSE</button></a>
            </div>


        </div>
     
    </div>

    </>
  )
}