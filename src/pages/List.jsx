import React from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Lists from "../components/list/Lists";

const List = () => {
  return (
    <>
      <Header />
      <Layout>
        <Lists />
      </Layout>
    </>
  );
};

export default List;
