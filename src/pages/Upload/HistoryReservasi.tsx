import React from "react";
import { CardReservasi } from "../../components/CardReservasi";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";

const HistoryReservasi = () => {
  return (
    <Layout>
      <Navbar2 />
      <div className="h-screen pl-[25rem] flex-col flex  pt-16">
        <h1 className="font-bold text-2xl pb-8">
          Riwayat Reservasi anda
        </h1>
        <CardReservasi />
        <br />
        <CardReservasi />
      </div>
      <Footer />
    </Layout>
  );
};

export default HistoryReservasi;
