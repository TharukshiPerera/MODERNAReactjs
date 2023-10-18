import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from '../Hero';
import About from '../About';
import Services from '../Services';
import Portfolio from '../Portfolio';

export default function MainRoutes() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
        </Routes>
      </Router>
    </div>
  )
}
