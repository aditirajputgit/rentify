import React from 'react'
import LandingPage from '../components/LandingPage'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh',maxHeight:"80vh",overflowY:"scroll" }}>
      <LandingPage />
    </div>
  )
}