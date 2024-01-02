import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();

  return (
    <nav
      class=" border-gray-200  pt-[10px] relative  top-0 px-4 lg:px-6 py-2.5 "
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        background: " rgba(57, 40, 159, 1.00)",
      }}
    >
      <div class="flex md:px-12 justify-between items-center mx-auto ">
        <a
          class="flex items-center"
          onClick={() => {
            navigation("/");
          }}
        >
          <div
            className="from-white to-blue-500 text-transparent bg-clip-text font-[800] text-[20px] bg-gradient-to-r text-left   md:block  lg:text-[2rem] md:text-[2rem] "
            style={{ font: " 'Poppins', sans-serif" }}
          >
            DexCrash{" "}
          </div>
          <img
            className="md:w-[65px] lg:w-[65px] md:h-[65px] lg:h-[65px] h-[32px] w-[32px]"
            src="rectangle-8.png"
          />
        </a>

        <div class="flex justify-center items-center lg:order-2">
          <button
            className="md:flex lg:flex justify-center mr-4 hidden items-center lg:w-[131.77px] md:w-[131.77px] font-[400] px-2 ml-2 md:p-0 lg:p-0  text-[13px] h-[34.34px] md:h-[41.34px] lg:h-[41.34px] bg-[#fa9021] rounded-md text-white"
            style={{ font: "'Poppins', sans-serif" }}
            onClick={() => {
              navigation("/staking");
            }}
          >
            Staking
          </button>
          <button
            className="flex justify-center items-center lg:w-[131.77px] md:w-[131.77px] font-[400] px-2 ml-2 md:p-0 lg:p-0 md:m-0 lg:m-0 text-[13px] h-[34.34px] md:h-[41.34px] lg:h-[41.34px] bg-[#fa9021] rounded-md text-white"
            style={{ font: "'Poppins', sans-serif" }}
            onClick={() => {
              navigation("/airdrop");
            }}
          >
            Join Airdrop
          </button>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col  font-medium md:gap-[88px] lg:flex-row  ">
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white rounded lg:p-0 dark:text-white"
                aria-current="page"
                onClick={() => {
                  navigation("/");
                }}
                style={{
                  font: "var(--base, 400 16px 'Poppins', sans-serif)",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white rounded lg:p-0 dark:text-white"
                aria-current="page"
                style={{
                  font: "var(--base, 400 16px 'Poppins', sans-serif)",
                }}
              >
                TokeNomics
              </a>
            </li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-white rounded lg:p-0 dark:text-white"
              aria-current="page"
              style={{ font: "var(--base, 400 16px 'Poppins', sans-serif)" }}
            >
              RoadMap
            </a>
            <a
              href="https://whitepaper.dexcrash.com"
              class="block py-2 pr-4 pl-3 text-white rounded lg:p-0 dark:text-white"
              aria-current="page"
              style={{ font: "var(--base, 400 16px 'Poppins', sans-serif)" }}
            >
              WhitePaper
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
