import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="aboutContainer">
        <div className="AboutImage"></div>
        <div className="AboutInfo">
          <div className="AboutTitle">ABOUT US</div>
          <div className="AboutDesc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nihil animi, ipsam quos nulla quis ea praesentium hic ab voluptas.
              Ipsa laudantium fuga aliquam accusamus, in sint. Repellat nemo
              dolores expedita error eius maxime voluptas commodi nostrum
              architecto dolor, eligendi atque quidem distinctio, cumque vel
              facere aperiam magnam! Animi soluta aperiam quia recusandae quas
              quo sed? Nobis temporibus minima natus distinctio libero corrupti
              facilis quis provident.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
