/* eslint-disable react/prop-types */
import { useState } from "react";

function QestionsTypes() {
    const [selectedOption, setSelectedOption] = useState('essay');

    return (
        <div className="flex gap-4 flex-col md:flex-row">
            <label className="flex items-center gap-1 cursor-pointer text-xl">
                <input 
                type="radio" 
                name="option" 
                value="essay" 
                checked={selectedOption === 'essay'} 
                onChange={() => setSelectedOption('essay')}
                className="h-4 w-4"
                />
                <span>مقالي</span>
            </label>
            
            <label className="flex items-center gap-1 cursor-pointer text-xl">
                <input 
                type="radio" 
                name="option" 
                value="TF" 
                checked={selectedOption === 'TF'} 
                onChange={() => setSelectedOption('TF')}
                className="h-4 w-4"
                />
                <span>صح ام خطأ</span>
            </label>
            
            <label className="flex items-center gap-1 cursor-pointer text-xl">
                <input 
                type="radio" 
                name="option" 
                value="MCQ" 
                checked={selectedOption === 'MCQ'} 
                onChange={() => setSelectedOption('MCQ')}
                className="h-4 w-4"
                />
                <span>اختيار من متعدد</span>
            </label>
        </div>
    )
}

export default QestionsTypes