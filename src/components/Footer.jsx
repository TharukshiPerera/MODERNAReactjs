import React from 'react'
import './style/footer.css';

export default function Footer() {
  return (
    <div className='container-fluid footer section-footer'>
        <div className='row'>
      <div className='col-md-6'>
        <h4>Our Newsletter</h4>
        <p className='des'>lorem ipsum Our Newsletter Our Newsletter Our Newsletter Our Newsletter</p>
      </div>
      
      <div className='col-md-6'>
        <div className='search subs position-relative'>
        <input class="form-control"/>
        <button class="btn btn-primary">Subscribe</button>
        </div>
      </div>
      </div>
      <div className='col-md-12 horizontal'>
        <hr/>
      </div>
      <div className='container list'>
        <div className='row'>
            <div className='col-md-3'>
                <h5>Useful Links</h5>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Service</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='col-md-3'>
                <h5>Useful Links</h5>
                <ul>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>Product Management</li>
                    <li>Marketing</li>
                    <li>Graphic Design</li>
                </ul>
            </div>
            <div className='col-md-3'>
                <h5>Contact Us</h5>
                <p className='address'>A108 Adem Street<br/>
                New York, NY 535022<br/>
                United States</p>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com
            </div>
            <div className='col-md-3'>
                <h5>About Moderna</h5>
                <p className='about-des'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
                 darta donna mare fermentum iaculis eu non diam phasellus.</p>
                 <div class="social-links mt-3">
                    <a href="#" class="twitter"><i class='bx bxl-twitter bx-sm bx-border-circle bx-burst-hover'></i></a>
                    <a href="#" class="facebook"><i class='bx bxl-facebook bx-sm bx-border-circle bx-burst-hover'></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram bx-sm bx-border-circle bx-burst-hover"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin bx-sm bx-border-circle bx-burst-hover"></i></a>
                </div>
            </div>
        </div>
        
      </div>
      <div className='container-fluid footer-bottem '>
        <div className='row text-center'>
          <p className='bottem'>© Copyright Moderna. All Rights Reserved</p>
          <p className='bottem'>Designed by Moderna</p>
        </div>
      </div>
      
    </div>
   
  )
}
