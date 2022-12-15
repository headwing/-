import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import List from "../pages/List";
import Posting from "../pages/Posting";
import PostingEdit from "../pages/PostingEdit";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="detail" element={<Detail />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<List />} />
        {/* 네스티드 라우츠  */}
        {/* <Route path="/family" element={<List />} /> */}
        <Route path="/posting" element={<Posting />} />
        <Route path="/postingEdit/:id" element={<PostingEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
