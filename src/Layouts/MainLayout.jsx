import React from 'react'
import Navbar from '../Components/Navbar'

export default function MainLayout({ children, onSearchChange }) {
  return (
    <div className="bg-dark min-vh-100 w-100">
      <Navbar onSearchChange={onSearchChange} />
      {children}
    </div>
  )
}
