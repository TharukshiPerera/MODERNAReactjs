import React from 'react'
import Navbar from './Navbar'
import about from './assets/about.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from './Testimonial1';
import Slide2 from './Testimonial2';
import Slide3 from './Testimonial3';
import Slide4 from './Testimonial4';
import Slide5 from './Testimonial5';
import Footer from './Footer';
import './style/about.css';

export default function About() {
  return (
    <div className='section-about'>
      <Navbar/>
      <div className='container main-about'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={about} alt="" className='img-about' />
            </div>
            <div className='col-md-6'>
                <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
      </div>

      {/*===============section-projectsblock================*/}
      <div className='container-fluid projectsblock'>
      <div className='container'>
            <div className='row text-center'>
                <div className='col-md-3 number'>232<p className='heading'>Clients</p></div>
                <div className='col-md-3 number'>521<p className='heading'>Projects</p></div>
                <div className='col-md-3 number'>1463<p className='heading'>Hours Of Support</p></div>
                <div className='col-md-3 number'>15<p className='heading'>Hard Workers</p></div>
            </div>
        </div>
        </div>

        {/*======section-skills=========*/}
        <div className='container section-skills'>
            <div className='row'>
                <h3 className='text-center'>Our Skills</h3>
                <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              {/*------progress bar-------*/}
              <div className='progressbar'>
              <ProgressBar className='progressbar1' variant="success" now={100} />
              <ProgressBar className='progressbar1' variant="info" now={90} />
              <ProgressBar className='progressbar1' variant="warning" now={75} />
              <ProgressBar className='progressbar1' variant="danger" now={55} />
              </div>
            </div>

        </div>

        {/*=========section testimonials*/}
        <div className='container section-testimonials'>
          <div row>
            <h3 className='text-center'>Testimonials</h3>
            <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          
            <Carousel>
      <Carousel.Item >
        <Slide1 text="First slide" />
       {/* <img className='d-block' src='' />*/}
        <Carousel.Caption>
        <div className='check'>
          <h5 >Saul Goodman</h5>
          <h6 >CEO & Founder</h6>
          <p>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit
          sunt aliqua noster fugiat irure amet legam anim culpa.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Slide2 text="Second slide" />
         {/* <img className='d-block' src='' />*/}
        <Carousel.Caption className="d-none d-md-block">
          <h5>Sara Wilsson</h5>
          <h6>Designer</h6>
          <p>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit
          sunt aliqua noster fugiat irure amet legam anim culpa.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Slide3 text="Third slide" />
         {/* <img className='d-block' src='' />*/}
        <Carousel.Caption>
          <h5>Jena Karliz</h5>
          <h6>Store Owner</h6>
          <p>
          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit
          sunt aliqua noster fugiat irure amet legam anim culpa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Slide4 text="Third slide" />
        {/* <img className='d-block' src='' />*/}
        <Carousel.Caption>
          <h5>Matt Brando</h5>
          <h6>Freelancer</h6>
          <p>
          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit
          sunt aliqua noster fugiat irure amet legam anim culpa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Slide5 text="Third slide" />
         {/* <img className='d-block' src='' />*/}
        <Carousel.Caption>
          <h5>John Larson</h5>
          <h6>Entrepreneur</h6>
          <p>
          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit
          sunt aliqua noster fugiat irure amet legam anim culpa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
          </div>
        </div>
        <Footer/>
    </div>
  )
}
