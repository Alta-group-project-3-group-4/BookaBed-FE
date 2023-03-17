import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";

import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";
import Card from "../../components/Card";
import Logo from "../../assets/LogoBookaBed.webp";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Link } from "react-router-dom";
import { IoSearchCircleSharp } from "react-icons/io5";
import { RiMenuFill, RiUser3Line } from "react-icons/ri";

interface HomeProps {
  homestay_id: number
  name: string
  description: string
  price: number
  gambar: string
  images: string
}

const Home: React.FC<HomeProps> = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate()
  const [home, setHome] = useState<HomeProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [numDisplayed, setNumDisplayed] = useState<number>(8);

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

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
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setLoading(false));
  }
  function onCLickDetail(homestay_id: number) {
    navigate(`/room/${homestay_id}`);
  }
  return (
    <Layout>
      <Navbar2 />
      <div className="container mx-auto flex flex-col justify-center">
        <div className="my-10 text-black">
          <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 lg:grid-cols-4 gap-3">
            {filteredHome.map((item: any, index) => (
              <Card
                key={index}
                homestay_id={item.homestay_id}
                name={item.name}
                price={item.price}
                gambar={item.images}
                onClick={() => onCLickDetail(item.homestay_id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
