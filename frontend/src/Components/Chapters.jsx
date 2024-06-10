import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
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
                <div className="bg-[#ffc7c2] mb-2 w-fit px-5 py-2 rounded-xl cursor-pointer" onClick={() => document.getElementById('my_modal_1').showModal()}>
                    Create New Chapter
                </div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-white text-xl">
                        <div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Chapter Name: </p>
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
                                <p className="">Module Name: </p>
                                <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">MultiQuestion Module: </p>
                                <div className="flex items-center gap-5">
                                    <p>Yes</p>
                                    <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                    <p>NO</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Question Size: </p>
                                <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Total Question For Module: </p>
                                <div className="flex items-center">
                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                    <p>/85</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center">
                                <p className="">Upload Question (excel file only): </p>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
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
                                <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg mr-2">Add Chapter</button>
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
                                    <IoEyeOutline className="bg-[#ffc7c2] cursor-pointer p-1 text-2xl rounded-md" onClick={() => document.getElementById('my_modal_2').showModal()} />
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl bg-[#e4ccfe] text-xl">
                                            <div>
                                                <p>Chapter Name:</p>
                                                <p>Module Name:</p>
                                                <p>Section Name:</p>
                                                <p>Exam Name:</p>
                                                <p>Total Question for Module:</p>
                                                <p>
                                                    Total Question Uploaded: <button className="bg-[#ffc7c2] px-2 rounded-full" onClick={() => document.getElementById('my_modal_4').showModal()}>See Questions</button>
                                                    <dialog id="my_modal_4" className="modal">
                                                        <div className="modal-box w-full max-w-7xl bg-white text-xl">
                                                            <div>
                                                                <label className="input border-none bg-[#ffc7c2] mb-6 w-1/4 flex items-center gap-2">
                                                                    <input type="text" className="grow" placeholder="Search" />
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                                                </label>
                                                                <table className="table w-full ">
                                                                    <thead className="bg-[#ffc7c2]">
                                                                        <tr>
                                                                            <td className="p-3">Serial no.</td>
                                                                            <td>Question</td>
                                                                            <td>A</td>
                                                                            <td>B</td>
                                                                            <td>C</td>
                                                                            <td>D</td>
                                                                            <td>Answer</td>
                                                                            <td>Status</td>
                                                                            <td>Action</td>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="bg-white">
                                                                        <tr>
                                                                            <td className="px-3 py-1">1</td>
                                                                            <td>What is 5+6</td>
                                                                            <td>A</td>
                                                                            <td>B</td>
                                                                            <td>C</td>
                                                                            <td>D</td>
                                                                            <td>D</td>
                                                                            <td>Active</td>
                                                                            <RiDeleteBin2Line className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="px-3 py-1">2</td>
                                                                            <td>What is 5+6</td>
                                                                            <td>A</td>
                                                                            <td>B</td>
                                                                            <td>C</td>
                                                                            <td>C</td>
                                                                            <td>D</td>
                                                                            <td>Active</td>
                                                                            <RiDeleteBin2Line className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="px-3 py-1">3</td>
                                                                            <td>What is 1-8</td>
                                                                            <td>A</td>
                                                                            <td>B</td>
                                                                            <td>B</td>
                                                                            <td>C</td>
                                                                            <td>D</td>
                                                                            <td>Active</td>
                                                                            <RiDeleteBin2Line className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="modal-action">
                                                                <form method="dialog">
                                                                    <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg">Back</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </dialog>
                                                </p>
                                                <p>Status:</p>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg mr-2">Update</button>
                                                    <button className="bg-[#ffc7c2] py-3 px-5 rounded-lg">Cancel</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    <FaRegEdit className="bg-[#ffc7c2] cursor-pointer p-1 text-2xl rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()} />
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl bg-[#e4ccfe] text-xl">
                                            <div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Chapter Name: </p>
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
                                                    <p className="">Module Name: </p>
                                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-2/3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">MultiQuestion Module: </p>
                                                    <div className="flex items-center gap-5">
                                                        <p>Yes</p>
                                                        <input type="checkbox" className="toggle bg-[#ffc7c2]" checked />
                                                        <p>NO</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Question Size: </p>
                                                    <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Total Question For Module: </p>
                                                    <div className="flex items-center">
                                                        <input type="text" className="bg-[#d4fcd8] col-span-3 m-2 w-[50px]" />
                                                        <p>/85</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 items-center">
                                                    <p className="">Upload Question (excel file only): </p>
                                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
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
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td className="flex gap-2">
                                    <IoEyeOutline className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
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
                                    <IoEyeOutline className="bg-[#ffc7c2] p-1 text-2xl rounded-md" />
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