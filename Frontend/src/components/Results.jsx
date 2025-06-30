/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BiSolidHide } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";

/**
 * Props:
 * - generatedQA: Array of questions
 * - type: 'MCQ' | 'tf' | 'open'
 */
function Results({ generatedQA, selectedType }) {
    const [showAnswers, setShowAnswers] = useState({});
    const toggleShowAnswers = (index) => {
        setShowAnswers((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };


    return (
        <div className="mt-8 w-full max-w-6xl">
            {generatedQA.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h2 className="text-2xl font-semibold mb-4">الاسئلة:</h2>
                    <ul className="space-y-2">
                        {generatedQA?.map((qa, index) => (
                            <li
                                key={index}
                                className="p-3 border border-gray-200 rounded flex justify-between items-start"
                            >
                                <div className="w-full">
                                    <p className="text-lg font-medium mb-1">{qa.question}</p>

                                    {selectedType === "MCQ" && (
                                        <ul className="mt-1 pl-4 space-y-1 text-sm">
                                            {qa?.choices?.map((choice, i) => (
                                                <li
                                                    key={i}
                                                    className={`py-1 px-2 rounded ${
                                                        showAnswers[index] && choice === qa.correctAnswer
                                                            ? 'bg-green-100 text-green-700 font-semibold'
                                                            : ''
                                                    }`}
                                                >
                                                    {String.fromCharCode(0x0623 + i)}) {choice}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {selectedType === "TF" && (
                                        <div
                                            className={`transition-all duration-500 mt-1 text-sm ${
                                                showAnswers[index] ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                            }`}
                                        >
                                            <p className="text-gray-700">
                                                {qa.answer ? "صحيح" : "خطأ"}
                                            </p>
                                        </div>
                                    )}

                                    {selectedType === "essay" && (
                                        <div
                                            className={`transition-all duration-500 mt-1 text-sm ${
                                                showAnswers[index] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                            }`}
                                        >
                                            <p className="text-gray-700">{qa.answer}</p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => toggleShowAnswers(index)}
                                    className="ml-4 mt-1 text-blue-900 hover:text-blue-950 transition-colors"
                                    aria-label="Toggle Answer"
                                >
                                    {showAnswers[index] ? <BiSolidHide size={24} /> : <IoMdEye size={24} />}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Results;
