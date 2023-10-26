import React from "react";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="z-10 flex justify-center self-center">
      <div className="w-100 mx-auto rounded-2xl bg-white p-12 ">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Daftar</h3>
        </div>
        <div className="mb-10 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium tracking-wide text-gray-700">
              Username
            </label>
            <input
              className=" w-full rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
              type=""
              placeholder="testusername"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium tracking-wide text-gray-700">
              Email
            </label>
            <input
              className=" w-full rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
              Password
            </label>
            <input
              className="w-full content-center rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
              type=""
              placeholder="Enter your password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="mt-9 flex w-full cursor-pointer justify-center  rounded-full bg-[#2CC6F6] p-3  font-semibold tracking-wide text-gray-100  shadow-lg transition duration-500 ease-in hover:bg-green-500"
            >
              Sign in
            </button>
          </div>
          <div className="pt-5 text-center text-xs text-gray-400">
            <span>
              Sudah Punya Akun ?, silahkan
              <Link to="/auth/signIn">
                <span className="text-green text-green-500"> login</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;