import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import Logo from "../../assets/LogoBookaBed.webp";
import signup from "../../assets/SignUp.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
  const [name, setNama] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (name && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      email,
      password,
    };
  
    axios
      .post(
        "http://18.142.43.11:8080/auth/register",
        body
      )
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          title: "Berhasil Mendaftar",
          text: message,
          showCancelButton: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Gagal Mendaftar",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };
  
  return (
    <div className=" w-full h-screen bg-white  justify-around">
      <div className="text-color3 font-bold flex flex-row justify-center pt-12 gap-12">
        <Link to={"/"}>
          <h1 className="text-3xl self-center">BookaBed</h1>
        </Link>
        <img src={Logo} alt="logo" className=" w-16" />
      </div>
      <div className="flex flex-row items-center justify-center gap-10 h-[30rem] pt-16">
        <div>
          <img src={signup} alt="signUp" className="w-[23rem]" />
        </div>

        <div className="text-color1 w-1/2 flex flex-col justify-center items-center">
          <div className=" bg-color4 flex flex-col  justify-center rounded-3xl w-[25rem] h-[25rem] ">
            <h1 className="font-bold text-2xl self-center pt-4 pb-4">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit} className="pl-8">
              <p>Nama Lengkap</p>
              <Input
                id="input-nama"
                type="text"
                placeholder="Nama Lengkap"
                className="w-[20rem] bg-white rounded-lg h-10 pl-3  "
                onChange={(e) => setNama(e.target.value)}
              />
              <p className="pt-4">Email</p>
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
                onChange={(e) => setPass(e.target.value)}
              />
              <div className="pt-4">
                <Button
                  id="btn-masuk"
                  label="Sign Up"
                  type="submit"
                  className="bg-color3 text-white w-[20rem] h-10 rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                  loading={loading || disabled}
                />
              </div>
            </form>
          </div>
          <div className="font-bold flex gap-4 text-color1 pt-4">
            <p>Sudah punya akun?</p>
            <Link to="/login">
              <p className="underline cursor-pointer">Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
