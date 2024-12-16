import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1  className='text-light bg-dark text-center'>Home</h1>
      <Link to={'/about'} className='btn btn-warning'>Go To About</Link>

    </div> 
  )
}

export default Home
