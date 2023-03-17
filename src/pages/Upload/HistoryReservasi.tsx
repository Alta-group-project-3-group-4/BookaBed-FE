import React from "react";
import Card from "../../components/Card";
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
        <Card 
        cardType="reservasi" 
        
        />
        <br />
        <Card cardType="reservasi" />
      </div>
      <Footer />
    </Layout>
  );
};

export default HistoryReservasi;
