import React from 'react'
import './MenuItem.css'

const MenuItem = ({ items }) => {
  return (
    <div className="menulistContainer">
      <div className="item-list">
        <div className="item">
          <div className="image">
            <img src={items.image} alt="" />
          </div>
          <div className="name">
            <h2>{items.name}</h2>
          </div>
          <div className="cost">{items.price}</div>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
