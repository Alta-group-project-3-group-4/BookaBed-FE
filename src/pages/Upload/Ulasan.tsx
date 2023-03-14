import React from "react";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

import images from "../../assets/Hotel-Booking.svg";

const Ulasan = () => {
  return (
    <Layout>
      <Navbar2 />
      <div className="container mx-auto p-10">
        <div className="flex flex-row p-6">
          <div className="flex w-full md:w-7/12 lg:w-10/12">
            <p className="text-5xl font-semibold">Ulasan</p>
            <div className="flex flex-col justify-center">
              <div className="flex items-center m-5 p-6 gap-4 text-[16px] font-medium text-black space-x-8 mt-28">
                <p className="text-2xl -mt-28">Ulasan:</p>
                <textarea
                  className="textarea textarea-bordered w-96 h-36 rounded-lg bg-white text-black border-2 px-4 py-2 font-normal text-xl border-black"
                  placeholder="example: Tempat yang bagus, tuan rumah yang sangat membantu."
                ></textarea>
              </div>
              <div className="flex items-center m-5 p-6 gap-4  font-medium text-black space-x-7">
                <p className="text-2xl">Rating:</p>
                <div className="rating space-x-2">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#0E8388]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#0E8388]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#0E8388]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#0E8388]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#0E8388]"
                  />
                </div>
              </div>
              <div className="flex justify-end p-7 -mt-10">
                <Button
                  id="btn"
                  label="beri Ulasan"
                  className="rounded-xl w-2/6 bg-[#0E8388] px-6 py-2 text-[16px] font-medium capitalize tracking-wider text-white"
                />
              </div>
            </div>
          </div>
          <div className="flex mx-auto mt-12">
            <img src={images} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Ulasan;
