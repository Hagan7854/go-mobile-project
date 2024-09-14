import { Communtiy } from "@/assets/icons";

export default function Community() {
return <div>
    <section className="flex flex-wrap justify-between gap-y-7">
        <div className="grid grid-rows-5 w-72 h-96">
        <img src={Communtiy} alt="community image" className=" row-span-2 bg-gray-300 rounded-3xl object-cover "/>
            <div className="row-span-3 bg-red-500">

            community
            </div>
        </div>
       
        
    </section>
</div>
}