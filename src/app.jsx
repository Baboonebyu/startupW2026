import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './start/start';
import { Scores } from './score/score';
import { Game } from './game/game';

  
export default function App() {
   
  return (<BrowserRouter>
  <div className="body">
   <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-custom">
      
       <NavLink className="nav-link" to="">
        <img src="temple icon.svg" width="50" height="50" className="d-inline-block align-top ms-3" alt="" ></img>
      </NavLink>
    
  <h1>Temple Match</h1>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink className="nav-link" to="">
        Home
      </NavLink>
    </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="play">
        Play
      </NavLink>
      </li>
      <li className="nav-item">
         <NavLink className="nav-link" to="scores">
        Scores
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="game">
        Game
      </NavLink>
      </li>
    </ul>
  </div>
</nav>
</header>

    <Routes>
  <Route path='/' element={<Login />} exact />
  <Route path='/play' element={<Play />} />
  <Route path='/scores' element={<Scores />} />
  <Route path='/game' element={<Game />} />
  <Route path='*' element={<NotFound />} />
</Routes>


  <footer>
    <div><span className="text-reset">Created by Benjamin</span>
  
    <a href="https://github.com/Baboonebyu/startupW2026">GitHub</a></div>
    
  </footer>


  </div>
   </BrowserRouter>)
}


function NotFound() {
  return <main className="container-fluid text-center">404: Return to sender. Address unknown.</main>;
}