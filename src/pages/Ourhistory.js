import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { history } from '../components/AllImages'

const Ourhistory = () => {
  return (
    <div>
        <Navbar/>
        <h1>Our History</h1>
        <img src={history} /> 
        <h1>McDonald’s Pakistan History</h1>
        <p>Today millions of Pakistanis place their trust in McDonald’s to provide them with food of a very
             high standard, quick service and value for money. So next time you walk into one of our 
             restaurants, please remember, McDonald’s Pakistan is here now, to put a smile on your face,
              each and every time you visit us.

            McDonald’s is firmly committed to giving back to the community where it operates. We are happy to become
            involved because we recognize that organizations have a role to play in helping communities to work 
            successfully. The contribution we enjoy most is the experience of working together with others in the 
            community to achieve worthwhile benefits for those who need it most.
            </p>
        <Footer/>
    </div>
  )
}

export default Ourhistory