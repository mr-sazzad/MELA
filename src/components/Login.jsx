import React from "react";
import login from "../assets/login.png";

const Login = () => {
  return (
    <div className="flex justify-between items-center px-5">
      <div className="flex flex-col justify-center items-start mt-10 flex-1">
        <div>
          <p className="px-2 py-1 inline-flex bg-gradient-to-r from-[#DAF2F2] via-slate-50/60 to-[#DAF2F2] rounded-[5px] text-slate-700">
            🛑 <span className="font-semibold pr-1">Login </span> if You have an
            account or <span className="font-semibold px-1">Register</span> now
          </p>
        </div>
        <img src={login} alt="login image" />
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <div>
          <p className="text-3xl font-semibold text-slate-700 text-center mb-5">
            LOGIN PLEASE
          </p>
        </div>
        <div className="flex flex-col gap-5 w-8/12">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-[250px] border border-[#cbf2f2] px-5 py-2 outline-none rounded-md"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="min-w-[250px] border border-[#cbf2f2] px-5 py-2 outline-none rounded-md"
          />
          <input
            type="submit"
            value="Login"
            className="min-w-[250px] border bg-[#DAF2F2] hover:bg-[#cbf2f2] px-5 py-2 outline-none rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
