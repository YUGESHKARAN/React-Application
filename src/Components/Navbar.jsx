import React from 'react'
//import Menu from '../Menu.svg'
//import reactlogo from '../Images/react1.png'
import { Link } from 'react-router-dom'

 


export default function Navbar() {
  return (
    <>
    
    <div className="Navbar">

     <div className="menu"

      onClick={()=>{
      const menu= document.getElementById("menu")
      menu.style.right="3px"}} >
        
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      
      </div>
    

      <div className="logo">
       <h3>React-Logo</h3>
      </div>
       


        <div className="nav-links" >
            <ul id="menu">
                <li className="close" 
                onClick={()=>{
                  const menu = document.getElementById("menu");
                  menu.style.right="-200px";

                }} >
                  
                  <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m366-310 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56ZM200-200v-560 560-1 1Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v334q-19-7-39-10.5t-41-3.5v-320H200v560h320q0 21 3.5 41t10.5 39H200Zm560 80-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40Z"/></svg></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/webseries">Webseries</Link></li>
                <li><Link to="/tvshows">Tv Shows</Link></li>                
                <li><Link to="/anime">Anime</Link></li>

            </ul>

        </div>
    </div>
    

    </>
  )
}
