/* eslint-disable react/prop-types */
import { MdDelete  } from "react-icons/md";
function HistoryItem({label, onClick, onDelete}) {
    return (
        <li 
            className="flex flex-row justify-between gap-2 items-center p-3 hover:bg-gray-100 cursor-pointer w-full"
            data-tooltip-id="history-tooltip"
            data-tooltip-content={label}
            data-tooltip-place="left"
            onClick={onClick}
        >
            <span className="text-gray-800 text-base sm:text-2xl truncate">{label}</span>
            <MdDelete onClick={onDelete} className=" text-2xl text-blue-900 hover:text-blue-950 flex-shrink-0" />
        </li>
    );
}

export default HistoryItem