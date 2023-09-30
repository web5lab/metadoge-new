import { Outlet } from "react-router-dom";

import Header from "./Home/Header";

const LayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayOut;
