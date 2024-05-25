import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="flex text-white h-[100vh]">
            <div className="p-48 bg-[url(logo.jpg)] flex items-center bg-cover w-full bg-center text-center">
                <div>
                    <h4 className="text-2xl font-semibold">Turn exam prep into a practice session for success.</h4>
                    <p>Effortless Practice, Exceptional Results</p>
                </div>
            </div>
            <div className="p-48 w-full bg-[#0d6e6e]">
                <h4 className="text-2xl font-semibold">Sign In</h4>
                <p>Don't have an account? <Link to={'/signup'} className="text-[#8ccbff]">Get Started..</Link></p>
                <form action="" className="pt-4">
                    <div>
                        <p>Username</p>
                        <input type="text" name="username" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div className="py-5">
                        <p>Password</p>
                        <input type="password" name="username" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <input type="checkbox" name="" id="" className="mr-2 text-black" />
                            <span>Remember Me</span>
                        </div>
                        <div>
                            <Link className="text-[#8ccbff]">Forgot Password</Link>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Sign In" className="p-2 mt-1 w-full rounded-full bg-[#c9e8ff] text-black font-semibold" />
                    </div>
                    <div className="pt-4 text-center">
                        <p>Or Signup With</p>
                        <div className="flex justify-center gap-2 pt-4">
                            <FaGoogle className="bg-[#bde3ff] text-black text-4xl p-2 rounded-full" />
                            <FaFacebookF className="bg-[#bde3ff] text-black text-4xl p-2 rounded-full" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;