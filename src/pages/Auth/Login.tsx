import React from "react";
import Layout from "../../components/Layout";
import Logo from "../../assets/LogoBookaBed.webp";
import signin from "../../assets/SignIn.webp";
const Login = () => {
  return (
    <Layout>
      <div className="text-color3 font-bold flex flex-row justify-center pt-12 gap-12">
        <h1 className="text-3xl self-center">BookaBed</h1>
        <img src={Logo} alt="logo" className=" w-16" />
      </div>
      <div className="flex flex-row pt-">
        <img src={signin} alt="signin" className="w-[23rem]" />
        <div>lalala</div>
      </div>
    </Layout>
  );
};

export default Login;
