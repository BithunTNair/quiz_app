import React from "react";
import { useNavigate } from "react-router-dom";
const SelectDifficulty = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-4">
            <div className="text-center max-w-lg bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 bg-opacity-20 p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold mb-4 text-black">Select Difficulty Level</h2>
                <p className="text-lg text-black mb-6">
                    Choose your preferred difficulty level and start the quiz.
                </p>
                {/* Instructions */}
                <div className="bg-black bg-opacity-70 text-white p-4 rounded-md mb-6">
                    <h3 className="text-xl font-semibold mb-2">Quiz Rules:</h3>
                    <ul className="text-left text-base list-disc list-inside">
                        <li>Each section contains a total of <span className="font-bold">10 questions</span>. You have only 10 chances to answer, so choose wisely!</li>
                        <li>You have only <span className="font-bold">one chance</span> to select an answer per question.</li>
                        <li>Once you select an option, it will be <span className="font-bold">locked</span> and cannot be changed.</li>
                        <li>If your answer is correct, it will turn <span className="text-green-400">green</span>.</li>
                        <li>If your answer is wrong, it will turn <span className="text-red-400">red</span> and the correct answer will turn green.</li>
                        <li>Your score will update immediately after selecting an answer.</li>
                    </ul>
                </div>
                {/* Difficulty Buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => navigate("/easy_quiz")}
                        className="px-6 py-3 w-full text-lg font-semibold bg-green-400 text-black rounded-full shadow-md hover:bg-green-500  transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 hover:cursor-pointer"
                    >
                        Easy
                    </button>
                    <button
                        onClick={() => navigate("/medium_quiz")}
                        className="px-6 py-3 w-full text-lg font-semibold bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 hover:cursor-pointer"
                    >
                        Medium
                    </button>
                    <button
                        onClick={() => navigate("/hard_quiz")}
                        className="px-6 py-3 w-full text-lg font-semibold bg-red-400 text-black rounded-full shadow-md hover:bg-red-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 hover:cursor-pointer"
                    >
                        Hard
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SelectDifficulty;