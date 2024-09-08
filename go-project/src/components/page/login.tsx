import { GoLogo } from "@/assets/icons";

export default function Login() {
    return <>
    
    <div className="bg-login">

    </div>
    <div className="absolute top-0 w-full px-5">
        <div className="flex justify-between">

        <img src={GoLogo} alt="logo" className="w-32" />
        <div className="text-stone-100">
            
            login
        </div>
        </div>
    </div>
    <div className="absolute top-1/3 left-96 2xl:left-1/3">
        <h1 className=" text-stone-100 text-2xl text-center">Welcome</h1>
        <p className="  text-stone-100 text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut elit tellus, luctus nec ullamcorper mattis.</p>
    </div>
    </>

}