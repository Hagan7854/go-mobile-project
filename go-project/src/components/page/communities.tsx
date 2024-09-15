import { GoLogo } from "@/assets/icons"
import Dashboard from "./dashboard"
import SideBar from "./side-nav"

const Communities = () => {
  return (
    <div className="flex bg-[#F5F5F5] h-full">
      <div>
      <div className="navbar bg-green-500 h-16 w-64 flex justify-center items-center ">
        <img src={GoLogo} alt="logo" className="w-32" />
      </div>
        <SideBar />
      </div>
      <div className="w-full">
        <Dashboard />
      </div>
      </div>
  )
}

export default Communities