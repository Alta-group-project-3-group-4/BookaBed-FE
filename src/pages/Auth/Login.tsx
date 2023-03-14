import React from "react";
import Logo from "../../assets/LogoBookaBed.webp";
import signin from "../../assets/SignIn.webp";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className=" w-full h-screen bg-white  justify-around">
      <div className="text-color3 font-bold flex flex-row justify-center pt-12 gap-12">
        <h1 className="text-3xl self-center">BookaBed</h1>
        <img src={Logo} alt="logo" className=" w-16" />
      </div>
      <div className="flex flex-row items-center justify-center gap-10 h-[30rem]">
        <div>
          <img src={signin} alt="signin" className="w-[23rem]" />
        </div>

        <div className="text-color1 w-1/2 flex flex-col justify-center items-center">
          <div className=" bg-color4 flex flex-col  justify-center rounded-3xl w-[25rem] h-[21rem] ">
            <h1 className="font-bold text-2xl self-center pt-4">
              Sign In
            </h1>
            <form className="pl-8">
              <p>Email</p>
              <Input
                id="input-email"
                type="email"
                placeholder="Email"
                className="w-[20rem] bg-white rounded-lg h-10 pl-3  "
              />

              <p className="pt-4">Password</p>
              <Input
                id="input-Password"
                type="password"
                placeholder="Password"
                className="w-[20rem] bg-white rounded-lg h-10 pl-3"
              />
              <div className="pt-8">
                <Button
                  id="btn-masuk"
                  label="Sign In"
                  className="bg-color3 text-white w-[20rem] h-10 rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                />
              </div>
            </form>
          </div>
          <div className="font-bold flex gap-4 text-color1 pt-4">
            <p>Belum punya akun?</p>
            {/* <Link to="/register"> */}
            <p className="underline cursor-pointer">Sign Up</p>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
