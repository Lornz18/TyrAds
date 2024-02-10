import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import SideHeader from "./components/SideHeader/SideHeader";
import SideContent from "./components/SideContent/SideContent";
import Card from "./components/Cards/Card";
import BarChart from "./components/Charts/BarChart/BarChart";
import LineChart from "./components/Charts/LineChart/LineChart"
import Dropdown from "./components/Dropdown/Dropdown";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <>
    <SideHeader></SideHeader>
    <div className="flex items-center justify-between">
      <div className="bg-back w-full h-screen ml-[4.1rem] p-[2rem]">
        <div className="flex items-center justify-between w-full mb-[2rem]">
          <div>
            <h1 className="text-[2rem] font-semibold">Hello,Jhon .D</h1>
            <h6>View and Control your finances here!</h6>
          </div>
          <FontAwesomeIcon className="bg-white p-3 rounded-full text-[1.5rem]" icon={faSearch}></FontAwesomeIcon>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Card>
              <div className="w-full gap-[1rem] flex items-center justify-between">
                <div>
                  <div className="border-b-[.1rem] py-2">
                    <h6>Balance statictics</h6>
                    <h1 className="text-[2rem] font-semibold">$564</h1>
                    <div className="flex items-center gap-2">
                      <Image src={"/coin.png"} alt="" width={50} height={50}></Image>
                      <h6 className="w-full max-w-[5rem]">Your total balance</h6>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-[10rem]">
                        <LineChart></LineChart>
                      </div>
                      <h6><FontAwesomeIcon className="mr-1" icon={faCircleArrowUp}></FontAwesomeIcon>6%</h6>
                    </div>
                    <p className="text-gray-400 w-full max-w-[10rem] my-2">Always see your earnings updates</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end justify-end">
                    <Dropdown></Dropdown>
                  </div>
                  <BarChart></BarChart>
                </div>
              </div>
            </Card>
            <div className="flex flex-col justify-between relative w-full max-w-[25rem] border-[.1rem] rounded-lg shadow-md p-5 bg-primary">
              
              <div className="flex items-center justify-between text-[2rem] text-white">
                <h1>S.</h1>
                <FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon>
              </div>
              {/* <Image className="mx-auto w-[60%]" src={'/hands.png'} alt="" width={100} height={100}></Image> */}
              <div className="flex items-end justify-between text-white">
                <div>
                  <p>**** 9838</p>
                  <p>Jhon Demon</p>
                </div>
                <p>08/12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideContent></SideContent>
    </div>
    
    </>
  );
}
