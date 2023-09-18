import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  let home = '/'; 
  let About = '/Body'; 
  let footer = '/Footer'

  return ( 
    <div>
        <Link to={home}>Home</Link>
        <Link to={About}>About</Link>
        <Link to={footer}>Footer</Link>
    </div>
  )
}

export default Navbar