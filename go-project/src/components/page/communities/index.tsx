import { Communtiy } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FaClock, FaUsers } from "react-icons/fa";

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
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-96 bg-white rounded-3xl">
          <img
            src={Communtiy}
            alt="community image"
            className=" rounded-3xl object-cover"
          />
          <div className="flex flex-col px-4 my-3 gap-1">
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <p className="text-base font-bold text-gray-400 ">Fitness</p>
                    <p className="text-lg font-bold text-green-600 ">Jarul Fitness</p>
                </div>
                <Button className="bg-green-500 rounded-3xl py-0 h-8 w-20 font-bold text-base">Open</Button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-start gap-2">
                    <FaUsers/>
                    <div className="text-[12px]">
                        <p>47</p>
                        <p>Members</p>
                        </div>
                    
                </div>
                <div className="flex flex-row items-center gap-1 text-[12px]">
                    <FaClock/>
                    <div>
                        <span className="font-bold mr-1">1</span>
                        <span>year</span>
                    </div>
                </div>
            </div>
            <Progress value={45} indicatorColor="bg-green-600" className="h-3 bg-green-200"/>
            <div className="flex flex-row justify-between text-green-600 text-[12px]">
                <p>45%</p>
                <p>Rating</p>
            </div>
            <p className="text-[12px] font-bold">UPCOMING EVENT</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[9px] font-bold">2024.05.27</p>
                <div className="flex flex-row gap-2 items-center text-[9px] text-gray-400">
                    <span>Physio,</span>
                    <span>Session,</span>
                    <span>Lamda Court,</span>
                    <span>Spintex</span>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-300 mt-2"></div>
          </div>
        </div>

      </section>
    </div>
  );
}
