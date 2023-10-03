import React from 'react'
import './Footer.css'

export default function footer() {
  return (
    <div className='footer'>
      <hr className='footer_line'/>
      <div className='footer_container'>
        <p>lecomparateur.io</p>
        <a href='#'>Conditions générales d'utilisation</a>
        <a href='#'>Politique de confidentialité</a>
        <a href='#'>Gestion des cookies</a>
      </div>
    </div>
  )
}
