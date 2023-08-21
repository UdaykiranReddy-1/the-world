import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Components/Home"
import CountryDetails from "./Components/CountryDetails"

import './App.css'
import { dividerClasses } from '@mui/material'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/countries/:code' element={<CountryDetails/>}/>
        <Route path='*' element={<h2>404 Page Not Found</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App