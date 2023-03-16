import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios, { AxiosRequestConfig } from "axios";

import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import { RoomsType } from "../../types/Room";
import { ProfileType } from "../../types/Profile";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";

const UploadRumah = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [images, setImages] = useState<any>();
  // const [file, setFile] = useState<File | undefined>(undefined);
  const [clear, setClear] = useState<string>("");

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  useEffect(() => {
    if (name && price && deskripsi && images) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, price, deskripsi, images]);

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price?.toString() || "");
    formData.append("deskripsi", deskripsi);
    for (let i = 0; i < images.length; i++) {
      formData.append(`images`, images[i]);
    }

    const body = {
      name,
      price,
      deskripsi,
    };
    axios
      .post(`http://18.142.43.11:8080/homestay`, formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((response) => {
        const { message } = response.data;
        setClear(message);
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Success Upload Homestay",
          showCancelButton: false,
        });
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
      })
      .catch((error) => {
        const { data } = error.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Failed Upload Homestay",
        });
      })
      .finally(() => setLoading(false));
  };

  // const handleUploadFile = async (file: any) => {
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   const config: AxiosRequestConfig = {
  //     headers: {
  //       'Content-Type' : 'multipart/form-data'
  //     }
  //   };

  //   try {
  //     const response = await axios.post(`https://app.swaggerhub.com/apis-docs/AirBnBProject/AirBnB/1.0.0#/images`, formData, config);
  //     setFile(response.data);
  //     console.log("datas", response.data);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files) {
  //     setFile(event.target.files[0]);
  //   }
  // };

  const preventChar = (e: React.KeyboardEvent) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  return (
    <Layout>
      <Navbar2 />
      <form
        onSubmit={(e) => handleUpload(e)}
        className="container mx-auto p-11"
      >
        <div className="flex-1 p-6">
          <p className="text-2xl text-black font-semibold">Upload Rumah</p>
        </div>
        <div className="flex justify-end">
          <div className="mt-5 h-full w-4/12 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
              <form className="flex text-sm text-gray-600">
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
                    onChange={(e) => {
                      if (!e.currentTarget.files) return;
                      setImages(e.target.files);
                    }}
                    accept="image/jpg, image/jpeg, image/png"
                    multiple
                    min={1}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </form>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col -mt-40">
          <div className="flex items-center m-5 p-6 gap-4 text-[16px] font-medium text-black space-x-8">
            <p className="text-xl">Title:</p>
            <Input
              id="name"
              type="text"
              placeholder="example: Jhon Doe"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[25rem] h-12 border-2 border-black rounded-lg pl-3"
            />
          </div>
          <div className="flex items-center pl-7 gap-4 text-[16px] font-medium text-black space-x-10">
            <p className="text-xl">Price:</p>
            <div
              className="flex items-center gap-4
            "
            >
              <Input
                id="harga"
                type="number"
                placeholder="example: 10000"
                className="w-[15rem] h-12 border-2 border-black rounded-lg pl-3"
                onKeyDown={preventChar}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
              <p>/Night</p>
            </div>
          </div>
          {/* <div className="flex items-center m-4 py-6 gap-4  font-medium text-black space-x-4">
            <p className="text-xl">Location:</p>
            <Input
              id="alamat"
              type="text"
              placeholder="example: indonesia, Jakarta Pusat"
              className="w-[25rem] h-12 border-2 border-black rounded-lg pl-3"
            />
          </div> */}
          <div className="flex items-center ml-5 pl-1 gap-4 text-[16px] font-medium text-black space-x-8">
            <p className="text-xl">About:</p>
            <textarea
              className="textarea textarea-bordered w-6/12 h-32 max-h-full rounded-lg bg-white text-black border-2 px-4 py-2 font-normal text-xl border-black"
              placeholder="example: saya seorang pengusaha"
              defaultValue={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div className="flex justify-center">
            <Button
              id="btn"
              label="Upload Rumah"
              className="bg-color3 w-[15rem] h-10 rounded-lg text-white font-bold"
              // loading={loading || disable}
            />
          </div>
        </div>
      </form>
      <Footer />
    </Layout>
  );
};

export default UploadRumah;
