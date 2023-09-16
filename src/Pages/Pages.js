import React from 'react'
import Home from './Home'
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Cuisine from './Cuisine';
import Searchresult from './Searchresult';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';



function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/cusine/:type' element={<Cuisine/>}/>
      <Route  path='/searched/:item' element={<Searchresult/>}/>
      <Route  path='/recipe/:name' element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default Pages
