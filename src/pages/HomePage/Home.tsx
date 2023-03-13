import React from "react";

import Layout from "../../components/Layout";
import { Navbar } from "../../components/Navbar";
import Card from "../../components/Card";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto">
        <div className="my-10 text-black">
          <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 lg:grid-cols-4 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
