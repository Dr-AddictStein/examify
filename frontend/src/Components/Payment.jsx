
const Payment = () => {
    return (
        <div className="bg-[#bde3ff] h-[100vh]">
            <div className="flex justify-center">
                <div className="bg-[#ffc7c2] w-fit py-8 px-16 my-10 rounded-xl">
                    <p>Total Modules: 376</p>
                    <input type="date" className="mt-2" name="" id="" />
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="">
                    <table className="table w-full ">
                        <thead className="bg-[#ffc7c2]">
                            <tr>
                                <td className="p-3">Serial no.</td>
                                <td>User Name</td>
                                <td>Payment</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="px-3 py-1">1</td>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                            </tr>
                            <tr>
                                <td className="px-3 py-1">2</td>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                            </tr>
                            <tr>
                                <td className="px-3 py-1">3</td>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Payment;