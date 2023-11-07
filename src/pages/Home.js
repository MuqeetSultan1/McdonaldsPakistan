import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Myslider2 from '../components/Myslider2'
import { bodyimg1, bodyimg2, bodyimg3, bodyimg4, bodyimg5, bodyimg6, homeimg1 } from '../components/AllImages'


const Home = () => {
  return (
    <div>
        <Navbar/>  
        <Myslider2/>

      <div className='container cardcontainer my-5'>
        <div className="card ms-5" style={{ width: '350px' }}>
          <img src={bodyimg1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mc Cafe</h5>
            <p className="card-text my-5">Browse our menu for more information on topics such as our tasty coffee and espresso drinks.</p>
            <a href="#" className="btn btn-warning">Order Now</a>
          </div>
        </div>
        <div className="card ms-5" style={{ width: '350px' }}>
          <img src={bodyimg2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mc Delivery</h5>
            <p className="card-text my-5">Delivering food at your doorsteps.</p>
            <a href="#" className="btn btn-warning">Order Now</a>
          </div>
        </div>
        <div className="card ms-5" style={{ width: '350px' }}>
          <img src={bodyimg3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Our App</h5>
            <p className="card-text my-5">McDonald's in your Pocket.</p>
            <a href="#" className="btn btn-warning">Download Now</a>
          </div>
        </div>

    </div>


    <div className='container cardcontainer2 mb-5'>
      <div className="card ms-5" style={{ width: '350px' }}>
        <img src={bodyimg4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Our Menu</h5>
          <p className="card-text my-5">Our exclusive menu is waiting for you.</p>
          <a href="#" className="btn btn-warning">Order Now</a>
        </div>
      </div>
      <div className="card ms-5" style={{ width: '350px' }}>
        <img src={bodyimg5} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Trending Now</h5>
          <p className="card-text my-5">Find out what's new.</p>
          <a href="#" className="btn btn-warning">Learn More</a>
        </div>
      </div>
      <div className="card ms-5" style={{ width: '350px' }}>
        <img src={bodyimg6} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Careers</h5>
          <p className="card-text my-5">Be a part of our team.</p>
          <a href="#" className="btn btn-warning">Apply Now</a>
        </div>
      </div>
    </div>

        <Footer/>      
    </div>
  )
}

export default Home