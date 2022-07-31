import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div>
        <h1>Page Not Found 404 Error</h1>
        <Link to="/home">Go to Home Page</Link>
    </div>
  )
}

export default Pagenotfound