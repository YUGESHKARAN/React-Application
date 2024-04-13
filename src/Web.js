import React from 'react'
import  { useEffect, useState } from 'react'
import  './css/style.css'
import Navbar from './Components/Navbar'
//import Search from './Components/SearchBar'
import search from './Components/Search.svg'
import Heading from './Components/Heading'
import Container from   './Components/Container'
import WebContainer from './Components/WebContainer'

import Footer from './Components/Footer'



export default function Web() {


    //{
    //    "adult": false,
    //    "backdrop_path": "/nQSaUQzYnSE9v4CXZiOkSNndaYu.jpg",
    //    "id": 1399,
    //    "name": "Game of Thrones",
    //    "original_language": "en",
    //    "original_name": "Game of Thrones",
    //    "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    //    "poster_path": "/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    //    "media_type": "tv",
    //    "genre_ids": [
    //        10765,
    //        18,
    //        10759
    //    ],
    //    "popularity": 2333.736,
    //    "first_air_date": "2011-04-17",
    //    "vote_average": 8.447,
    //    "vote_count": 22941,
    //    "origin_country": [
    //        "US"
    //    ]
    //}


    const API_URL = 'http://www.omdbapi.com?apikey=41fd9b5d' ;
  
    
    const [Web, setWeb] = useState([]);
  
    const [Searchterm, setSearchterm] = useState('');
  
  
  
    const searchWeb =  (titleWeb) => {
  
      fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${titleWeb}&api_key=2f2571193590d15bf4fe973674544eca`)
      .then(res =>res.json())
      .then(res => setWeb(res.results) )  
      console.log(Web)
    
      
    }
  
  console.log(Web);
  
  useEffect(() =>{
  
    searchWeb(' Game of thrones')
  },[]);

  
  return (
    <>
    
    
    
    <Navbar/>

    <h1 className="heading">Webseries</h1>




<div className="container">

   <div className="searchbar">
     
       <input type="text" placeholder='Search Webseries...' value={Searchterm} onChange={(e) =>setSearchterm(e.target.value)} />
       <img src={search}  onClick={() => searchWeb(Searchterm)} alt=''/>

   </div>
</div>


<div className='wrapper'>

{
Web?.length>0?
(  <>

 {Web.map((movies) => (
   <WebContainer webseries={movies}/>
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