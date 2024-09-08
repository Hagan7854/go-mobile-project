import UserNav from "../user-tool/user-nav";
import phoneAndDesktopImage from "../../assets/images/app-concept.jpg";
import { AppleStoreLogo, GoLogo, PlayStoreLogo } from "@/assets/icons";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page"></div>
      <UserNav />
      <div className="flex gap-5 absolute top-1/3 left-36 lg:left-80">
        <img
          src={phoneAndDesktopImage}
          alt=""
          className=" flex-grow w-[396px] h-[370px] xl:max-w-xl rounded-3xl"
        />
        <div className="flex flex-col gap-5">
          <img src={GoLogo} className="w-96 h-90" />
          <h1 className="text-stone-100 font-bold text-3xl italic text-center">
            MOBILE APP
          </h1>
          <p className="text-stone-100 font-semibold text-lg text-center">
            Get the App
          </p>
          <div className="flex flex-row gap-5">
            <img src={PlayStoreLogo} alt="" className=" w-48" />
            <img src={AppleStoreLogo} alt="" className=" w-48" />
          </div>
        </div>
      </div>
    </>
  );
}
