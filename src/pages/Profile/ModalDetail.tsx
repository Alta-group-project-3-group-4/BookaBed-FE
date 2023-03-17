import React from "react";

import Card from "../../components/Card";
import Button from "../../components/Button";

import images from "../../assets/images/fotoni.png";

const ModalDetail = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="card card-side bg-white">
          <figure className="-mt-32">
            <img src={images}  className="rounded-xl"/>
          </figure>
          <div className="card-body">
            <p className="card-title p-6">Nama Tempat</p>
            <p className="p-6 -mt-8">$132 / Night</p>
            <div className="mt-10 p-6">
              <p className="font-semibold">Tambahkan Foto Lainnya</p>
              <div className="flex -mt-4">
                <div className="mt-5 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
                <div className="flex justify-start items-center mt-5">
                  <Button
                    id="btn"
                    label="tambahkan foto"
                    className="rounded-xl h-2/6 bg-[#0E8388] px-6 py-2 text-[16px] font-medium capitalize tracking-wider text-white"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
