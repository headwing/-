import React from "react";
import styled from "styled-components";
import Router from "./shared/Router";

function App() {
  return (
    <GlobalStyle>
      <Router />
    </GlobalStyle>
  );
}

export default App;

const GlobalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("http://localhost:3000/image/bg2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;
