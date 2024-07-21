import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Components/Home"
import CountryDetails from "./Components/CountryDetails"
import MapPage from './Components/MapPage'
// import CountryDetails from "./Components/demoCard"

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/countries/:code' element={<CountryDetails/>}/>
        <Route path='/map/:code' element={<MapPage/>} />
        <Route path='*' element={<h2>404 Page Not Found</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App