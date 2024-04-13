import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>


     <div className="FooterContainer">
        <div className="Footer">

                <div className="footerContent">
                    <h4>ABOUT US</h4>
                    <div className="content"><p>
                    React MOVIE LAND offers a wide variety of movies, web series, anime, and TV shows.
                    Dive in, explore, and enjoy your favorites! </p>
                    </div>

                    <h3 style={{color:"blue"}}>FOLLOW US ON:</h3>

                    <div class="socialMedia">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/yugeshkaran01/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://github.com/YUGESHKARAN"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>

                <div className="footerContent">

                    <h4 >FOR QURIES</h4>

                    <div className="content">
                        <i class="fa fa-phone" style={{fontSize:"small"}}><span style={{fontWeight:"600"}}> +91 1111122222</span></i>
                        <br />
                        <i class="fa fa-envelope" style={{fontSize:"small"}}><span style={{fontWeight:"600"}}>yugeshkaran01@gmail.com</span></i>
                        <br />
                        <i class="fa fa-home" style={{fontSize:"small"}}><span style={{fontWeight:"600"}}> Trichy,Tamil Nadu,India</span></i>

                    </div>
                </div>

                <div className="footerContent">
                    <h4>WATCH YOUR FAVOURITE</h4>
                    <div className="content">
                        <li><Link className='link' to="/movies">Movies</Link> </li>
                        <li><Link className='link' to="/webseries">Webseries</Link></li>
                        <li><Link className='link' to="/tvshows">Tv Shows</Link></li>
                        <li><Link className='link' to="/anime">Anime</Link></li>
                    
                    </div>
                </div>


        </div>
        <div className="copyRight">
            &copy; Copyright 2024: <span className='copy'>NEOTERIC</span> 
        </div>
     </div>
    
    
    </>
  )
}