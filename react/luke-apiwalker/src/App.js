import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import StarWars from './components/StarWars';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route exact path ='/:type/:id' element={<StarWars/>}/>
      </Routes>


    </div>
  );
}

export default App;
