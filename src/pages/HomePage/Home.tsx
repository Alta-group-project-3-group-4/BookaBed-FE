import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Swal from "../../utils/Swal";
import Logo from "../../assets/LogoBookaBed.webp";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { IoSearchCircleSharp } from "react-icons/io5";
import { RiMenuFill, RiUser3Line } from "react-icons/ri";

interface homeTypes {
  homestay_id: number
  name: string
  description: string
  price: number
  gambar: string
  images: string
}

const Home = () => {
  const [home, setHome] = useState<homeTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [numDisplayed, setNumDisplayed] = useState<number>(8);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  const filteredHome = home.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())).slice(0, numDisplayed);

  function loadMore() {
    setNumDisplayed(numDisplayed + 8);
  }

  useEffect(() => {
    fetchHome();
  }, []);

  function fetchHome() {
    setLoading(true);
    axios
      .get(`https://virtserver.swaggerhub.com/AirBnBProject/AirBnB/1.0.0/homestay`)
      .then((res) => {
        setHome(res.data.data);
      }).catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setLoading(false));

  }

  return (
    <Layout>
      <div className="h-1/5 w-full shadow-md pb-6">
        <div className="flex flex-row items-center justify-between pt-6 pl-24">
          <div className="flex flex-row items-center gap-8">
            <Link to={"/"}>
              <h1 className="text-3xl text-color3 font-bold ">
                BookaBed
              </h1>
            </Link>
            <img
              src={Logo}
              alt="Logo"
              className="w-12
            "
            />
          </div>
          <div className="form-control w-96 h-10 bg-color4 rounded-3xl flex-row flex">
            <Input
              id="search"
              type="text"
              placeholder="Cari tempat menginap..."
              className="bg-color4 rounded-3xl h-10 pl-10 w-[21rem] "
              onChange={handleSearchChange}
            />
            <IoSearchCircleSharp className="w-7 h-7 text-color3 self-center" />
          </div>
          <div
            className="flex gap-16 pr-32 
        "
          >
            <div className="dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle "
              >
                <RiMenuFill className="w-7 h-7 text-color3 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
              >
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
                <li>
                  <a href="/reservasi">Riwayat Reservasi</a>
                </li>
              </ul>
            </div>
            <div className="pt-2">
              <Link to={"/profile"}>
                <RiUser3Line className="w-7 h-7 text-color3 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center">
        <div className="my-10 text-black">
          <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 lg:grid-cols-4 gap-3">
            {filteredHome.map((item) => (
              <Card
                key={item.homestay_id}
                name={item.name}
                description={item.description}
                price={item.price}
                gambar={item.gambar}
              />
            ))}
          </div>
        </div>
        <Button
          id="btn-loadMore"
          label="Lihat Lebih Banyak"
          className="bg-color3 border-2 border-color3 rounded-xl py-3 mx-auto text-white font-poppins font-semibold w-[20%] mt-10 hover:bg-color4 hover:text-white hover:border-none self-center"
          onClick={loadMore}
        />
      </div>
    </Layout>
  );
};

export default Home;
