import React from "react";
//import ReactDOM  from "react-dom";
import ReactDOM from 'react-dom/client';
import App from './App';

import './css/style.css'
import Main from "./Home";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Web from "./Web";
import TvShows from "./TvShows";
import Anime from "./Anime";
import InfoBrowse from "./Components/InfoBrowse";


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main />
    },
    {
      path: "/movies",
      element: <App />,
    },
   
    {
      path:"/webseries",
      element:<Web/>
  },
  {
    path:"/tvshows",
    element:<TvShows/>
},
{
  path:"/anime",
  element:<Anime/>
},
{
  path:"/info",
  element:<InfoBrowse/>
},
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
      <RouterProvider router={router} />
    </React.StrictMode>
);


//ReactDOM.render( <App />,document.getElementById('root')) ;