import React from 'react';
import { useState } from 'react';

import image1 from '../Images/kong.jpg'
import image2 from  '../Images/johnwick.jpg'
import image3 from  '../Images/thor.jpg'

export default function Header() {

  
    const array1 = [
        {Poster:(image1),title:"Kong"},
        {Poster:(image3),title:"Kong"},
        {Poster:(image2),title:"Kong"}
    ]
    const getBack = ()=>{
      const newIndex = currentPosition===0?array1.length-1:currentPosition-1;
      setcurrentPosition(newIndex)
    }
    const getNext = ()=>{
      const newIndex = currentPosition===array1.length-1?0:currentPosition+1;
      setcurrentPosition(newIndex)
    }

    const gotToslide = (slidePosition)=>{
      setcurrentPosition(slidePosition);
    }

    const [currentPosition , setcurrentPosition] = useState(0)

  

  


    const CarasalSlides = {
      transition:'3s',
      background:`linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(${array1[currentPosition].Poster})`,

      
      
    }
   



  return (
   
   <div className='sld'>
      <div className="navSlider"  style={CarasalSlides}> 
        <div className="goBack" onClick={getBack} ><svg xmlns="http://www.w3.org/2000/svg" fill="red" height="60" viewBox="0 -960 960 960" width="60"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></div>
        <div className="goNext" onClick={getNext}><svg xmlns="http://www.w3.org/2000/svg" fill='red' height="60" viewBox="0 -960 960 960" width="60"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
        <div className='contcontainer'>
          <h1 className='headtitle'>MOVIE LAND</h1>
          <p className='fluidcont'>
            <h1>Dive into the world of MOVIE Land</h1>
            <h4 style={{color:"#fff",fontSize:"14px"}} >React MOVIE LAND offers a wide variety of movies, web series, anime, and TV shows.
               Dive in, explore, and enjoy your favorites!
               </h4>
              <h5 style={{color:'red',fontSize:'14px'}}>MOVIELAND ensures a  ⭐⭐⭐⭐⭐ enjoyment rating</h5>
              

               

          
          
          </p>
          <button className='headbutton'>PRIMIUM</button>
        </div>
       
      </div>
      <div className='dotsContainer' style={{transition:"3s"}}>{array1.map((slide,slidePosition)=>(
        
        <div className='dots' key={slidePosition} onClick={()=>gotToslide(slidePosition)} >
             🔘
           </div>
         ))}</div>
     </div>
    

    
  )
}