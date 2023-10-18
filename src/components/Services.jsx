import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Whyus from './assets/why-us.jpg';
import Servicedetails1 from './assets/service-details-1.jpg';
import Servicedetails2 from './assets/service-details-2.jpg';
import Servicedetails3 from './assets/service-details-3.jpg';
import Servicedetails4 from './assets/service-details-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/services.css';

export default function Services() {
  return (
    <div className='services'>
      <Navbar/>
      <div className='container'><div className='row'>
        <div className='col-md-3'>
          <div class="card border-light shadow">
            <div class="card-body">
              <div className='service-icon text-center'>
              <i class='bx bx-basketball bx-md' style={{color:'#c72aba'}}  ></i>
              </div>
                <h5 class="card-title text-center">Lorem Ipsum</h5>
                <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div class="card border-light shadow">
            <div class="card-body">
            <div className='service-icon text-center'>
              <i class='bx bx-file bx-md' style={{color:'#2ac7b4'}}  ></i>
            </div>
              <h5 class="card-title text-center">Lorem Ipsum</h5>
              <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div class="card border-light shadow">
            <div class="card-body">
            <div className='service-icon text-center'>
              <i class='bx bx-tachometer bx-md' style={{color:'#36da2d'}}  ></i>
            </div>
              <h5 class="card-title text-center">Lorem Ipsum</h5>
              <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div class="card border-light shadow">
            <div class="card-body">
            <div className='service-icon text-center'>
              <i class='bx bx-world bx-md' style={{color:'#305fe4'}}  ></i>
            </div>
              <h5 class="card-title text-center">Lorem Ipsum</h5>
              <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                
            </div>
          </div>
        </div>

        </div>
      </div>

      <div className='why-us'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={Whyus} alt="" className='img-why-us'/>
            </div>
            <div className='col-md-6'>
              <h5>LOREM IPSUM</h5>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              <h5>LOREM IPSUM</h5>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mission'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={Servicedetails1} className='img-Servicedetails'/>
              <div className='col-md-3'>
                <div class="card border-light shadow">
                  <div class="card-body">
                  <h5 class="card-title text-center">Lorem Ipsum</h5>
                  <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p> 
                  </div>
                </div>
              </div>

          </div>
          <div className='col-md-6'>
            <img src={Servicedetails2} className='img-Servicedetails'/>
              <div className='col-md-3'>
                <div class="card border-light shadow">
                  <div class="card-body">
                  <h5 class="card-title text-center">Lorem Ipsum</h5>
                  <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='col-md-6'>
            <img src={Servicedetails3} className='img-Servicedetails'/>
              <div className='col-md-3'>
                <div class="card border-light shadow">
                  <div class="card-body">
                  <h5 class="card-title text-center">Lorem Ipsum</h5>
                  <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='col-md-6'>
            <img src={Servicedetails4} className='img-Servicedetails'/>
              <div className='col-md-3'>
                <div class="card border-light shadow">
                  <div class="card-body">
                  <h5 class="card-title text-center">Lorem Ipsum</h5>
                  <p class="card-text text-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
