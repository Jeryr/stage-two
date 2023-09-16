import { useState } from 'react'
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MovieDetails from './pages/movieDetails';



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {<Route path="/movie/:id" element={<MovieDetails />} /> }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
