import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import  './css/style.css'
import search from './Components/Search2.svg'
import FluidContainer from './Components/FluidContainer'
import Footer from './Components/Footer'
export default function Main() {

  const [MovieList , setMovieList] = useState([]);
  
  const [webList , setwebList] = useState([]);

  const [Shows, setShows] = useState([]); 

  const [Anime, setAnime] = useState([]);

  const [movieTitle, setmovieTitle] = useState('');
  const API_URL = 'http://www.omdbapi.com?apikey=41fd9b5d' ;

  const movieSearch =  (title) => {
    

    fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=2f2571193590d15bf4fe973674544eca`)
    
   .then(res =>res.json())
   .then(res => setMovieList(res.results) )  
    console.log(MovieList)
  //const response = await fetch(`${API_URL}&s=${title}`);
  //const data = await response.json();
  //setMovieList(data.Search)
  //console.log(data)
  
    
  }



  //-----web series-----------
 

  

  const webSearch =  (title2) => {

   fetch(`https://api.themoviedb.org/3/search/movie?query=${title2}&api_key=2f2571193590d15bf4fe973674544eca`)
    
    .then(res1 =>res1.json())
    
    .then(res1 => setwebList(res1.results) )  
  
  }

  const showSearch =  (title3) => {

    fetch(`https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=${title3}&api_key=2f2571193590d15bf4fe973674544eca`)
    .then(res1 =>res1.json())
    .then(res1 => setShows(res1.results) )  
  
  }
  const AnimeSearch =  (title4) => {

    fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${title4}&api_key=2f2571193590d15bf4fe973674544eca`)
    .then(res1 =>res1.json())
    .then(res1 => setAnime(res1.results) )  
  
  }


  useEffect(()=>{
    movieSearch('godzilla');
    webSearch('Game Of thrones');
    showSearch("all");
    AnimeSearch('anime');
    
  
  },[]);

  

  return (

    <>
    
       <Navbar />
       <div className='title-container'>
        <div className='title-main'><h2> Welcome to <span> MOVIE LAND</span></h2> </div>
        <div className='searchcontainer'>
          <input type='text' value={movieTitle} onChange={(e)=>setmovieTitle(e.target.value)}  placeholder='Search for Movies...'/>
          <img src={search} onClick={()=>{movieSearch(movieTitle)}} alt='Search Icon' />
        </div>
        </div>
   
      <Header  MovieList={MovieList}/>
       
      {
      
        MovieList.length>0?(
          <>
           <div className="rootcontainer">
              <div className="head">
                  <h4>Movies List</h4>
                  <p> <Link to="/movies" style={{color:"red",fontSize:"14px"}}> Show More</Link></p>
              </div>
              <div className="rowcontainer">
                  <div className="row">
                {MovieList.map((movie)=>(
                  <>
                  <FluidContainer movie={movie} />
                  
                  </>
                  
                ))}
            </div>
          </div>
          </div>
        
          </>
        ):(
          <>
           <div className='notavable'>
      <h1 >Movies Not Available !!</h1>
     </div>
           </>
        )
      }
    {/*-----------web series-----------------*/}
    {
      
      MovieList.length>0?(
        <>
         <div className="rootcontainer">
            <div className="head">
                <h4>Webseries</h4>
                <p> <Link to="/webseries" style={{color:"red",fontSize:"14px"}}> Show More</Link></p>
            </div>
            <div className="rowcontainer">
                <div className="row">
              {webList.map((movie)=>(
                <>
                <FluidContainer movie={movie} />
                
                </>
                
              ))}
          </div>
        </div>
        </div>
      
        </>
      ):(
        <>
         <div className='notavable'>
           <h1 >Movies Not Available !!</h1>
         </div>
         </>
      )
    }


    {/*-------TV SHOWS ------- */}

    {
      
      MovieList.length>0?(
        <>
         <div className="rootcontainer">
            <div className="head">
                <h4>TV Shows</h4>
                <p> <Link to="/tvshows" style={{color:"red",fontSize:"14px"}}> Show More</Link></p>
            </div>
            <div className="rowcontainer">
                <div className="row">
              {Shows.map((movie)=>(
                <>
                <FluidContainer movie={movie} />
                
                </>
                
              ))}
          </div>
        </div>
        </div>
      
        </>
      ):(
        <>
            <div className='notavable'>
              <h1 >Movies Not Available !!</h1>
            </div>
         </>
      )
    }

    {/*-----------------Anime--------------*/}

    {
      
      Anime.length>0?(
        <>
         <div className="rootcontainer">
            <div className="head">
                <h4>Anime</h4>
                <p> <Link to="/anime" style={{color:"red",fontSize:"14px"}}> Show More</Link></p>
            </div>
            <div className="rowcontainer">
                <div className="row">
              {Anime.map((movie)=>(
                <>
                <FluidContainer movie={movie} />
                
                </>
                
              ))}
          </div>
        </div>
        </div>
      
        </>
      ):(
        <>
            <div className='notavable'>
              <h1 >Movies Not Available !!</h1>
            </div>
         </>
      )
    }

    
      
      <Footer />
      


  
    
    </>
  )
}