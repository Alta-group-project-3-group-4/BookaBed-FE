import React from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import Button from "../../components/Button";

const UpProfile = () => {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto p-11">
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
            <Input id="name" type="text" placeholder="example: Jhon Doe" />
          </div>
          <div className="flex items-center m-5 p-6 gap-4 text-[16px] font-medium text-black space-x-10 -mt-5">
            <p className="text-2xl">Email:</p>
            <Input
              id="name"
              type="text"
              placeholder="example: jhondoe@gmail.com"
            />
          </div>
          <div className="flex items-center m-5 p-6 gap-4  font-medium text-black space-x-4 -mt-5">
            <p className="text-2xl">Address:</p>
            <Input
              id="name"
              type="text"
              placeholder="example: indonesia, Jakarta Pusat"
            />
          </div>
          <div className="flex items-center m-5 p-6 gap-4 text-[16px] font-medium text-black space-x-8 -mt-3">
            <p className="text-2xl -mt-28">About:</p>
            <textarea
              className="textarea textarea-bordered w-6/12 md:w-5/12 sm:w-4/12 h-36 max-h-full rounded-lg bg-white text-black border-2 px-4 py-2 font-normal text-xl border-black"
              placeholder="example: saya seorang pengusaha"
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
      </div>
    </Layout>
  );
};

export default UpProfile;
