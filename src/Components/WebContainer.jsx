import React from 'react'

import img from '../Images/poster.png'
import { Link } from 'react-router-dom'

export default function WebContainer({webseries}) {

    const MOvie_Url = "https://www.imdb.com/find/?"

  return (
    <>
    
    <div className="box">
     <Link  style={{cursor:"pointer", color:"#fff"}} to="/info" state={{movie : webseries}}>  
                    <div className="cont">
                        <a href={`https://image.tmdb.org/t/p/w500${webseries.poster_path}`}>
                        
                            <div><span>IMDB</span>{webseries.vote_average || '0'}</div>
                            <div><span>Year:</span>{webseries.first_air_date || webseries.release_date || 'null'}</div>
                            <div  className='title'><span  >Title:</span>{webseries.name || webseries.title}</div>
                        </a>
                    </div>

                    <img src={ webseries.poster_path==null?`${img}`:`https://image.tmdb.org/t/p/w500${webseries.poster_path}` } alt={webseries.name} />

       </Link>
    </div>
    </>
  )
}