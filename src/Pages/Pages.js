import React from 'react'
import Home from './Home'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cuisine from './Cuisine';


function Pages() {
  return (
    <div>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/cusine/:type' element={<Cuisine/>}/>
    </Routes>
    </div>
  )
}

export default Pages
