import { signMessage } from "@wagmi/core";

export const signMetaMask = async () => {
  const res = await signMessage({
    message: "SignIn airdrop dexCrash",
  });

  console.log("msg", res);
};
