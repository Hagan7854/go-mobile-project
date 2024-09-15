import { Outlet } from "react-router-dom"
// import Community from "../communities/index"

const MyCommunities = () => {
  return (
    <div className=" bg-[#F5F5F5] h-screen">
      <div className="pt-5 pl-5">
      <h1>
        My Communities
      </h1>
      <Outlet/>
      </div>
      
    </div>
  )
}

export default MyCommunities