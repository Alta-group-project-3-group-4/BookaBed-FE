import React, { useState } from "react";

import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";
import Button from "../../components/Button";
import Input from "../../components/Input";

import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";

import images from "../../assets/images/fotona.png";



const Details = () => {
  const MySwal = withReactContent(Swal);
 
  return (
    <Layout>
      <Navbar2 />
      <div className="container mx-auto p-10 w-full">
        <div className="flex-1 p-6">
          <p className="font-semibold text-3xl text-black">Nama Tempat</p>
          <div className="flex flex-row space-x-1 divide-x-[2px] divide-black">
            <p className="text-sm text-black font-semibold">Lokasi Tempat</p>
            <div>
              <p className="text-sm text-black font-semibold">
                Nama Akun Pemilik
              </p>
            </div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#0E8388] h-3 mt-1"
              />
              <p className="text-sm text-black font-semibold">4,9</p>
            </div>
          </div>
          <div className="flex justify-end mt-20 ">
            <div className="flex flex-col">
              <p className="flex justify-center font-semibold text-2xl md:text-lg text-black">
                Details Reservasi
              </p>
              <div className="card w-96 h-full bg-white shadow-xl">
                <div className="card-body m-2">
                  <h2 className="card-title text-black">2.999.999 malam</h2>
                  <div className="flex flex-row mt-3 space-x-1">
                    <Input
                      id="date"
                      type="date"
                      placeholder="check-in"
                    />
                    <Input
                      id="date"
                      type="date"
                      placeholder="check-in"
                    />
                  </div>
                  <div className="card-actions justify-center mt-3">
                    <Button
                      id="pesan"
                      label="Pesan"
                      type="submit"
                      className="rounded-xl lg:w-10/12 md:w-6/12 sm:w-6/12 bg-[#0E8388] px-6 py-2 text-[16px] font-medium capitalize tracking-wider text-white"
                    />
                  </div>
                  <div className="flex flex-row mt-3">
                    <p className="text-black">Rp 2.999.999 x 6 malam</p>
                    <p className="text-black flex justify-end">Rp 17.999.999</p>
                  </div>
                  <hr />
                  <div className="flex flex-row">
                    <p className="text-black">Total</p>
                    <p className="text-black flex justify-end">Rp 21.999.999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-7 -mt-96">
            <div className="flex flex-row w-full gap-3 items-center">
              <img
                src={images}
                alt="foto1"
                className="w-[30%] h-full object-"
              />
              <div className="flex flex-col gap-3">
                <img
                  src={images}
                  alt="foto2"
                  className="w-[75%] object-contain"
                />
                <img
                  src={images}
                  alt="foto3"
                  className="w-[75%] object-contain"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-between">
            <div className="w-[60%] flex flex-col">
              <h1 className="font-bold text-2xl pb-3">About</h1>
              <p>
                {" "}
                Vila - vila indah di PANTAI KOKO terdiri dari sekelompok empat
                bangunan langsung di pantai hitam yang berkilauan di Lovina,
                Bali Utara. Mereka menawarkan tempat peristirahatan dari
                kehidupan sehari - hari dan terkesan dengan arsitektur modern
                dan perabotan bergaya. Biarkan diri Anda dimanjakan oleh tim
                kami yang penuh perhatian yang akan dengan senang hati mengurus
                setiap kebutuhan.
              </p>
            </div>
            <div className="w-[30%]">
              <h1 className="font-bold text-2xl pb-3">Review</h1>
              <div className="flex">
                <img src={images} alt="profil" className="rounded-full w-14" />
                <p className="font-bold text-base self-center pl-3">
                  nama profile
                </p>
              </div>
              <p className="text-sm pt-4 ">
                Tempat yang bagus, tuan rumah yang sangat membantu, kami makan
                malam dan pijat dan tur lumba - lumba ( belum menemukan lumba -
                lumba, sepertinya Februari bukan musim untuk menontonnya) dan
                dia membantu mengatur segalanya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
