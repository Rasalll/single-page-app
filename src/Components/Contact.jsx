import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
     <h1  className='text-light bg-dark text-center'>Contact</h1>
      <Link to={'/'} className='btn btn-info'>Back To Home</Link>

    </div>
  )
}

export default Contact
