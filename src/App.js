import React, { useEffect, useState } from 'react'

import  './css/style.css'
import Navbar from './Components/Navbar'
//import Search from './Components/SearchBar'
import search from './Components/Search.svg'
import Heading from './Components/Heading'
import Container from   './Components/Container'
import Footer from './Components/Footer'



const App = () => {



  //const movie = {
  //  
  //  "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  //  "Title": "Thor",
  //  "Type":  "movie",
  //  "Year": "2011",
  //  "imdbID": "tt0800369",
  //}

  //GET https://api.example.com/products?page=2

  
 
  
    
  const [Movies, setMovies] = useState([]);

  const [Searchterm, setSearchterm] = useState('');

   // const API_URL = 'http://www.omdbapi.com?apikey=41fd9b5d' ;
   // const movieSearch =  async (title) => {
 
   // const response = await fetch(`${API_URL}&s=${title}`);
   // const data = await response.json();
   // setMovieList(data.Search)
   // console.log(data)   
   // }

  const searchMovies = (title) => {

    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${title}&api_key=2f2571193590d15bf4fe973674544eca`)   
    .then(res =>res.json())
    .then(res => setMovies(res.results) )  
    console.log(Movies)
   
  
    
  }

console.log(Movies);

useEffect(() =>{

  searchMovies('godzilla')
},[]);
  
  return (
    <>
  
    
       <Navbar/>

       <Heading />
       

      

       <div className="container">

          <div className="searchbar">
            
              <input type="text" placeholder='Search Movies...' value={Searchterm} onChange={(e) =>setSearchterm(e.target.value)} />
              <img src={search}  onClick={() => searchMovies(Searchterm)} alt=''/>

          </div>
      </div>
      
      
      <div className='wrapper'>
 
       {
       Movies?.length>0?
       (  <>

        {Movies.map((movies) => (
          <Container movie={movies}/>
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

export default App;