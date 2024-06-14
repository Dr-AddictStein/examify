
const Otp = () => {
    return (
        <div className="flex text-white h-[100vh]">
            <div className="p-48 bg-[url(logo.jpg)] flex items-center bg-cover w-full bg-center text-center">
                <div>
                    <h4 className="text-2xl font-semibold">Turn exam prep into a practice session for success.</h4>
                    <p>Effortless Practice, Exceptional Results</p>
                </div>
            </div>
            <div className="p-48 w-full bg-[#0d6e6e]">
                <h4 className="text-2xl font-semibold">Verify OTP</h4>
                <form action="" className="pt-4">
                    <div>
                        <input type="text" name="username" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div>
                        <input type="submit" value="Verify" className="p-2 mt-10 w-full rounded-full bg-[#c9e8ff] text-black font-semibold" />
                    </div>
                    <div className="pt-4 text-right">
                        <p>Resend OTP</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Otp;