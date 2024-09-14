import { Communtiy } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Community() {
  return (
    <div>
      <section className="flex flex-wrap justify-between gap-y-7">
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <Progress value={45} indicatorColor="bg-green-600"/>
          </div>
        </div>
      </section>
    </div>
  );
}
