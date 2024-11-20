import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product from '../../assets/Product_list_icon.svg'
const sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={add_product_icon} alt="" />
        <p>Add Product</p>
        </div>
        </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <img src={list_product} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default sidebar
