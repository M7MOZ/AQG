"use client"

import { useState } from "react"
import Modal from "react-modal"
import { RiChatNewLine, RiMenuLine, RiCloseLine } from "react-icons/ri"
import { Tooltip } from "react-tooltip"
import HistoryItem from "./HistoryItem"

// Make sure to set the app element for accessibility
if (typeof window !== "undefined") {
    Modal.setAppElement("#root")
}

function History() {
    const [isOpen, setIsOpen] = useState(false)

    const historyLabels = [
        { id: 1, label: "محادثة حول تطوير الويب" },
        { id: 2, label: "استفسارات حول React.js" },
        { id: 3, label: "أسئلة عن واجهات المستخدم" },
        { id: 4, label: "مناقشة حول أفضل الممارسات" },
        { id: 5, label: "استشارة حول أدوات التطوير" },
        { id: 10, label: "نصائح لتحسين الكود" },
        { id: 7, label: "أسئلة حول أداء التطبيقات" },
        { id: 9, label: "استكشاف أخطاء وإصلاحها" },
        { id: 11, label: "نصائح لتحسين الكود" },
        { id: 6, label: "نقاش عن أنظمة التصميم" },
        { id: 8, label: "حوار عن تقنيات جديدة" },
        { id: 12, label: "نصائح لتحسين الكود" },
    ]

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

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
                    <button className="bg-[#5661f6] w-[250px] p-2 sm:p-3 rounded-full text-white text-base sm:text-2xl m-5 cursor-pointer flex flex-row gap-2 justify-center items-center hover:bg-[#4550e6] transition-colors">
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
                        {historyLabels.map((item) => (
                        <HistoryItem key={item.id} label={item.label} />
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
                        <button className="bg-[#5661f6] flex-1 mx-4 p-2 rounded-full text-white text-base cursor-pointer flex flex-row gap-2 justify-center items-center hover:bg-[#4550e6] transition-colors">
                            <span>محادثة جديدة </span>
                            <RiChatNewLine />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="border-gray-300 h-[87%] w-full">
                        <div className="flex flex-row justify-between items-center p-2">
                            <span className="text-gray-800">محاداثاتك</span>
                            <span className="text-red-400 cursor-pointer hover:text-red-600 transition-colors">مسح الكل</span>
                        </div>
                        <ul className="overflow-y-auto h-[90%]">
                            {historyLabels.map((item) => (
                                <HistoryItem key={item.id} label={item.label} />
                            ))}
                            <Tooltip id="history-tooltip-modal" className="z-50 max-w-[300px]" delayShow={300} />
                        </ul>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default History
