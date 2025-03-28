import React from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
    const navigate=useNavigate()
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4">
    <div className="text-center max-w-lg bg-white bg-opacity-10 p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold mb-4 text-black">Welcome to the Quiz Section</h1>
      <p className="text-lg text-gray-800 mb-6">
        Test your knowledge and challenge yourself with exciting questions.
        Are you ready to start?
      </p>
      <button
        onClick={()=>navigate('/quiz')}
        className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        Start Quiz 🚀
      </button>
    </div>
  </div>
  )
}

export default LandingPage