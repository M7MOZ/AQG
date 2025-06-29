"use client"

import { useContext, useState } from "react"
import Modal from "react-modal"
import { RiChatNewLine, RiMenuLine, RiCloseLine } from "react-icons/ri"
import { Tooltip } from "react-tooltip"
import HistoryItem from "./HistoryItem"
import useGetChats from "../hooks/useGetChats"
import useGetOneChat from "../hooks/useGetOneChat"
import { AuthContext } from "../context/AuthContext"

if (typeof window !== "undefined") {
    Modal.setAppElement("#root")
}

function History() {
    const {setContext, setTitle, setQuestions} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedChatId, setSelectedChatId] = useState(null)

    const { refetch } = useGetOneChat(selectedChatId)
    const {data: chats, isPending} = useGetChats()
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const getChat = async(id) => {
        setSelectedChatId(id)
        const {data} = await refetch()
        setContext(data.context)
        setTitle(data.title)
        setQuestions(data.questions)
    }
    const handleNewChat = () => {
        setContext("")
        setTitle("")
        setQuestions([])
        setSelectedChatId(null)
    }
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
        },
        content: {
            top: "0",
            left: "auto",
            right: "0",
            bottom: "0",
            width: "300px",
            height: "100vh",
            padding: "0",
            border: "none",
            borderRadius: "0",
            backgroundColor: "white",
            transform: "translateX(0)",
        },
    }

    return (
        <>
            <button
                onClick={openModal}
                className="md:hidden fixed top-4 right-4 z-50 bg-[#5661f6] p-3 rounded-full text-white shadow-lg hover:bg-[#4550e6] transition-colors"
                aria-label="فتح قائمة المحادثات"
            >
                <RiMenuLine size={24} />
            </button>

            {/* Desktop Version - Always visible on medium screens and up */}
            <div className="bg-white w-[300px] h-screen px-4 md:flex flex-col hidden items-center">
                <div className="border-b-2 border-gray-300 h-[13%] flex justify-center items-center">
                    <button onClick={handleNewChat} className="bg-[#5661f6] w-[250px] p-2 sm:p-3 rounded-full text-white text-base sm:text-2xl m-5 cursor-pointer flex flex-row gap-2 justify-center items-center hover:bg-[#4550e6] transition-colors">
                        <span>محادثة جديدة </span>
                        <RiChatNewLine />
                    </button>
                </div>
                <div className="border-gray-300 h-[87%] w-full">
                    <div className="flex flex-row justify-between items-center p-2">
                        <span className="text-gray-800">محاداثاتك</span>
                        <span className="text-red-400 cursor-pointer hover:text-red-600 transition-colors">مسح الكل</span>
                    </div>
                    <ul className="overflow-y-auto h-[90%]">
                        {chats?.map((item) => (
                        <HistoryItem onClick = {() => getChat(item._id)} key={item._id} label={item.title} />
                        ))}
                        <Tooltip id="history-tooltip" className="z-50 max-w-[300px]" delayShow={300} />
                    </ul>
                </div>
            </div>

            {/* Modal Version - Only for mobile screens */}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="قائمة المحادثات"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <div className="bg-white w-full h-full px-4 flex flex-col items-center">
                    {/* Modal Header with Close Button */}
                    <div className="border-b-2 border-gray-300 h-[13%] flex justify-between items-center w-full">
                        <button
                        onClick={closeModal}
                        className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                        aria-label="إغلاق القائمة"
                        >
                            <RiCloseLine size={24} />
                        </button>
                        <button onClick={handleNewChat} className="bg-[#5661f6] flex-1 mx-4 p-2 rounded-full text-white text-base cursor-pointer flex flex-row gap-2 justify-center items-center hover:bg-[#4550e6] transition-colors">
                            <span>محادثة جديدة </span>
                            <RiChatNewLine />
                        </button>
                    </div>
                    
                    <div className="border-gray-300 h-[87%] w-full">
                        <div className="flex flex-row justify-between items-center p-2">
                            <span className="text-gray-800">محاداثاتك</span>
                            <span className="text-red-400 cursor-pointer hover:text-red-600 transition-colors">مسح الكل</span>
                        </div>
                        {isPending ? (
                            <div className="flex justify-center items-center h-full">
                                <span className="text-gray-500">جارٍ تحميل المحادثات...</span>
                            </div>
                        ):
                        (
                            <ul className="overflow-y-auto h-[90%]">
                                {chats?.map((item) => (
                                    <HistoryItem onClick = {() => getChat(item._id)} key={item._id} label={item.title} />
                                ))}
                                <Tooltip id="history-tooltip-modal" className="z-50 max-w-[300px]" delayShow={300} />
                            </ul>
                        )
                        }
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default History
