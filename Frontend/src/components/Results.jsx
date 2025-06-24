/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BiSolidHide } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
function Results({ generatedQA }) {
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
                    <h2 className="text-2xl font-semibold mb-4">الأسئلة المولدة:</h2>
                    <ul className="space-y-2">
                        {generatedQA.map((qa, index) => (
                            <li
                                key={index}
                                
                                className="p-3 border border-gray-200 rounded flex justify-between items-center"
                            >
                                <div>
                                    <p className="text-lg font-medium">{qa.question}</p>
                                    <div
                                        className={`transition-all duration-500  ${
                                            showAnswers[index] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className="text-gray-600 mt-2">{qa.answer}</p>
                                    </div>
                                </div>
                                {
                                    showAnswers[index] ? (
                                        <button
                                            onClick={() => toggleShowAnswers(index)}
                                            className="text-blue-900 hover:text-blue-950 transition-colors"
                                        >
                                            <BiSolidHide size={24} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => toggleShowAnswers(index)}
                                            className="text-blue-900 hover:text-blue-950 transition-colors"
                                        >
                                            <IoMdEye size={24} />
                                        </button>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Results;
