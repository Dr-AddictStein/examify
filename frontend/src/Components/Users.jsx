import { FaRegEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiDeleteBin2Line } from "react-icons/ri";

const Users = () => {
    return (
        <div className="bg-[#bde3ff] h-[100vh]">
            <div className="flex justify-center">
                <div className="bg-[#ffc7c2] w-fit py-8 px-16 my-10 rounded-xl">
                    <p>Total Users: 376</p>
                    <p>Users Added Last Month: 376</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="">
                    <table className="table w-full ">
                        <thead className="bg-[#ffc7c2]">
                            <tr>
                                <td className="p-3">Serial no.</td>
                                <td>User Name</td>
                                <td>Exam Opted</td>
                                <td>Mobile Number</td>
                                <td>Total Payment</td>
                                <td>No. of exam opted</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="px-3 py-1">1</td>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
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
                                <td>Zemlak, Daniel and Leannon</td>
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
                                <td>Zemlak, Daniel and Leannon</td>
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

export default Users;