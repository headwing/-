import React from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import MainBody from "../components/mainbody/MainBody";

const Main = () => {
  return (
    <>
      <Header />
      <Layout>
        <MainBody />
      </Layout>
    </>
  );
};

export default Main;
