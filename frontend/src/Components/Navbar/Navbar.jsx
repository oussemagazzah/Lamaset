import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" />
        <p>Artisanat</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("boutique");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
          Boutique
          </Link>
          {menu === "boutique" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("decoration");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Décorations">
            Décoration
          </Link>
          {menu === "decoration" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("meuble");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Meubles">
          Meuble
          </Link>
          {menu === "Meubles" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?
        <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to="/login">
          <button>Login</button>
        </Link> }
        
        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
