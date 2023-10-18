import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Portfolio1 from './assets/portfolio-1.jpg';
import Portfolio2 from './assets/portfolio-2.jpg';
import Portfolio3 from './assets/portfolio-3.jpg';
import Portfolio4 from './assets/portfolio-4.jpg';
import Portfolio5 from './assets/portfolio-5.jpg';
import Portfolio6 from './assets/portfolio-6.jpg';
import Portfolio7 from './assets/portfolio-7.jpg';
import Portfolio8 from './assets/portfolio-8.jpg';
import Portfolio9 from './assets/portfolio-9.jpg';
import './style/portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <img src={Portfolio1} className='img-portfolio'/>
            </div>
            <div className='col-md-4'>
                <img src={Portfolio2} className='img-portfolio'/>
            </div>
            <div className='col-md-4'>
                <img src={Portfolio3} className='img-portfolio'/>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-4'>
                <img src={Portfolio4} className='img-portfolio'/>
            </div>
            <div className='col-md-4'>
                <img src={Portfolio5} className='img-portfolio'/>
            </div>
            <div className='col-md-4'>
                <img src={Portfolio6} className='img-portfolio'/>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-4'>
                <img src={Portfolio7} className='img-portfolio'/>
            </div>
            <div className='col-md-4'>
                <img src={Portfolio8} className='img-portfolio'/>
            </div>
            <div className='col-md-4'>
                <img src={Portfolio9} className='img-portfolio'/>
            </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
