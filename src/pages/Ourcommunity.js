import React from 'react'
import { community } from '../components/AllImages'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Ourcommunity = () => {
  return (
    <div>
        <Navbar/>
        <h1>Our Community</h1>

        <img src={community} />

        <p>Being a responsible corporate citizen, McDonald’s firmly believes in giving back to the communities
             it operates in. We love to provide support and encouragement to the people who need it the most.
              All our restaurants contribute to their local community and every year we help set up and support
               numerous educational, sporting and charity programs designed to help a wide range of people.

            McDonald’s has a proactive approach to charities and sponsorships. We believe these help inspire and support
            the people of Pakistan, especially the underprivileged ones, to live a better life. We are dedicated to 
            delivering great experiences through our ongoing community support programs.</p>

        <Footer/>


    </div>
  )
}

export default Ourcommunity