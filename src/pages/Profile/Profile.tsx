import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";

import DetailCard from "./DetailCard";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";
import { CardRumah } from "../../components/CardReservasi";

import { ProfileType } from "../../types/Profile";
import { RiHome3Fill } from "react-icons/ri";
import images from "../../assets/images/fotona.png";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [modal, setModal] = useState<string>("");
  const [user, setUser] = useState<ProfileType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [cookie, setCookie] = useCookies(["token", "id"]);
  const checkToken = cookie.token;
  

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`http://18.142.43.11:8080/users/${id}`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // const handleDelete = async (id: any) => {
  //   MySwal.fire({
  //     icon: "warning",
  //     title: "Delete Account",
  //     text: "Are u sure",
  //     confirmButtonText: "Delete Account",
  //     cancelButtonText: "Cancel",
  //   }).then((confirm) => {
  //     if (confirm.isConfirmed) {
  //       setLoading(true);
  //       navigate("/")
  //       axios
  //         .delete(`http://18.142.43.11:8080/users/5`, {
  //           headers: {
  //             Authorization: `Bearer ${checkToken}`,
  //           },
  //         })
  //         .then((response) => {
  //           const { message } = response.data;
  //           const update = user.filter((item) => item.id !== id);
  //           setUser(update);
  //           MySwal.fire({
  //             icon: "success",
  //             title: message,
  //             text: "Succesfull Delete Account",
  //             showCancelButton: false,
  //           });
  //         })
  //         .catch((error) => {
  //           const { data } = error.response;
  //           MySwal.fire({
  //             icon: "error",
  //             title: data.message,
  //             text: "Gagal delete user",
  //             showCancelButton: false,
  //           });
  //         })
  //         .finally(() => setLoading(false));
  //     }
  //   })
  // };

  const handleDetail = async () => {
    setModal("modal-open");
  };

  return (
    <Layout>
      <Navbar2 />
      {loading ? (
        <p>loading..</p>
      ) : (
        <>
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
                <p className="text-xl text-black">{user?.name}</p>
              </div>
              <hr />
              <p className="mx-auto text-lg">{user?.email}</p>
              <hr />
              <div className="card card-actions flex flex-row justify-between space-x-3">
                <p
                  className="text-md font-semibold"
                  onClick={() => navigate("/updateprofile/:id_profile")}
                >
                  Edit Profile
                </p>
                <p 
                // onClick={() => handleDelete(user?.id)}
                className="text-md font-semibold text-red-500">
                  Delete Account
                </p>
              </div>
            </div>
          </div>
          <div className="flex mx-auto p-7 m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-3xl">Hi, Jhon Doe</p>
              <div className="mt-7 p-3">
                <p className="font-semibold text-2xl">tentang :</p>
                <p className="mt-3 p-2">{user?.about}</p>
                <p className="p-2">
                  <RiHome3Fill size={21} />
                  {user?.address}
                </p>
              </div>
              <div className="mt-5">
                <p className="font-semibold text-2xl pb-4">
                  List Rumah yang Disewakan :
                </p>
                <div className="" onClick={() => handleDetail()}>
                  <CardRumah />
                </div>
              </div>
            </div>
          </div>
          <div id="modal-detail" className={`modal ${modal}`}>
            <div className="modal-box max-w-5xl max-h-full md:w-11/12 lg:w-8/12">
              <div onClick={() => setModal("modal")}>
                <p
                  className="flex justify-end"
                  onClick={() => setModal("modal")}
                >
                  ✕
                </p>
              </div>
              <DetailCard />
            </div>
          </div>
        </div>
      </div>
        </>
      )}
      <Footer />
    </Layout>
  );
};

export default Profile;
