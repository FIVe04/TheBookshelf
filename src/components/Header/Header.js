import React from 'react'
import Logo from '../../assets/logo.svg'
import Login from "./Login/Login"
import './Header.css'
const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt="Logo" className="Logo"/>
      <Login />
    </div>
  )
}

export default Header