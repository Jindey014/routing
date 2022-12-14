import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Menu.css'
import menuList from '../../MenuList'
import MenuItem from '../../Components/MenuItem/MenuItem'

const Menu = () => {
  return (
    <div className="menu">
      <Navbar />
      <div className="menuContainer">
        <h1>Our Menu</h1>
        <div className="item-list">
          {menuList?.map((items) => (
            <MenuItem items={items} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu
