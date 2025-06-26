import { useState } from 'react';
import Tabs from './Tabs';
import QestionsTypes from './QestionsTypes';
import FileUploader from './FileUploader';
import { useGenerate, useGenerateFromFile } from '../hooks/useGenerateQuestions';
import useSaveChat  from '../hooks/useSaveChat';
import Results from './Results';

function Chatbox() {
    const [inputText, setInputText] = useState('');
    const [selectedTab, setSelectedTab] = useState('text');
    const [file, setFile] = useState(null);
    const [generatedQA, setGeneratedQA] = useState([]);
    console.log('generatedQA', generatedQA);
    
    const {mutate: generate, isPending: isQuestionGeneratingLoading} = useGenerate();
    const {mutate: generateFromFile, isPending:isUplouading} = useGenerateFromFile();
    const {mutate: saveChat} = useSaveChat();
    const isLoading = isQuestionGeneratingLoading || isUplouading;
    const handleGenerate = async () => {
        if (selectedTab === 'pdf' || selectedTab === 'text') {
            generate(inputText, {
                onSuccess: (res) => {
                    setGeneratedQA(res.qa);
                    saveChat({
                        title: "new chat",
                        context: inputText,
                        questions: res.qa
                    });
                }
            });
            return;
        }
        generateFromFile(
            { file, type: selectedTab },
            {
                onSuccess: (res) => {
                    setGeneratedQA(res.qa);
                    return;
                }
            }
        );
    };
    return (
        <div className="p-8 flex flex-col items-center h-full">
            
            <div className="mb-8 text-center p-5">
                <h1 className="text-4xl font-semibold text-gray-800 leading-relaxed">
                    مرحبا بك ! ما الموضيع التي تريد السؤال عنها اليوم ؟
                </h1>
            </div>

            <div className="w-full max-w-6xl bg-white rounded-lg shadow-sm p-4 flex-1 flex flex-col justify-between">
                
                <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            
                {selectedTab == 'text' && 
                    (<textarea 
                        className="w-full h-[250px] md:h-[350px] p-3 border border-gray-200 rounded resize-none text-xl mb-4 outline-none"
                        placeholder="أدخل النص هنا لتوليد الأسئلة..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />)
                }
                {selectedTab == 'pdf' && (<FileUploader type = "pdf" file = {file} setFile={setFile} ononExtractText = {setInputText}/>) }
                {selectedTab == 'image' && (<FileUploader type = "image" file = {file} setFile={setFile}/>) }
                
                <div className="flex justify-between items-center">
                    <QestionsTypes/>
                    <button 
                        onClick={handleGenerate}
                        disabled={isLoading || (selectedTab === 'text' && !inputText.trim()) || (selectedTab !== 'text' && !file)}
                        className="bg-indigo-500 text-white rounded px-4 py-2 text-xl hover:bg-indigo-600 transition-colors"
                        >
                            {isLoading ? 'جاري التحميل...' : 'توليد الأسئلة'}
                    </button>
                </div>
            </div>
            <Results generatedQA={generatedQA} />
        </div>
    );
}

export default Chatbox;