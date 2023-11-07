import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { contactUs, suggestionribbon, complaintribbon } from '../components/AllImages'

const Contactus = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='my-5'>Contact Us</h1>
        <img src={contactUs}/>


      <div className='container-fluid contactdiv'>

        

          <div className="card  my-5" style={{ width: '350px' }}>
            <img src={suggestionribbon} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Suggestion</h5>
              <p className="card-text my-5">Want to share your thoughts? Reach out to us and let us know
                what you have in mind.</p>
              <a href="#" className="btn btn-warning">Click Here</a>
            </div>
          </div>

          <div className="card ms-5 my-5" style={{ width: '350px' }}>
            <img src={complaintribbon} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Complaint</h5>
              <p className="card-text my-5">Our customers are our top priority and we always try to ensure you are
                satisfied. However, If you have any feedback, feel free to reach out to us.</p>
              <a href="#" className="btn btn-warning">Click Here</a>
            </div>
          </div>
        
      </div>

        <Footer/>
    </div>
  )
}

export default Contactus