import { FaRegEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiDeleteBin2Line } from "react-icons/ri";

const Chapters = () => {
    return (
        <div className="bg-[#bde3ff] h-[100vh]">
            <div className="flex justify-center">
                <div className="bg-[#ffc7c2] w-fit py-8 px-16 my-10 rounded-xl">
                    <p>Total Modules: 376</p>
                    <p>Total Questions: 376</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="bg-[#ffc7c2] mb-2 w-fit px-5 py-2 rounded-xl">
                    Create New Chapter
                </div>
                <div className="">
                    <table className="table w-full ">
                        <thead className="bg-[#ffc7c2]">
                            <tr>
                                <td className="p-3">Serial no.</td>
                                <td>Chapter Name</td>
                                <td>Module Name</td>
                                <td>Section Name</td>
                                <td>Exam Name</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="px-3 py-1">1</td>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td className="flex gap-2">
                                    <HiDotsHorizontal className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                    <FaRegEdit className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                    <RiDeleteBin2Line className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 py-1">2</td>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td className="flex gap-2">
                                    <HiDotsHorizontal className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                    <FaRegEdit className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                    <RiDeleteBin2Line className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 py-1">3</td>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td className="flex gap-2">
                                    <HiDotsHorizontal className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                    <FaRegEdit className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                    <RiDeleteBin2Line className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Chapters;