import { ProfilePic } from "@/assets/icons";
import { useSidebar } from "@/sidebarcontext";
import { FaArchive, FaMailBulk, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { toggle } = useSidebar();

  return (
    <div  >
      
      <div className={`${toggle? "hidden": "block"} w-64 bg-white fixed h-full`}>
      <div className="flex flex-row gap-2 items-center" >
        <img src={ProfilePic} alt="profile pic" className="w-[3rem]" />
        <div>
          <p className="font-medium">Ken Cann</p>
          <p className="font-medium text-[12px]">@ncann</p>
        </div>
      </div>
      <ul className="mt-6 mx-5">
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <Link to="community">
            <FaUsers className="w-6 h-6 inline-block mr-2 -mt-2" />
            Communities
          </Link>
        </li>
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <Link to="members">
            <FaUser className="w-4 h-4 inline-block mr-2 -mt-2" />
            Members
          </Link>
        </li>
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <Link to="messages">
            <FaMailBulk className="w-4 h-4 inline-block mr-2 -mt-2" />
            Messages
          </Link>
        </li>
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <Link to="archives">
            <FaArchive className="w-4 h-4 inline-block mr-2 -mt-2" />
            Archives
          </Link>
        </li>
      </ul>
      <div className="flex flex-col py-3 mx-5 justify-center items-center bg-[#D2D2D2] text-white cursor-pointer hover:bg-green-500 rounded-lg mt-16">
        <span>
          <FaUsers />
        </span>
        New Communities
      </div>
      </div>
      
    </div>
  );
};

export default SideBar;
