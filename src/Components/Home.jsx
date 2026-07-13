import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div>
        <NavBar />
          <h1 className="text-center p-5">Welcome to Flight Management</h1>
          <p className="text-center">Manage flight information and bookings efficiently.</p>
    </div>
  )
}

export default Home