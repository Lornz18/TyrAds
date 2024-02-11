import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCircleArrowUp, faFaceSmile, faPaperclip, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import SideHeader from "./components/SideHeader/SideHeader";
import SideContent from "./components/SideContent/SideContent";
import CardMid from "./components/Cards/CardMid";
import BarChart from "./components/Charts/BarChart/BarChart";
import LineChart from "./components/Charts/LineChart/LineChart"
import Dropdown from "./components/Dropdown/Dropdown";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import Add from "./components/Buttons/Add/Add"
import Checkbox from "./components/Checkbox/Checkbox";
import Primary from "./components/Buttons/Primary/Primary";
import Info from "./components/Info/Info";
import DoughnutChart from "./components/Charts/DoughnutChart/DoughnutChart";


export default function Home() {
  return (
    <>
    <SideHeader></SideHeader>
    <div className="flex items-center justify-between">
      <div className="bg-back w-full h-screen ml-[4.1rem] p-[1rem]">
        <div className="flex items-center justify-between w-full mb-1">
          <div>
            <h1 className="text-[2rem] font-semibold">Hello,Jhon .D</h1>
            <h6>View and Control your finances here!</h6>
          </div>
          <FontAwesomeIcon className="bg-white p-3 rounded-full text-[1.5rem]" icon={faSearch}></FontAwesomeIcon>
        </div>
        <div>
          <div className="flex items-start justify-between gap-2">
            <CardMid wd={"50%"}>
              <div className=" gap-[1rem] flex items-center justify-between p-5">
                <div>
                  <div className="border-b-[.1rem] py-2">
                    <h6>Balance statictics</h6>
                    <h1 className="text-[1.5rem] font-semibold">$564</h1>
                    <div className="flex items-center gap-2">
                      <Image src={"/coin.png"} alt="" width={50} height={50}></Image>
                      <h6 className="w-full max-w-[5rem]">Your total balance</h6>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-[5rem]">
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
            </CardMid>
            <CardMid wd={"50%"}>
              <div className="bg-primary rounded-lg p-5 h-full">
                <div className="flex items-center justify-between text-[2rem] text-white">
                  <h1>S.</h1>
                  <FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon>
                </div>
                <Image className="mx-auto w-full max-w-[12rem]" src={'/credit.svg'} alt="" width={200} height={300}></Image>
                <div className="flex items-end justify-between text-white">
                  <div>
                    <p>**** 9838</p>
                    <p>Jhon Demon</p>
                  </div>
                  <p>08/12</p>
                </div>
              </div>
            </CardMid>
            
          </div>
        </div>
        <div className="my-2">
          <CardMid wd="100%">
            <div className="flex items-start justify-between p-5">
              <div className="w-[50%] border-r-[.15rem] pr-[5rem]">
                <h4>List of items to buy</h4>
                <div className="flex items-center justify-between w-fit gap-[5rem] my-[1rem]">
                  <div>
                    <h1 className="text-[1.5rem] font-semibold">02:00</h1>
                    <p>Sat August 12</p>
                  </div>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  <div>
                    <h1 className="text-[1.5rem] font-semibold">02:00</h1>
                    <p>Sat August 12</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p><span>0/3</span> Shopping list</p>
                  <Add>Add an Item</Add>
                </div>
                <div className="my-[1rem] grid grid-cols-2 gap-[1rem]">
                  <Checkbox>Macbook</Checkbox>
                  <Checkbox>Bicycle</Checkbox>
                  <Checkbox>Motorcycle</Checkbox>
                  <Checkbox>Iphone 14 pro max</Checkbox>
                </div>
              </div>
              <div className="w-[50%] pl-[5rem]">
                <h1 className="text-[1.5rem]">Esther Howard</h1>
                <div>
                  <div className="flex items-center justify-end gap-2">
                    <p className="bg-primary p-2 rounded-lg rounded-br-none text-white">Are you ready?</p>
                    <Image src={"/userm.png"} alt="" width={50} height={200}></Image>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-start gap-2">
                    <Image src={"/userf.png"} alt="" width={50} height={200}></Image>
                    <p className="bg-back p-2 rounded-lg rounded-bl-none ">I have prepared everyting</p>
                  </div>
                </div>
                <div className="bg-back p-2 rounded-lg my-2 h-full min-h-[8rem] flex flex-col justify-between">
                  <input className="outline-none bg-transparent " type="text" placeholder="Type your message"/>
                  <div className="flex items-center justify-between">
                    <div className="text-[1.5rem] flex items-center gap-2">
                      <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                    </div>
                    <div className="w-fit">
                      <Primary py="2" px="3" size="">Send Now</Primary>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardMid>
        </div>
        <div className="flex items-center justify-between gap-2">
          <CardMid wd="70%">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h4 className="text-[1.1rem]">Last transactions</h4>
                <div className="flex items-center gap-5">
                  <a href="" className="underline">Newest</a>
                  <a href="">Oldest</a>
                </div>
              </div>
              <div className="my-2 h-full max-h-[10rem] overflow-hidden overflow-y-scroll snap-y">
                <div className="flex items-center justify-between border-t-[.1rem] py-2">
                  <div className="flex items-center gap-5">
                    <Image src="/userf.png" alt="" width={50} height={50}></Image>
                    <div>
                      <h6 className="font-semibold">Bessie Cooper</h6>
                      <p className="text-gray-400">02 july, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 ">
                    <h4>-$3,000</h4>
                    <Info></Info>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t-[.1rem] py-2">
                  <div className="flex items-center gap-5">
                    <Image src="/userm.png" alt="" width={50} height={50}></Image>
                    <div>
                      <h6 className="font-semibold">Bessie Cooper</h6>
                      <p className="text-gray-400">02 july, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 ">
                    <h4>-$3,000</h4>
                    <Info></Info>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t-[.1rem] py-2">
                  <div className="flex items-center gap-5">
                    <Image src="/userf.png" alt="" width={50} height={50}></Image>
                    <div>
                      <h6 className="font-semibold">Bessie Cooper</h6>
                      <p className="text-gray-400">02 july, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 ">
                    <h4>-$3,000</h4>
                    <Info></Info>
                  </div>
                </div>
              </div>
            </div>
          </CardMid>
          <CardMid wd="30%">
            <div className="w-full p-5">
              <div className="flex items-center justify-between">
                <h4 className="">Analytics</h4>
                <Info></Info>
              </div>
              <div className="w-[9rem] mx-auto">
                <DoughnutChart></DoughnutChart>
              </div>
              <div className="flex items-center justify-center gap-[1rem] my-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p>Done</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FBA419] rounded-full"></div>
                  <p>In progress</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#EC624E] rounded-full"></div>
                  <p>To do</p>
                </div>
              </div>
              
            </div>
          </CardMid>
        </div>
      </div>
      <SideContent></SideContent>
    </div>
    
    </>
  );
}
