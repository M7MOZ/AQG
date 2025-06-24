import Chatbox from "../components/Chatbox"
import History from "../components/History"
function Chat() {
  return (
    <div className="bg-gray-100 flex flex-row h-screen">
      <History />
      <div className="flex-1 overflow-auto">
        <Chatbox />
      </div>
    </div>
  )
}

export default Chat