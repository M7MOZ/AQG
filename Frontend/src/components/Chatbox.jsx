import { useContext, useEffect, useState } from 'react';
import Tabs from './Tabs';
import QestionsTypes from './QestionsTypes';
import FileUploader from './FileUploader';
import { useGenerate, useGenerateFromFile, useGenerateMCQ, useGenerate_T_F } from '../hooks/useGenerateQuestions';
import useSaveChat  from '../hooks/useSaveChat';
import Results from './Results';
import useGenerateTitle from '../hooks/useGenerateTitle';
import { AuthContext } from '../context/AuthContext';

function Chatbox() {
    const { context, title, questions, setTitle } = useContext(AuthContext);
    const [inputText, setInputText] = useState(context || '');
    const [selectedTab, setSelectedTab] = useState('text');
    const [selectedType, setSelectedType] = useState('essay');
    const [file, setFile] = useState(null);
    const [generatedQA, setGeneratedQA] = useState(questions || []);
    
    const {mutate: generate, isPending: isQuestionGeneratingLoading} = useGenerate();
    const {mutate: generateMCQ, isPending: isMCQGeneratingLoading} = useGenerateMCQ();
    const {mutate: generateTF, isPending: isTFGeneratingLoading} = useGenerate_T_F();
    const {mutate: generateFromFile, isPending:isUplouading} = useGenerateFromFile();
    const {mutate: saveChat} = useSaveChat();
    const {mutate: generateTitle} = useGenerateTitle();
    const isLoading = isQuestionGeneratingLoading || isUplouading || isMCQGeneratingLoading || isTFGeneratingLoading;
    let generateFunction = selectedType === 'essay' ? generate : selectedType === 'MCQ' ? generateMCQ : generateTF;

    useEffect(() => {
        setInputText(context);
        setGeneratedQA(questions);
    }, [context, questions]);

    const handleGenerate = () => {
        if (selectedTab === 'text' || selectedTab === 'pdf') {
            generateFunction(inputText, {
                onSuccess: (res) => {
                    setGeneratedQA(selectedType === 'essay' ? res.qa : res.questions);
                    console.log('Generated Questions:', generatedQA);
                    
                    generateTitle(inputText, {
                        onSuccess: (title) => {
                            setTitle(title.title );
                            saveChat(
                                {
                                    title: title.title || 'محادثة جديدة',
                                    context: inputText,
                                    questions: selectedType === 'essay' ? res.qa : res.questions,
                                },
                                {
                                    onSuccess: (chat) => {
                                        console.log('Chat saved successfully:', chat);
                                    },
                                    onError: (error) => {
                                        console.error('Error saving chat:', error);
                                    }
                                }
                            );
                        }
                    });
                }
            });
        } else {
            generateFromFile(
                { file, type: selectedTab },
                {
                    onSuccess: (textFromImage) => {
                        generateFunction(textFromImage.text, {
                            onSuccess: (generatedQuestions) => {
                                setGeneratedQA(selectedType === 'essay' ? generatedQuestions.qa : generatedQuestions.questions);
                                generateTitle(textFromImage.text, {
                                    onSuccess: (title) => {
                                        setTitle(title.title)
                                        saveChat(
                                            {
                                                title: title.title || 'محادثة جديدة',
                                                context: textFromImage.text,
                                                questions: selectedType === 'essay' ? generatedQuestions.qa : generatedQuestions.questions,
                                            },
                                            {
                                                onSuccess: (chat) => {
                                                    console.log('Chat saved successfully:', chat);
                                                },
                                                onError: (error) => {
                                                    console.error('Error saving chat:', error);
                                                }
                                            }
                                        );
                                    }
                                });
                            }
                        });
                    }
                }
            );
        }
    };
    return (
        <div className="p-8 flex flex-col items-center h-full">
            
            <div className="mb-8 text-center p-5">
                <h1 className="text-4xl font-semibold text-gray-800 leading-relaxed">
                    {title || "مرحبا بك ! ما الموضيع التي تريد السؤال عنها اليوم ؟ "}
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
                    <QestionsTypes selectedType={selectedType} setSelectedType={setSelectedType}/>
                    <button 
                        onClick={handleGenerate}
                        disabled={isLoading || (selectedTab === 'text' && !inputText.trim()) || (selectedTab !== 'text' && !file)}
                        className="bg-indigo-500 text-white rounded px-4 py-2 text-xl hover:bg-indigo-600 transition-colors"
                        >
                            {isLoading ? 'جاري التحميل...' : 'توليد الأسئلة'}
                    </button>
                </div>
            </div>
            {generatedQA?.length > 0 && (
                <Results generatedQA={generatedQA} selectedType={selectedType}/>
            )}
        </div>
    );
}

export default Chatbox;