
const Navbar = () => {
    return (
        <div className="p-2 bg-[#ffe8a3] flex gap-3 items-center justify-end pr-12">
            <p>Change Password</p>
            <label className="avatar">
                <div className="rounded-full w-10 h-10 border-2 border-black">
                    <div>
                        <img src='' alt="" />
                    </div>
                </div>
            </label>
        </div>
    );
};

export default Navbar;