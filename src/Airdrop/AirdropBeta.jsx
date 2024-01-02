import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineRightSquare,
  AiOutlineLeftSquare,
} from "react-icons/ai";

import { CustomWalletBtn } from "./CustomWalletBtn";
import { signMetaMask } from "../utils/utils";

const dummyArr = [
  {
    index: 1,
    name: "perry",
    points: 200,
  },
  {
    index: 2,
    name: "sharry",
    points: 100,
  },
  {
    index: 3,
    name: "harry",
    points: 300,
  },
  {
    index: 4,
    name: "cherry",
    points: 400,
  },
  {
    index: 5,
    name: "ashok",
    points: 50,
  },
  {
    index: 6,
    name: "chetan",
    points: 1000,
  },
  {
    index: 7,
    name: "jimmy",
    points: 1200,
  },
];

function AirdropBeta() {
  const [dataleaderboard, setdataleaderboard] = useState(dummyArr);
  const [telegramVerifyMenu, settelegramVerifyMenu] = useState(false);
  const [verifyTwitter, setverifyTwitter] = useState(false);
  const [verifyRetweet, setverifyRetweet] = useState(false);
  const [inviteFriend, setinviteFriend] = useState(false);

  const openMenu = async () => {
    switch (option) {
      case value:
        break;

      default:
        break;
    }
  };

  const metaMaskAuth = async () => {
    await signMetaMask();
  };
  return (
    <div
      style={{
        background: " rgba(57, 40, 159, 1.00)",
        backdropFilter: "blur(7px)",
      }}
    >
      <div className="h-auto w-full min-h-screen flex justify-center  items-start  text-white ">
        <div class=" mt-[140px] border-4 border-[#fa9021] rounded-2xl  sm:w-[90%] py-12 md:w-[80%] lg:w-[80%] ">
          <div
            className="w-[80%] h-12  text-[#e87d0e] mx-auto flex justify-center items-center"
            style={{
              font: "800 26px/180.5% 'Poppins', sans-serif",
            }}
          >
            <div>DEX TOKEN EARLY COMMUNITY AIRDROP</div>
          </div>
          <div class="flex flex-col md:flex-row  px-4 py-8 ">
            <div class="mr-auto flex  flex-col justify-center md:pl-36 w-full  ">
              <div
                className="text-[#ffffff] mb-8 md:w-[479.63px]"
                style={{ font: "700 18px/155.2% 'Poppins', sans-serif" }}
              >
                We deeply value our community and continuously seek
                opportunities to express our appreciation for your tremendous
                support. Today, we're thrilled to unveil an exciting initiative
                as a token of our gratitude. We're distributing a generous
                airdrop of 500 million Dex tokens exclusively to our top 500
                referrers, with each member receiving 1 million tokens. If
                you've been actively referring new members to DexCrash.
              </div>
              <div className="flex justify-start items-center">
                <button
                  className="flex justify-center items-center px-12  h-[41.34px]  bg-[#fa9021] rounded-md text-white"
                  style={{ font: "400 13px 'Poppins', sans-serif" }}
                >
                  Refer And Earn More Points
                </button>
              </div>
            </div>
            <div
              style={{ font: "800 20px/187.5% 'Poppins', sans-serif" }}
              className="text-white w-full  gap-1 flex flex-col justify-center items-center"
            >
              <div className=" md:w-96 border-2 anime rounded-md cursor-pointer">
                <div
                  onClick={() => {
                    settelegramVerifyMenu(!telegramVerifyMenu);
                  }}
                  className="flex justify-start px-4 gap-2 items-center"
                >
                  {" "}
                  <BiLogoTelegram
                    style={{ color: "white" }}
                  ></BiLogoTelegram>{" "}
                  Join Telegram <div style={{ flex: 1 }}></div>{" "}
                  <span>10XP</span>
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
                {telegramVerifyMenu && (
                  <div className="flex justify-start anime px-4 gap-2 items-center my-4 w-96  ">
                    <div style={{ flex: 1 }}></div>
                    <button
                      className="flex justify-center items-center w-[131.77px] h-[41.34px]  border-2 rounded-md text-white"
                      style={{ font: "400 18px 'Poppins', sans-serif" }}
                      onClick={() => {
                        metaMaskAuth();
                      }}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
              <div
                className=" md:w-96 border-2 rounded-md cursor-pointer"
                onClick={() => {
                  setverifyTwitter(!verifyTwitter);
                }}
              >
                <div className="flex justify-start px-4 gap-2 items-center">
                  {" "}
                  <FaXTwitter style={{ color: "white" }}></FaXTwitter>Follow
                  DexCrash on X <div style={{ flex: 1 }}></div>{" "}
                  <span>20XP</span>
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
                {verifyTwitter && (
                  <div className="flex justify-start px-4 gap-2 items-center my-4 w-96  ">
                    <div style={{ flex: 1 }}></div>
                    <button
                      className="flex justify-center items-center w-[131.77px] h-[41.34px]  border-2 rounded-md text-white"
                      style={{ font: "400 18px 'Poppins', sans-serif" }}
                      onClick={() => {
                        navigation("/staking");
                      }}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
              <div className=" md:w-96 border-2 rounded-md">
                <div
                  className="flex justify-start px-4 gap-2 items-center cursor-pointer"
                  onClick={() => {
                    setverifyRetweet(!verifyRetweet);
                  }}
                >
                  {" "}
                  <FaXTwitter style={{ color: "white" }}></FaXTwitter>Retweet
                  Tweet on X <div style={{ flex: 1 }}></div> <span>20XP</span>
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
                {verifyRetweet && (
                  <div className="flex justify-start px-4 gap-2 items-center my-4 w-96  ">
                    <div style={{ flex: 1 }}></div>
                    <button
                      className="flex justify-center items-center w-[131.77px] h-[41.34px]  border-2 rounded-md text-white"
                      style={{ font: "400 18px 'Poppins', sans-serif" }}
                      onClick={() => {
                        navigation("/staking");
                      }}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
              <div className=" md:w-96 border-2 rounded-md">
                <div
                  className="flex justify-start px-4 gap-2 items-center cursor-pointer"
                  onClick={() => {
                    setinviteFriend(!inviteFriend);
                  }}
                >
                  {" "}
                  <FaUserFriends style={{ color: "white" }}></FaUserFriends>
                  Invite Your Friend <div style={{ flex: 1 }}></div>{" "}
                  <span>50XP</span>
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
                {inviteFriend && (
                  <div className="flex justify-start px-4 gap-2 items-center my-4 w-96  ">
                    <div style={{ flex: 1 }}></div>
                    <button
                      className="flex justify-center items-center w-[131.77px] h-[41.34px]  border-2 rounded-md text-white"
                      style={{ font: "400 18px 'Poppins', sans-serif" }}
                      onClick={() => {
                        navigation("/staking");
                      }}
                    >
                      Invite Friend
                    </button>
                  </div>
                )}
              </div>
              <CustomWalletBtn />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" w-full   flex flex-col  items-center  text-white "
        style={{
          background: " rgba(57, 40, 159, 1.00)",
          backdropFilter: "blur(7px)",
        }}
      >
        <div style={{ font: "800 42px/180.5% 'Poppins', sans-serif" }}>
          Leader Board
        </div>
        <div class="my-8 border py-6 px-6 mx-2 rounded-2xl  md:w-[80%]  ">
          <div
            className=""
            style={{ font: "800 20px/187.5% 'Poppins', sans-serif" }}
          >
            <div className="flex px-12 justify-between">
              <p>Member</p>
              <p>XP</p>
            </div>
            {dataleaderboard.map((items) => (
              <div
                className="flex md:px-12 border  my-4 md:mx-4 rounded-xl  justify-between"
                style={{ font: "800 20px/187.5% 'Poppins', sans-serif" }}
              >
                <div className="flex">
                  <span className="mr-2">{items.index}</span>
                  <img className="mr-2 w-12" src="bill-1.png" alt="" />
                  <p>{items.name.slice(0, 5)}</p>
                </div>
                <div>
                  <p>{items.points} Xp</p>
                </div>
              </div>
            ))}
            <div
              className="flex px-12 border my-4 mx-4 shadow-md shadow-white bg-[#fa9021]  rounded-xl justify-between"
              style={{ font: "800 20px/187.5% 'Poppins', sans-serif" }}
            >
              <div className="flex">
                <span className="mr-2">{1}</span>
                <img className="mr-2 w-12" src="bill-1.png" alt="" />
                <p>shiva</p>
              </div>
              <div>
                <p>20 Xp</p>
              </div>
            </div>
            <div
              className="flex pr-2 my-4 mx-4   rounded-xl justify-between"
              style={{ font: "800 20px/187.5% 'Poppins', sans-serif" }}
            >
              <div style={{ flex: 1 }}></div>
              <div className="flex gap-2 justify-center items-center">
                <div
                  className="text-gray-300"
                  style={{ font: "800 18px/187.5% 'Poppins', sans-serif" }}
                >
                  Total 100
                </div>
                <div
                  className="flex gap-1 text-gray-300 justify-center items-center"
                  style={{ font: "800 20px/187.5% 'Poppins', sans-serif" }}
                >
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
                </div>
                <div className="flex justify-center items-center">
                  <button>
                    <AiOutlineLeftSquare className=" text-3xl" />
                  </button>
                  <div>
                    <AiOutlineRightSquare className="text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirdropBeta;
