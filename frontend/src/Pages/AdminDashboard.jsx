import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DashboardA from "../Components/DashboardA";
import Exam from "../Components/Exam";
import Sections from "../Components/Sections";
import Modules from "../Components/Modules";
import Chapters from "../Components/Chapters";
import Users from "../Components/Users";
import Payment from "../Components/Payment";
import Coupons from "../Components/Coupons";
import Attempts from "../Components/Attempts";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-1 pb-20 lg:pb-0 lg:hidden block">
                <div className="flex flex-col fixed items-center bg-[#fcd19d] z-[1] w-full p-4">
                    <TabList className="flex flex-row justify-center gap-x-12 flex-wrap space-y-3">
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 0 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(0)}
                        >
                            {/* <AiOutlineHome className="text-xl absolute" /> */}
                            <span className="pl-7">Dashboard</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 1 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(1)}
                        >
                            {/* <BiMessageDetail className="text-xl absolute" /> */}
                            <span className="pl-7">Exam</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 2 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(2)}
                        >
                            {/* <AiOutlineProfile className="text-xl absolute" /> */}
                            <span className="pl-7">Section</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 3 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(3)}
                        >
                            {/* <BsFilePerson className="text-xl absolute" /> */}
                            <span className="pl-7">Module</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 4 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(4)}
                        >
                            {/* <FaHistory className="text-xl absolute" /> */}
                            <span className="pl-7">Chapter</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 5 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(5)}
                        >
                            {/* <MdWorkOutline className="text-xl absolute" /> */}
                            <span className="pl-7">Users</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 6 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(6)}
                        >
                            {/* <BsPersonVcard className="text-xl absolute" /> */}
                            <span className="pl-7">Payment</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 7 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(7)}
                        >
                            {/* <BsPersonVcard className="text-xl absolute" /> */}
                            <span className="pl-7">Coupon</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 8 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(8)}
                        >
                            {/* <BsPersonVcard className="text-xl absolute" /> */}
                            <span className="pl-7">Attempts</span>
                        </Tab>
                        {/* <div
              className="font-semibold cursor-pointer flex gap-2 items-center text-red-500"
            >
              <MdLogout className="text-xl absolute" />
              <span className="pl-7">Logout</span>
            </div> */}
                    </TabList>
                </div>
            </div>
            <div className="col-span-2 hidden lg:block">
                <div className="flex flex-col bg-[#fcd19d] p-4 h-[100vh]">
                    <TabList className="flex flex-col space-y-3">
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 0 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(0)}
                        >
                            {/* <AiOutlineHome className="text-xl absolute" /> */}
                            <span className="pl-7">Dashboard</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 1 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(1)}
                        >
                            {/* <BiMessageDetail className="text-xl absolute" /> */}
                            <span className="pl-7">Exam</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 2 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(2)}
                        >
                            {/* <AiOutlineProfile className="text-xl absolute" /> */}
                            <span className="pl-7">Section</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 3 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(3)}
                        >
                            {/* <BsFilePerson className="text-xl absolute" /> */}
                            <span className="pl-7">Module</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 4 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(4)}
                        >
                            {/* <FaHistory className="text-xl absolute" /> */}
                            <span className="pl-7">Chapter</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 5 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(5)}
                        >
                            {/* <MdWorkOutline className="text-xl absolute" /> */}
                            <span className="pl-7">Users</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 6 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(6)}
                        >
                            {/* <BsPersonVcard className="text-xl absolute" /> */}
                            <span className="pl-7">Payment</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 7 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(7)}
                        >
                            {/* <BsPersonVcard className="text-xl absolute" /> */}
                            <span className="pl-7">Coupon</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 8 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(8)}
                        >
                            {/* <BsPersonVcard className="text-xl absolute" /> */}
                            <span className="pl-7">Attempts</span>
                        </Tab>
                        {/* <div
              className="font-semibold cursor-pointer flex gap-2 items-center text-red-500"
            >
              <MdLogout className="text-xl absolute" />
              <span className="pl-7">Logout</span>
            </div> */}
                    </TabList>
                </div>
            </div>
            <div className="lg:col-span-10 col-span-12">
                <Tabs selectedIndex={activeTab}>
                    <TabPanel>
                        <DashboardA />
                    </TabPanel>
                    <TabPanel>
                        <Exam />
                    </TabPanel>
                    <TabPanel>
                        <Sections />
                    </TabPanel>
                    <TabPanel>
                        <Modules />
                    </TabPanel>
                    <TabPanel>
                        <Chapters />
                    </TabPanel>
                    <TabPanel>
                        <Users />
                    </TabPanel>
                    <TabPanel>
                        <Payment />
                    </TabPanel>
                    <TabPanel>
                        <Coupons />
                    </TabPanel>
                    <TabPanel>
                        <Attempts />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AdminDashboard;