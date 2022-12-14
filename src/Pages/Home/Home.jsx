import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="background">
          {/* <img src="../assets/food.jpeg" alt="" /> */}
          <div className="info">
            <h1 className="title">FOOD CORNER</h1>
            <h3 className="desc">Indian Food at a Click</h3>
            <button>ORDER NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
