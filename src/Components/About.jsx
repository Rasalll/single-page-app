import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
       <h1  className='text-light bg-dark text-center'>About</h1>

      <Link to={'/contact'} className='btn btn-danger'>Go To Contact</Link>

    </div>
  )
}

export default About
