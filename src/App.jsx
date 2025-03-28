import { useState } from 'react'
import './App.css'
import Quiz from '../components/Quiz'
import LandingPage from '../components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
