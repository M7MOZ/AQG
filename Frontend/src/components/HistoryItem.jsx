/* eslint-disable react/prop-types */
import { MdChatBubbleOutline } from "react-icons/md";
function HistoryItem({label}) {
    return (
        <li 
            className="flex flex-row gap-2 items-center p-3 hover:bg-gray-100 cursor-pointer w-[250px]"
            data-tooltip-id="history-tooltip"
            data-tooltip-content={label}
            data-tooltip-place="left"
            >
            <MdChatBubbleOutline className="text-2xl flex-shrink-0" />
            <span className="text-gray-800 text-base sm:text-2xl truncate">{label}</span>
        </li>
    );
}

export default HistoryItem