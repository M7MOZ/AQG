/* eslint-disable react/prop-types */

function QestionsTypes({selectedType, setSelectedType}) {

    return (
        <div className="flex gap-4 flex-col md:flex-row">
            <label className="flex items-center gap-1 cursor-pointer text-xl">
                <input 
                type="radio" 
                name="option" 
                value="essay" 
                checked={selectedType === 'essay'} 
                onChange={() => setSelectedType('essay')}
                className="h-4 w-4"
                />
                <span>مقالي</span>
            </label>
            
            <label className="flex items-center gap-1 cursor-pointer text-xl">
                <input 
                type="radio" 
                name="option" 
                value="TF" 
                checked={selectedType === 'TF'} 
                onChange={() => setSelectedType('TF')}
                className="h-4 w-4"
                />
                <span>صح ام خطأ</span>
            </label>
            
            <label className="flex items-center gap-1 cursor-pointer text-xl">
                <input 
                type="radio" 
                name="option" 
                value="MCQ" 
                checked={selectedType === 'MCQ'} 
                onChange={() => setSelectedType('MCQ')}
                className="h-4 w-4"
                />
                <span>اختيار من متعدد</span>
            </label>
        </div>
    )
}

export default QestionsTypes