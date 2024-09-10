import Dashboard from "./dashboard"
import SideBar from "./side-nav"

const Communities = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="w-full">
        <Dashboard />
      </div>
      </div>
  )
}

export default Communities