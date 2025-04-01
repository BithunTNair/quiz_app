import React, { useState } from 'react';
import { HardQuestions } from '../questions/advanced_qstns'

const HardLevel = () => {
    const [data] = useState(HardQuestions);
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState([]);
    const [green, setGreen] = useState('')
    const [isClicked, setIsClicked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAns, setSelectedAns] = useState([])


    const handleNext = () => {
        if (index === 8) {
            setDisabled(true)
        }
        setColor('default');
        setGreen('')
        setIsClicked(false);
        setIndex(index + 1);
    }

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
            setDisabled(false)
            setColor('default');
            setIsClicked(false);
            setGreen('');

        }
    };
    const aIsCorrect = (e) => {
        const answer = e.target.value;
        const id = e.target.id
        if (answer === data[index].correctAnswer && id == 1) {
            setColor('green_a');
            setScore(score + 1);
        } else {
            setColor('red_a');
            checkAnswer(data[index].options)
        };
        setIsClicked(true);
        setSelectedAns([...selectedAns, answer]);
        console.log(selectedAns);
    };

    const bIsCorrect = (e) => {
        console.log(e.target.value);

        const answer = e.target.value;
        // console.log(answer);

        const id = e.target.id
        if (answer === data[index].correctAnswer && id == 2) {
            setColor('green_b');
            setScore(score + 1);
        } else {
            setColor('red_b');
            checkAnswer(data[index].options)
        };
        setIsClicked(true);
        setSelectedAns([...selectedAns, answer]);
        console.log(selectedAns);
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
        setIsClicked(true);
        setSelectedAns([...selectedAns, answer]);
        console.log(selectedAns);
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
        setIsClicked(true);
        setSelectedAns([...selectedAns, answer]);
        console.log(selectedAns);
    };
    const checkAnswer = (options) => {
        // console.log(options);
        // console.log(data);

        let crctAnswer = ''
        for (let i = 0; i < options.length; i++) {
            if (data[index].correctAnswer === options[i]) {
                crctAnswer = i;
                // setCorrectAnswer(crctAnswer)
            }
        }
        // console.log(crctAnswer);
        displayAnswer(crctAnswer)

    };
    const displayAnswer = (answer) => {
        if (answer == 0) {
            setGreen('green_a')
        } else if (answer == 1) {
            setGreen('green_b')
        } else if (answer == 2) {
            setGreen('green_c')
        } else if (answer == 3) {
            setGreen('green_d')
        }
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-tl from-gray-800 via-blue-700 to-gray-900 p-4">
                <div className="w-full max-w-lg p-6 bg-linear-to-r from-blue-200 via-blue-400 to-blue-600 shadow-lg rounded-lg border border-black text-center">
                    {/* Question Number */}
                    {/* Score Section - Centered Above Question */}
                    <div className="flex justify-center items-center mb-4">
                        <div className="text-white font-semibold text-lg bg-blue-500 px-4 py-2 rounded-md shadow-md">
                            Score: {score}/10
                        </div>
                    </div>
                    {/* Question */}
                    <h2 className="mt-2 text-2xl font-semibold text-black">
                        {data[index].id}  {' .'}  {data[index].question}
                    </h2>
                    {/* Options */}
                    <div className="mt-6 space-y-3">
                        <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_a' || green === 'green_a' ? "bg-green-400  animate-pulse border-none" : color === "red_a" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
                            id={1}
                            value={data[index].options[0]}
                            onClick={aIsCorrect} >
                            A. {data[index].options[0]}
                        </button>
                        <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_b' || green === 'green_b' ? "bg-green-400  animate-pulse border-none" : color === "red_b" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
                            id={2}
                            onClick={bIsCorrect}
                            value={data[index].options[1]}>
                            B. {data[index].options[1]}
                        </button>
                        <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_c' || green === 'green_c' ? "bg-green-400  animate-pulse border-none" : color === "red_c" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
                            id={3}
                            onClick={cIsCorrect}
                            value={data[index].options[2]} >
                            C. {data[index].options[2]}
                        </button>
                        <button disabled={isClicked} className={`w-full px-4 py-3 border rounded-md text-left ${color === 'green_d' || green === 'green_d' ? "bg-green-400  animate-pulse border-none" : color === "red_d" ? "bg-red-400  animate-pulse border-none" : "bg-gray-50"} hover:cursor-pointer`}
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
                        <button className="px-6 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition hover:cursor-pointer"
                            onClick={handleNext}
                            disabled={disabled}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HardLevel