import './style.css'
import React from 'react'
import logo from './imagens/logo.png'

function Header() {
  return (
    <div>
        <div className='header'>
            <img className='logo' src={logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Header