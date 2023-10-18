import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import Footer from './Footer';
import features1 from './assets/features1.svg';
import features2 from './assets/features2.svg';
import features3 from './assets/features3.svg';
import features4 from './assets/features4.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style/hero.css';
import Navbar from './Navbar';

//import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Hero() {
  return (
    <div className='hero'>   
    <Navbar/>
        {/*carousel*/}

        
        <Carousel fade>
      <Carousel.Item>
        {/*<ExampleCarouselImage text="First slide" />*/}
        <img
          className='d-block'
          src=''
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p className='hero-caption'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/*<ExampleCarouselImage text="Second slide" />*/}
        <img
          className='d-block'
          src=''
        />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p className='hero-caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/*<ExampleCarouselImage text="Third slide" />*/}
        <img
          className='d-block'
          src=''
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p className='hero-caption'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  {/*wawe*/}
  <svg className='wawe-hero' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,218.7C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
   
    {/*=========features section*/}
    <div className='container-fluid features section-features'>
      <div className='row'>
        <h3 className='text-center col-md-12'>Features </h3>
        <p className='text-center col-md-'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
    </div>

    {/*=======feature1==========*/}
    <div className='container'>
    <div className='row'>
      <div className='col-md-5'>
      <img src={features1} alt="" className='img-features1' />
      </div>

      <div className='col-md-7'>
        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
        {/*<i class='bx bx-check-circle' style={{color:'#6baecf'}}  ></i>*/}
    
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p><FontAwesomeIcon icon="fa-solid fa-check" />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
    </div>

    {/*=======feature2==========*/}
    <div className='container'>
    <div className='row'>
      <div className='col-md-7'>
        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='col-md-5'>
      <img src={features2} alt="" className='img-features2' />
      </div>

      </div>
    </div>

      {/*=======feature3==========*/}
      <div className='container'>
    <div className='row'>
      <div className='col-md-5'>
      <img src={features3} alt="" className='img-features3' />
      </div>

      <div className='col-md-7'>
        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p><FontAwesomeIcon icon="fa-solid fa-check" />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
    </div>

    {/*=======feature4==========*/}
    <div className='container'>
    <div className='row'>
      <div className='col-md-7'>
        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p><FontAwesomeIcon icon="fa-solid fa-check" />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='col-md-5'>
      <img src={features4} alt="" className='img-features4' />
      </div>

      </div>
    </div>
<Footer/>
    </div>
  )
}
