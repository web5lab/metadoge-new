import React from "react";

function Airdrop() {
  return (
    <div
      style={{
        background: " rgba(57, 40, 159, 1.00)",
        backdropFilter: "blur(7px)",
      }}
    >
      <div className="h-auto w-full min-h-screen flex justify-center  items-start  text-white ">
        <div class=" mt-[140px] border-4 border-[#fa9021] rounded-2xl  sm:w-[90%] py-12 md:w-[80%] lg:w-[80%] ">
          {" "}
          <div
            className="w-[80%] h-12 text-2xl font-bold text-white mx-auto flex justify-center items-center"
           
          >
            <div>Airdrop Not Started Yet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airdrop;
