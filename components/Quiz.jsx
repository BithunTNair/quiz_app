import React, { useState } from 'react'
import { Data } from '../questions/questions'

const Quiz = () => {
  const [data] = useState(Data);
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState('default');
  const [isClicked, setIsClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // const [prevDisabled, setPrevDisabled] = useState(false)
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('')

  const handleNext = () => {
    if (index === 8) {
      setDisabled(true)
    }
    setColor('default');
    setIsClicked(false);
    setIndex(index + 1);
  }

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      console.log(index);
      setDisabled(false)
      setColor('default');
      setIsClicked(false)
    }
    // if (index - 1 === 0) {
    //   setPrevDisabled(true)
    // }
  };
  const aIsCorrect = (e) => {
    console.log(e.target.value);
    const answer = e.target.value;
    const id = e.target.id
    if (answer === data[index].correctAnswer && id == 1) {
      setColor('green_a');
      setScore(score + 1);
    } else {
      setColor('red_a');
      checkAnswer(data[index].options)
    };
    setIsClicked(true)
  };

  const bIsCorrect = (e) => {
    console.log(e.target.value);

    const answer = e.target.value;
    console.log(answer);

    const id = e.target.id
    if (answer === data[index].correctAnswer && id == 2) {
      setColor('green_b');
      setScore(score + 1);
    } else {
      setColor('red_b');
      checkAnswer(data[index].options)
    };
    setIsClicked(true)
  };
  const cIsCorrect = (e) => {
    const answer = e.target.value;
    const id = e.target.id
    if (answer === data[index].correctAnswer && id == 3) {
      setColor('green_c');
      setScore(score + 1);
    } else {
      setColor('red_c');
      checkAnswer(data[index].options)
    };
    setIsClicked(true)
  };
  const dIsCorrect = (e) => {
    const answer = e.target.value;
    const id = e.target.id
    if (answer === data[index].correctAnswer && id == 4) {
      setColor('green_d');
      setScore(score + 1);
    } else {
      setColor('red_d');
      checkAnswer(data[index].options);
    };
    setIsClicked(true)
  };
  const checkAnswer = (options) => {
    console.log(options);
    console.log(data);

    let crctAnswer = ''
    for (let i = 0; i < options.length; i++) {
      if (data[index].correctAnswer === options[i]) {
        crctAnswer = i;
        // setCorrectAnswer(crctAnswer)
      }
    }
    console.log(crctAnswer);
    displayAnswer(crctAnswer)

  };
  const displayAnswer=(answer)=>{
    if(answer==0){
      setColor('green_a')
    }else if(answer==1){
      setColor('green_b')
    }
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-yellow-300 to-red-400 p-4">
        <div className="w-full max-w-lg p-6 bg-yellow-200 shadow-lg rounded-lg border border-black text-center">
          {/* Question Number */}
          <div className="text-gray-500 text-sm font-medium"> </div>
          {/* Question */}
          <h2 className="mt-2 text-2xl font-semibold text-black">
            {data[index].id}  {' .'}  {data[index].question}
          </h2>
          {/* Options */}
          <div className="mt-6 space-y-3">
            <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_a' ? "bg-green-400  animate-pulse border-none" : color === "red_a" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
              id={1}
              value={data[index].options[0]}
              onClick={aIsCorrect} >
              A. {data[index].options[0]}
            </button>
            <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_b' ? "bg-green-400  animate-pulse border-none" : color === "red_b" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
              id={2}
              onClick={bIsCorrect}
              value={data[index].options[1]}>
              B. {data[index].options[1]}
            </button>
            <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_c' ? "bg-green-400  animate-pulse border-none" : color === "red_c" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
              id={3}
              onClick={cIsCorrect}
              value={data[index].options[2]} >
              C. {data[index].options[2]}
            </button>
            <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_d' ? "bg-green-400  animate-pulse border-none" : color === "red_d" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
              id={4}
              onClick={dIsCorrect}
              value={data[index].options[3]}>
              D. {data[index].options[3]}
            </button>
          </div>
          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between items-center">
            <button className="px-6 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition hover:cursor-pointer"
              onClick={handlePrev}
              disabled={''}>
              Previous
            </button>

            {/* Score Section Centered */}
            <div className="flex-grow flex items-center justify-center">
              <div className="text-black font-semibold text-lg bg-green-300 px-4 py-2 rounded-md shadow-md">
                Score: {score}{'/10'}
              </div>
            </div>

            <button className="px-6 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition hover:cursor-pointer"
              onClick={handleNext}
              disabled={disabled}>
              Next
            </button>
          </div>
          {/* Get Mixed Questions Button */}
          {/* <button className="mt-6 w-full px-6 py-3 text-white font-semibold text-lg rounded-md bg-blue-600 hover:bg-blue-700 transition relative overflow-hidden">
          Get Mixed Questions
          <span className="absolute inset-0 bg-blue-400 opacity-0 hover:opacity-50 transition duration-300 rounded-md"></span>
        </button> */}
        </div>
      </div>
    </>
  )
}

export default Quiz