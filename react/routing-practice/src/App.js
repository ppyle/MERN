import {useParams} from 'react-router';
import './App.css';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import Routing from './components/Routing';






function App() {
  return (
    <div className="App">
      <h1>Routing Example</h1>
      <Routes>
        <Route exact path = '/home' element = {<Home/>}></Route>
        <Route exact path = '/:param' element = {<Routing/>}></Route>
        <Route exact path = '/:param/:bgColor' element = {<Routing/>}></Route>
        <Route exact path = '/:param/:bgColor/:color' element = {<Routing/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
