import React from 'react'

import { Link } from 'react-router-dom'

import img from '../Images/poster.png'
import InfoBrowse from './InfoBrowse'


export default function FluidContainer({movie}) {
  
  return (
    <>
                    <div className="boxcontainer" >
                    <Link  style={{cursor:"pointer", color:"#fff"}} to="/info" state={{movie : movie}}>
                        <div className="contentcontainer" >
                            <pre> <p style={{fontSize:"16px",fontWeight:"900"}}>{movie.release_date ||movie.first_air_date }</p>
                                  <p style={{fontSize:'14px', fontWeight:'900',textWrap:'wrap',color:'white'}}>{movie.title || movie.name}</p>
                                  <button>Show Details</button>                                 
                                    </pre>
                            
                        </div>
                        <img className='image'   src={ movie.poster_path==null?`${img}`:`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
                       
                        </Link> 
                       
                      
                  
                    </div> 
                   
    </>  
   
  )
}