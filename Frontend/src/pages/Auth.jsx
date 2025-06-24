import { Outlet } from "react-router-dom"
import LoginVi from "../UI/LoginVi"
function Auth() {
  return (
    <div className="bg-gray-100 p-4 flex items-center h-screen">
      <div className="bg-white rounded-lg shadow-md h-[95vh] w-full flex">
        <LoginVi />
        <Outlet />
      </div>
    </div>
  )
}
export default Auth