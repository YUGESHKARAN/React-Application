import React from 'react'

import { useState,useEffect } from 'react'
import  './css/style.css'
import Navbar from './Components/Navbar'
//import Search from './Components/SearchBar'
import search from './Components/Search.svg'
import Heading from './Components/Heading'
import AnimeContainer from   './Components/AnimeContainer'
import Footer from './Components/Footer'


export default function Anime() {

    const [Anime, setAnime] = useState([]);

    const [Searchterm, setSearchterm] = useState('');
  
  
  
    const searchAnime =  (title) => {
  
      fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${title}&api_key=2f2571193590d15bf4fe973674544eca`)
      .then(res =>res.json())
      .then(res => setAnime(res.results) )  
      console.log(Anime)
    
      
    }
  
  console.log(Anime);
  
  useEffect(() =>{
  
    searchAnime('anime')
  },[]);



  return (


    <>
    
    <Navbar/>

    <h1 className="heading">Animes</h1>




<div className="container">

   <div className="searchbar">
     
       <input type="text" placeholder='Search Animes...' value={Searchterm} onChange={(e) =>setSearchterm(e.target.value)} />
       <img src={search}  onClick={() => searchAnime(Searchterm)} alt=''/>

   </div>
</div>


<div className='wrapper'>

{
Anime?.length>0?
(  <>

 {Anime.map((movies) => (
   <AnimeContainer movie={movies}/>
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