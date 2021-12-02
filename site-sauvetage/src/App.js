import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<Home/>}/>
          <Route path = "/signin" element = {<Home/>}/>
          <Route path = "/Sauvetage" element = {<Home/>}/>
          <Route path = "/Sauveteur" element = {<Home/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
