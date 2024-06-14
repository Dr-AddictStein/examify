import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const UserDashboard = () => {
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
                            <span className="pl-7">Home</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 1 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(1)}
                        >
                            {/* <BiMessageDetail className="text-xl absolute" /> */}
                            <span className="pl-7">Exams</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 2 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(2)}
                        >
                            {/* <AiOutlineProfile className="text-xl absolute" /> */}
                            <span className="pl-7">Performance</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 3 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(3)}
                        >
                            {/* <BsFilePerson className="text-xl absolute" /> */}
                            <span className="pl-7">Wallet</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 4 ? "text-[#1d9cb5]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(4)}
                        >
                            {/* <FaHistory className="text-xl absolute" /> */}
                            <span className="pl-7">Profile</span>
                        </Tab>

                        <div
                            className="font-semibold cursor-pointer flex gap-2 items-center text-red-500"
                        >
                            {/* <MdLogout className="text-xl absolute" /> */}
                            <span className="pl-7">Logout</span>
                        </div>
                    </TabList>
                </div>
            </div>
            <div className="col-span-2 hidden lg:block">
                <div className="flex flex-col bg-[#c7ffff] p-4 h-[100vh]">
                    <TabList className="flex flex-col space-y-3">
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 0 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(0)}
                        >
                            {/* <AiOutlineHome className="text-xl absolute" /> */}
                            <span className="pl-7">Home</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 1 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(1)}
                        >
                            {/* <BiMessageDetail className="text-xl absolute" /> */}
                            <span className="pl-7">Exams</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 2 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(2)}
                        >
                            {/* <AiOutlineProfile className="text-xl absolute" /> */}
                            <span className="pl-7">Performance</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 3 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(3)}
                        >
                            {/* <BsFilePerson className="text-xl absolute" /> */}
                            <span className="pl-7">Wallet</span>
                        </Tab>
                        <Tab
                            className={`font-semibold cursor-pointer flex gap-2 items-center ${activeTab === 4 ? "text-[#0d6e6e]" : "text-black"
                                }`}
                            onClick={() => setActiveTab(4)}
                        >
                            {/* <FaHistory className="text-xl absolute" /> */}
                            <span className="pl-7">Profile</span>
                        </Tab>
                        <div
                            className="font-semibold cursor-pointer flex gap-2 items-center text-red-500"
                        >
                            {/* <MdLogout className="text-xl absolute" /> */}
                            <span className="pl-7">Logout</span>
                        </div>
                    </TabList>
                </div>
            </div>
            <div className="lg:col-span-10 col-span-12">
                <Tabs selectedIndex={activeTab}>
                    <TabPanel>
                        1
                    </TabPanel>
                    <TabPanel>
                        2
                    </TabPanel>
                    <TabPanel>
                        3
                    </TabPanel>
                    <TabPanel>
                        4
                    </TabPanel>
                    <TabPanel>
                        5
                    </TabPanel>
                    <TabPanel>
                        6
                    </TabPanel>
                    <TabPanel>
                        1
                    </TabPanel>
                    <TabPanel>
                        7
                    </TabPanel>
                    <TabPanel>
                        8
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default UserDashboard;