import UserNav from "../user-tool/user-nav";
import phoneAndDesktopImage from "../../assets/images/app-concept.jpg";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page"></div>
      <UserNav />
      <div className="flex gap-5 absolute top-1/3 left-36">
        <img
          src={phoneAndDesktopImage}
          alt=""
          className="w-[396px] h-[370px] rounded-3xl"
        />
        <div>Logo</div>
      </div>
    </>
  );
}
