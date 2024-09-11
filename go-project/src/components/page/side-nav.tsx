import { GoLogo, ProfilePic } from "@/assets/icons";
import { FaArchive, FaMailBulk, FaUser, FaUserFriends } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="w-64 bg-white fixed h-full">
      <div className="bg-green-500 h-16 flex justify-center items-center ">
        <img src={GoLogo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img src={ProfilePic} alt="profile pic" className="w-[3rem]" />
        <div>
          <p className="font-medium">Ken Cann</p>
          <p className="font-medium text-[12px]">@ncann</p>
        </div>
      </div>
      <ul className="mt-6 mx-5">
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <a href="">
            <FaUserFriends className="w-6 h-6 inline-block mr-2 -mt-2" />
            Communities
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <a href="">
            <FaUser className="w-4 h-4 inline-block mr-2 -mt-2" />
            Members
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <a href="">
            <FaMailBulk className="w-4 h-4 inline-block mr-2 -mt-2" />
            Messages
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-green-500 py-2 pl-4 hover:text-white">
          <a href="">
            <FaArchive className="w-4 h-4 inline-block mr-2 -mt-2" />
            Archives
          </a>
        </li>
      </ul>
      <div className="flex flex-col py-3 mx-5 justify-center items-center bg-[#D2D2D2] text-white cursor-pointer hover:bg-green-500 rounded-lg mt-16">
        <span>
          <FaUserFriends />
        </span>
        New Communities
      </div>
    </div>
  );
};

export default SideBar;
