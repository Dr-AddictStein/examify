import { FaRegEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiDeleteBin2Line } from "react-icons/ri";

const Modules = () => {
    return (
        <div className="bg-[#bde3ff] h-[100vh]">
            <div className="flex justify-center">
                <div className="bg-[#ffc7c2] w-fit py-8 px-16 my-10 rounded-xl">
                    <p>Total Modules: 376</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="bg-[#ffc7c2] mb-2 w-fit px-5 py-2 rounded-xl cursor-pointer" onClick={() => document.getElementById('my_modal_1').showModal()}>
                    Create New Module
                </div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-white text-xl">
                        <div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Module Name: </p>
                                <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Exam Name: </p>
                                <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Section Name: </p>
                                <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Duration: </p>
                                <div className="flex items-center">
                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                    <p>Mins</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Module Mark: </p>
                                <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Total Questions: </p>
                                <div className="flex items-center">
                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                    <p>/85</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Randomize Chapter Questions: </p>
                                <div className="flex items-center gap-5">
                                    <p>Yes</p>
                                    <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                    <p>NO</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Module-wise Marking: </p>
                                <div className="flex items-center gap-5">
                                    <p>Yes</p>
                                    <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                    <p>NO</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Marking Per Question: </p>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-2">
                                        <p>+ve</p>
                                        <input type="text" className="bg-[#d4fcd8] col-span-4 m-2 w-[50px]" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p>-ve</p>
                                        <input type="text" className="bg-[#d4fcd8] col-span-4 m-2 w-[50px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Status: </p>
                                <div className="flex items-center gap-5">
                                    <p>Active</p>
                                    <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                    <p>Diactive</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg mr-2">Add Module</button>
                                <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <div className="">
                    <table className="table w-full ">
                        <thead className="bg-[#ffc7c2]">
                            <tr>
                                <td className="p-3">Serial no.</td>
                                <td>Module Name</td>
                                <td>Section Name</td>
                                <td>Exam Name</td>
                                <td>Chapter s Content</td>
                                <td>Total Questions</td>
                                <td>Time</td>
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
                                <td>12/16/2020</td>
                                <td className="flex gap-2">
                                    <FaRegEdit className="bg-[#ffc7c2] p-1 text-2xl rounded-md cursor-pointer" onClick={() => document.getElementById('my_modal_2').showModal()} />
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl bg-[#e4ccfe] text-xl">
                                            <div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Module Name: </p>
                                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Exam Name: </p>
                                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Section Name: </p>
                                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Duration: </p>
                                                    <div className="flex items-center">
                                                        <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                                        <p>Mins</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Module Mark: </p>
                                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Total Questions: </p>
                                                    <div className="flex items-center">
                                                        <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                                        <p>/85</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Randomize Chapter Questions: </p>
                                                    <div className="flex items-center gap-5">
                                                        <p>Yes</p>
                                                        <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                                        <p>NO</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Module-wise Marking: </p>
                                                    <div className="flex items-center gap-5">
                                                        <p>Yes</p>
                                                        <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                                        <p>NO</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Marking Per Question: </p>
                                                    <div className="flex items-center gap-5">
                                                        <div className="flex items-center gap-2">
                                                            <p>+ve</p>
                                                            <input type="text" className="bg-[#d4fcd8] col-span-4 m-2 w-[50px]" />
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <p>-ve</p>
                                                            <input type="text" className="bg-[#d4fcd8] col-span-4 m-2 w-[50px]" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Status: </p>
                                                    <div className="flex items-center gap-5">
                                                        <p>Active</p>
                                                        <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                                        <p>Diactive</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg mr-2">Update</button>
                                                    <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg">Cancel</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
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
                                <td>12/5/2020</td>
                                <td className="flex gap-2">
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
                                <td>12/5/2020</td>
                                <td className="flex gap-2">
                                    <FaRegEdit className="bg-[#ffc7c2] cursor-pointer p-1 text-2xl rounded-md" />
                                    <RiDeleteBin2Line className="bg-[#ffc7c2] cursor-pointer p-1 text-2xl rounded-md" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Modules;