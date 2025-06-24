/* eslint-disable react/prop-types */

function Tabs({selectedTab, setSelectedTab}) {
    
    return (
        <div className="flex border-b gap-3 border-gray-200 mb-4">
            <button 
            className={`px-4 py-2 text-xl cursor-pointer ${selectedTab === 'text' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('text')}
            >
                نص
            </button>
            <button 
            className={`px-4 py-2 text-xl cursor-pointer ${selectedTab === 'image' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('image')}
            >
                صورة
            </button>
            <button 
            className={`px-4 py-2 text-xl cursor-pointer ${selectedTab === 'pdf' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('pdf')}
            >
                ملف PDF
            </button>
        </div>
    )
}

export default Tabs