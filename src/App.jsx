// import { useState } from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
