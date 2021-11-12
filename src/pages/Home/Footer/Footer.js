import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
      return (
            <div>

                  <div className='row bg-info p-5 mt-5 d-flex justify-content-center'>

                        <div className=' col-lg-4 col-md-6 col-12'>
                              <h3>Siyam'S Mart</h3>
                              <p>Mobile : <small>01785448325</small></p>
                        </div>
                        <div className=' col-lg-4 col-md-6 col-12'>
                              <h2>Head Office</h2>
                              <p> Green Road, Dhanmondi, Dhaka, Bangladesh</p>
                              <h5>Phone : 02-222246338, 02-222246339, 02-222246340</h5>
                              <p>fayslasiyam@gmail.com</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 '>
                              <h5>Social Media Links</h5>

                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faYoutube} /></span>
                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faGoogle} /></span>
                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faTwitter} /></span>
                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faInstagram} /></span>
                        </div>

                  </div>
            </div>
      );
};

export default Footer;