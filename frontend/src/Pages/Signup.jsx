import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const createUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const role = 'student';
        const password = form.password.value;
        const address = form.address.value;

        const newUser = { username, email, role, phone, password, address };
        fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.error);
                if (data.insertedId) {
                    alert("user created sucessfully!");
                    form.reset();
                    navigate('/login');
                } else {
                    alert("user can not be created!");
                }
            })
            .catch(error => {
                console.error('Error storing user data:', error);
            });
    }
    return (
        <div className="flex text-white h-[100vh]">
            <div className="p-48 bg-[url(logo.jpg)] flex items-center bg-cover w-full bg-center text-center">
                <div>
                    <h4 className="text-2xl font-semibold">Turn exam prep into a practice session for success.</h4>
                    <p>Effortless Practice, Exceptional Results</p>
                </div>
            </div>
            <div className="p-48 w-full bg-[#0d6e6e]">
                <h4 className="text-2xl font-semibold">Signup</h4>
                <p>Already have an account? <Link to={'/login'} className="text-[#8ccbff]">Sign in here..</Link></p>
                <form onSubmit={createUser} action="" className="pt-4">
                    <div>
                        <p>Username</p>
                        <input type="text" name="username" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div className="py-5">
                        <p>Mobile no.</p>
                        <input type="text" name="phone" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div>
                        <p>Email Id</p>
                        <input type="email" name="email" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div className="py-5">
                        <p>Password</p>
                        <input type="password" name="password" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div>
                        <p>Address</p>
                        <input type="text" name="address" className="p-2 mt-1 w-full rounded-full text-black bg-[#c9e8ff]" />
                    </div>
                    <div className="flex justify-between pt-5">
                        <div>
                            <input type="checkbox" name="" id="" className="mr-2 text-black" />
                            <span>Accept terms and conditions</span>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Signup" className="cursor-pointer p-2 mt-1 w-full rounded-full bg-[#c9e8ff] text-black font-semibold" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;