
import Quiz from '../components/Quiz'
import LandingPage from '../components/LandingPage'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SelectDifficulty from '../components/SelectDifficulty';
import MediumLevel from '../components/MediumLevel';
import HardLevel from '../components/HardLevel';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/select_difficulty" element={<SelectDifficulty/>} />
          <Route path="/easy_quiz" element={<Quiz />} />
          <Route path="/medium_quiz" element={<MediumLevel/>} />
          <Route path="/hard_quiz" element={<HardLevel/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
