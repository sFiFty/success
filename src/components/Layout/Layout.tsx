import React from "react";
import Routes from "./Routes";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
    </>
  );
};

export default Layout;
