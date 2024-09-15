import { useSidebar } from "@/sidebarcontext";
import Navbar from "../navbar";
import MyCommunities from "./main";

export default function Dashboard() {
  const { toggle} = useSidebar();
  return (
    <div className="flex flex-col">
      <div>
       <Navbar/>
        </div>
        <div className={`${toggle? "-ml-64": ""}`}>
            <MyCommunities/>
        </div>
    </div>
  );
}
