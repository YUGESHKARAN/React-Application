import React from 'react'

import  './css/style.css'
import Navbar from './Components/Navbar'
//import Search from './Components/SearchBar'
import search from './Components/Search.svg'
import Heading from './Components/Heading'
import Container from   './Components/Container'
import { useState,useEffect } from 'react'
import TvshowContainer from './Components/TvshowContainer'
import Footer from './Components/Footer'

export default function TvShows() {

    
  //const API_URL = 'http://www.omdbapi.com?apikey=41fd9b5d' ;
  
    
  const [Tvshows, setTvshows] = useState([]);

  const [Searchterm, setSearchterm] = useState('');



  const searchShows =  (showtitle) => {
   
  const num =0;

    fetch(`https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=${showtitle}&api_key=2f2571193590d15bf4fe973674544eca`)
 
    .then(res =>res.json())
    .then(res => setTvshows(res.results) )  
    console.log(Tvshows)
  
    
  }



useEffect(() =>{

  searchShows('all')
},[]);
  
  return (
    <>
    
    <Navbar/>

    <h1 className="heading">Tv Shows</h1>




<div className="container">

   <div className="searchbar">
     
       <input type="text" placeholder='Search Tv Shows...' value={Searchterm} onChange={(e) =>setSearchterm(e.target.value)} />
       <img src={search}  onClick={() => searchShows(Searchterm)} alt=''/>

   </div>
</div>


<div className='wrapper'>

{
Tvshows?.length>0?
(  <>

 {Tvshows.map((movies) => (
   <TvshowContainer movie={movies}/>
 ))}
 </>
):(
<div className='notavable'>
<h1 >Movies Not Available !!</h1>
</div>

)

}



</div>
<Footer />
    
    </>
  )
}