import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Search from './Search';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

import {Route, Routes, useLocation} from 'react-router-dom'
function Pages() {
const location = useLocation();

  return (
   <AnimatePresence mode='wait'>
    <Routes Location = {location} key={location.path}>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />}/>
      <Route path='/search/:search' element={<Search />} />
      <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
    </AnimatePresence>
   
  );
}

export default Pages;
