
import Quiz from '../components/Quiz'
import LandingPage from '../components/LandingPage'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SelectDifficulty from '../components/SelectDifficulty';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/select_difficulty" element={<SelectDifficulty/>} />
          <Route path="/easy_quiz" element={<Quiz   Difficulty={'easy'} />} />
          <Route path="/medium_quiz" element={<Quiz  Difficulty={'medium'} />} />
          <Route path="/hard_quiz" element={<Quiz  Difficulty={'hard'} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
