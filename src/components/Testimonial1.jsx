import React from 'react'
import testimonials1 from './assets/testimonials-1.jpg';
import './style/about.css';

export default function Testimonials() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <img src={testimonials1} alt="" className='img-slide1 rounded-circle' />
      </div>
    </div>
  )
}
