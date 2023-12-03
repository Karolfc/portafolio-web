import { Link } from 'react-router-dom'
import React from 'react'
import './Hyperlinks.css'

export function Hyperlinks() {
  return (
    <>
      <div className='hyperlinks'>
        <Link to='/portafolio-web'>Home</Link>
        <Link to='/portafolio-web/about'>About</Link>
        <Link to='/portafolio-web/projects'>Projects</Link>
        <Link to='/portafolio-web/contact'>Contact</Link>
      </div>
    </>
  )
}
