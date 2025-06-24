/* eslint-disable react/prop-types */

export default function ButtonVi({onClick, text}) {
  return (
    <button onClick={onClick} className="bg-[#5661f6] w-[68%] p-2 sm:p-3 rounded-full text-white text-base sm:text-2xl m-5 cursor-pointer">{text}</button>
  )
}
