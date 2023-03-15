import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ProfileType } from "../../types/Profile";
import axios from "axios";

import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";

import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";
import Input from "../../components/Input";
import Button from "../../components/Button";

const UpProfile = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const { user_id } = useParams();

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  const [submit, setSubmit] = useState<ProfileType>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    upProfile();
  }, []);

  useEffect(() => {
    if (name && email && about  &&  address) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, email, about, address]);

  function upProfile() {
    setLoading(true);
    axios
      .get(`http://18.142.43.11:8080/users/5`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((response) => {
        const { name, email, about, address } = response.data;

        setName(name);
        setEmail(email);
        setAbout(about);
        setAddress(address);
      })
      .catch((error) => {
        alert(error.response.toString());
      })
      .finally(() => setLoading(false));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof submit;
    for (key in submit) {
      formData.append(key, submit[key]);
    }

    axios
      .put(`http://18.142.43.11:8080/users/5`, formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((response) => {
        const { message } = response.data;
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Succesfully update data profile",
          showCancelButton: false,
        });
        navigate("/profile/:id_profile")
        setSubmit({});
      })
      .catch((error) => {
        const { data } = error.data;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Failed update data profile",
          showCancelButton: false,
        });
      })
      .finally(() => upProfile())
      .finally(() => setLoading(false));
  };

  const handleChange = (value: string, key: keyof typeof submit) => {
    let temp = { ...submit };
    temp[key] = value;
    setSubmit(temp);
  };

  return (
    <Layout>
      <Navbar2 />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="container mx-auto p-11"
      >
        <div className="flex-1 p-6">
          <p className="text-5xl text-black font-semibold">Update Profile</p>
        </div>
        <div className="flex justify-end">
          <div className="mt-5 h-full w-4/12 md:w-4/12 sm:w-4/12 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col -mt-40">
          <div className="flex items-center m-5 p-6 gap-4 text-[16px] font-medium text-black space-x-8">
            <p className="text-2xl">Name:</p>
            <Input
              id="name"
              type="text"
              placeholder="example: Jhon Doe"
              defaultValue={name}
              onChange={(e) => handleChange(e.target.value, "name")}
            />
          </div>
          <div className="flex items-center m-5 p-6 gap-4 text-[16px] font-medium text-black space-x-10 -mt-5">
            <p className="text-2xl">Email:</p>
            <Input
              id="name"
              type="text"
              placeholder="example: jhondoe@gmail.com"
              defaultValue={email}
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>
          <div className="flex items-center m-5 p-6 gap-4  font-medium text-black space-x-2 -mt-5">
            <p className="text-2xl">Address:</p>
            <Input
              id="name"
              type="text"
              placeholder="example: indonesia, Jakarta Pusat"
              defaultValue={address}
              onChange={(e) => handleChange(e.target.value, "address")}
            />
          </div>
          <div className="flex items-center m-5 p-6 gap-4 text-[16px] font-medium text-black space-x-8 -mt-3">
            <p className="text-2xl -mt-28">About:</p>
            <textarea
              className="textarea textarea-bordered w-6/12 md:w-5/12 sm:w-4/12 h-36 max-h-full rounded-lg bg-white text-black border-2 px-4 py-2 font-normal text-xl border-black"
              placeholder="example: saya seorang pengusaha"
              defaultValue={about}
              onChange={(e) => handleChange(e.target.value, "about")}
            ></textarea>
          </div>
          <div className="flex justify-center -mt-4">
            <Button
              id="btn"
              label="Update Profile"
              className="rounded-xl lg:w-2/12 md:w-6/12 sm:w-6/12 bg-[#0E8388] px-6 py-2 text-[16px] font-medium capitalize tracking-wider text-white"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default UpProfile;
