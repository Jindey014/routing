import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contactContainer">
        <div className="contactLeft">
          <img src="../../assets/fooda.jpeg" alt="" />
        </div>
        <div className="contactRight">
          <h1>Contact Us</h1>
          <div className="inputs">
            <label htmlFor="fname">Full Name</label>
            <input type="text" placeholder="Enter Full Name" name="fname" />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" name="email" />
          </div>
          <div className="inputs">
            <label htmlFor="message">Message</label>
            <textarea placeholder="Enter Message" name="message" />
          </div>
          <button className='aboutButton'>SEND MESSAGE</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
