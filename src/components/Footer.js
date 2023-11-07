import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaTiktok} from 'react-icons/fa';

import {playstore,appstore} from './AllImages'
import { Link } from 'react-router-dom';
import { Mcdonaldslogo } from './AllImages';

const Footer = () => {
  return (
    <div>
        <div className='container-fluid my-5'>
            <div className='row'>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                <div className='col-lg-2 col-md-2 col-sm-2 row1col2 flex-col'>
                    <h6 className='rowh6 mb-3'>Our Company</h6>
                    <Link className='footerptag1 ' to="/Ourcommunity">Our Community</Link><br/>
                    <Link className='footerptag2' to="/Ourhistory">Our History</Link>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-2 row1col2'>
                <h6 className='rowh6 mb-3'>Careers</h6>
                    <Link className='footerptag1'>Corporate</Link><br/>
                    <Link className='footerptag2 pt-2.5'>Restaurant</Link>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-2 row1col2'>
                <h6 className='rowh6 mb-3'>Contact Us</h6>
                    <Link className='footerptag1'>Suggestion</Link><br/>
                    <Link className='footerptag2 pt-2.5'>Complaint</Link>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-2 row1col2'>
                <h6 className='rowh6 mb-3'>Newsroom</h6>
                    <Link className='footerptag1'>Local</Link>
                </div>      
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
            </div>

            <div className='row mt-5'>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                <div className='col-lg-3 col-md-3 col-sm-3 row2col2 flex'>
               <FaFacebook size={30} className='rowcursor me-4 hover:text-blue-700'/>
               <FaInstagram size={30} className='rowcursor me-4 hover:text-pink-500'/>
               <FaYoutube size={30} className='rowcursor me-4 hover:text-red-600'/>
               <FaTwitter size={30} className='rowcursor me-4 hover:text-blue-500'/>
               <FaLinkedin size={30} className='rowcursor me-4 hover:text-blue-600'/>
               <FaTiktok size={30} className='rowcursor hover:text-red-500'/>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4'></div>
                <div className='col-lg-3 col-md-3 col-sm-3 flex'>
                <img src={appstore} width={120} className='me-3 hover:cursor-pointer'/>
                <img src={playstore} width={120} className='hover:cursor-pointer'/>
                </div>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
            </div>


            <div className='row'>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                <div className='col-lg-10 col-md-10 col-sm-10 footerborder mt-5'></div>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                <div className='col-lg-3 col-md-3 col-sm-3 row4col2 '>
                    <Link className='footerptag1 me-4' to="/Contactus">Contact</Link>
                    <Link className='footerptag1 me-4' to="/Privacypolicy">Privacy Policy</Link>
                    <Link className="footerptag1" to="/Termsandcondition">Terms & Condition</Link>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 '></div>
                <div className='col-lg-3 col-md-3 col-sm-3 w-auto'>
                <img src={Mcdonaldslogo} width={30} className='me-3 hover:cursor-pointer inline'/>
                <p className='inline'>©2023 McDonald's. All Rights Reserved.</p>
                </div>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer