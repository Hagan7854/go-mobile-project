import { GoLogo, Key, Person } from "@/assets/icons";
import { Icon } from "../ui/icon";
import { Button } from "../ui/button";

export default function Login() {
    return <>
    
    <div className="bg-login">

    </div>
    <div className="absolute top-0 w-full px-5">
        <div className="flex justify-between">

        <img src={GoLogo} alt="logo" className="w-32" />
        <div className="flex gap-5">
          <Icon name="Lock" color="green"/>  
           <p className="text-xl text-stone-100 font-serif"> Login</p> 
           <Icon name="Menu" color="green" />
        </div>
        </div>
    </div>
    <div className="absolute top-1/3  w-full">
        <h1 className=" text-stone-100 text-2xl text-center font-bold mb-5">Welcome</h1>
        <p className="  text-stone-100 text-base text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
        Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <form className="flex flex-col justify-center w-full mb-5 items-center">
        <div className="flex flex-row w-[500px] h-10 bg-white rounded-tl-3xl rounded-tr-3xl px-4 border justify-between">
            <input type="email" placeholder="Email or Username" className="outline-none" />
            <img src={Person} alt="person icon" className="w-5" />
            
        </div>
        <div className="flex flex-row w-[500px] h-10 bg-white rounded-bl-3xl rounded-br-3xl px-4 border mb-3 justify-between">
            <input type="Password" placeholder="Password" className="outline-none" />
            <img src={Key} alt="key icon" className="w-5" />
        </div>
        <div className="flex flex-row w-[400px] justify-between mb-5">
            <div className="flex flex-row gap-4">
            <input type="checkbox" name="Remember" id="" className=" h-6 w-6 appearance-none bg-transparent rounded-md border-2 checked:bg-green-400"/>
            <label className="text-stone-100">Remember</label>
            </div>

            <a href="/login" className="text-stone-100 cursor-pointer">Lost Password?</a>
        </div>
        <Button className="w-52 rounded-3xl" variant="destructive">Log into your account</Button>
    </form>

    </div>
    
    </>

}