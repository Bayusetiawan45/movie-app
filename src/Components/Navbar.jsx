import React from 'react'

export default function Navbar({ onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container d-flex justify-content-between">
        <h2 className='text-light'>Movie</h2>
        <form role="search">
          <input className="form-control bg-dark text-light rounded-5" type="search" placeholder="Search" aria-label="Search" onChange={onSearchChange} />
        </form>
      </div>
    </nav>
  )
}
