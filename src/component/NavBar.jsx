import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cats">Cats</Link></li>
            <li><Link to="/dogs">Dogs</Link></li>
        </ul>
    </div>
  )
}

export default NavBar