import React from "react";

import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { CardRumah } from "../../components/CardReservasi";
import { RiHome3Fill } from "react-icons/ri";
import images from "../../assets/images/fotona.png"

const Profile = () => {
  return (
    <Layout>
      <Navbar2 />
      <div className="container mx-auto p-10">
        <div className="flex flex-row p-6">
          <div className="card w-80 h-80 shadow-black shadow-sm mt-7 mx-auto">
            <div className="card-body mx-auto mt-8">
              <div className="flex mx-auto">
                <img
                  src={images}
                  alt="foto3"
                  className="w-20 rounded-full object-contain"
                />
              </div>
              <div className="card-title mt-4 mx-auto">
                <p className="text-xl">Jhon Doe</p>
              </div>
              <hr />
              <p className="mx-auto text-lg">
                jhondoe@gmail.com
              </p>
              <hr />
              <div className="card card-actions flex flex-row justify-between space-x-3">
                <p className="text-md font-semibold ">Edit Profile</p>
                <p className="text-md font-semibold text-red-500">Delete Account</p>
              </div>
            </div>
          </div>
          <div className="flex mx-auto p-7 m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-3xl">Hi, Jhon Doe</p>
              <div className="mt-7 p-3">
                <p className="font-semibold text-2xl">tentang :</p>
                <p className="mt-3 p-2">Ini About</p>
                <p className="p-2">
                  <RiHome3Fill size={21} />
                  tinggal di West Jakarta, Indonesia
                </p>
              </div>
              <div className="mt-5">
                <p className="font-semibold text-2xl pb-4">
                  List Rumah yang Disewakan :
                </p>
                <CardRumah />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Profile;
