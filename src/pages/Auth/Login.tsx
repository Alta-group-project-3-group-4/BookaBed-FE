import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import withReactContent from "sweetalert2-react-content";

import { handleAuth } from "../../utils/redux/reducer/reducer";
import Logo from "../../assets/LogoBookaBed.webp";
import signin from "../../assets/SignIn.webp";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Swal from "../../utils/Swal";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies([
  "token",
  "id",
  "email",
  "name",]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post(
        `http://18.142.43.11:8080/auth/login`,
        body
      )
      .then((res) => {
        const { message, token, data, id, } = res.data;
        setCookie("token", data.token, { path: "/" });
        dispatch(handleAuth(true));
        MySwal.fire({
          icon: "success",
          title: "Berhasil Login",
          text: message,
          showCancelButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: "Gagal Login",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

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
            <form 
            onSubmit={(e) => handleSubmit(e)}
            className="pl-8">
              <p>Email</p>
              <Input
                id="input-email"
                type="email"
                placeholder="Email"
                className="w-[20rem] bg-white rounded-lg h-10 pl-3  "
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className="pt-4">Password</p>
              <Input
                id="input-Password"
                type="password"
                placeholder="Password"
                className="w-[20rem] bg-white rounded-lg h-10 pl-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="pt-8">
                <Button
                  id="btn-masuk"
                  label="Sign In"
                  className="bg-color3 text-white w-[20rem] h-10 rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                  loading={loading || disabled}
                />
              </div>
            </form>
          </div>
          <div className="font-bold flex gap-4 text-color1 pt-4">
            <p>Belum punya akun?</p>
            <Link to="/register">
              <p className="underline cursor-pointer">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
