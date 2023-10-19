import React from 'react'
import './Footer.css'

export default function footer() {
  return (
    <div className='footer'>
      <hr className='footer_line'/>
      <div className='footer_container'>
        <p>lecomparateur.io</p>
        <a href='/montion'>Mentions légales</a>
        <a href='/cgu'>CGU</a>
        <a href='/pdp'>Protection des données personnelles</a>
        <a href='/cookies'>Gestion des cookies</a>
      </div>
    </div>
  )
}
