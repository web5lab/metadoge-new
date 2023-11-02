import { ConnectButton } from "@rainbow-me/rainbowkit";
export const CustomWalletBtn = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="flex justify-center items-center px-12 mt-8 h-[41.34px]  bg-[#fa9021] rounded-md text-white"
                    style={{ font: "400 13px 'Poppins', sans-serif" }}
                  >
                    Connect Wallet to Continue
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="flex justify-center items-center px-12 mt-8 h-[41.34px]  bg-[#fa9021] rounded-md text-white"
                    style={{ font: "400 13px 'Poppins', sans-serif" }}
                  >
                    Unsuported Network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openAccountModal}
                    className="flex justify-center items-center px-12 mt-8 h-[41.34px]  bg-[#fa9021] rounded-md text-white"
                    style={{ font: "400 13px 'Poppins', sans-serif" }}
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
