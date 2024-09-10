import Navbar from "../navbar";
import MyCommunities from "./main";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div>
       <Navbar/>
        </div>
        <div>
            <MyCommunities/>
        </div>
    </div>
  );
}
