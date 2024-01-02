import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import Airdrop from "./Airdrop/Airdrop";
import Staking from "./Staking/Staking";
import LayOut from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "airdrop",
        element: <Airdrop />,
      },
      {
        path: "staking",
        element: <Staking />,
      },
    ],
  },
]);
