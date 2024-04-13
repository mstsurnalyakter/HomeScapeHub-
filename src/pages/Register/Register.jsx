import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>HomeScapeHub | Register</title>
      </Helmet>
      <div className="min-h-[700px] relative grid grid-cols-1 md:grid-cols-2 shadow-2xl bg-base-100  lg:w-4/5 rounded-xl">
        <div className="bg-center min-h-[400px] lg:min-h-[700px]  bg-cover bg-no-repeat rounded-l-xl object-cover bg-[url(https://i.ibb.co/25SzcyT/register.jpg)]">
          <h2 className="mt-3 md:mt-20 text-center font-bold text-4xl">
            Welcome to <br />
            HomeScapeHub
          </h2>
        </div>
        <div className="">
          <div className="shrink-0 w-full ">
            <form className="card-body">
              <h3 className="text-black text-2xl font-medium">
                Create an account
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  className="absolute text-xl top-14 right-2"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <LuEye /> : <LuEyeOff />}
                </button>
              </div>
              <div className="form-control flex items-center flex-row gap-2">
                <input type="checkbox" className="input-bordered" required />
                <label className="label">
                  <span className="label-text">
                    I agree with{" "}
                    <Link className="underline text-[#0073e1]">
                      terms & conditions
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-1">
                <button className="btn bg-[#0073e1] hover:bg-[#0073e1] text-white">
                  Register
                </button>
              </div>
            </form>

            <p className=" mb-6 -mt-3 ml-8">
              <span>Already have an account. Please </span>
              <Link className="underline text-[#0073e1]" to={"/register"}>
                {" "}
                Login Here!
              </Link>
            </p>

            <div className="divider px-6 -my-3">OR</div>

            <div className="card-body space-y-1">
              <button className="btn text-lg">
                <FcGoogle />
                Register with Google
              </button>
              <button className="btn bg-[#00ACED] hover:bg-[#00ACED] text-lg text-white">
                <BsTwitter />
                Register with Twitter
              </button>
              <button className="btn text-lg text-white bg-[#c04ddd] hover:bg-[#c04ddd]">
                <FaGithub className="text-[bg-[#77228C]]" />
                Register with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
