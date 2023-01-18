import React, { useEffect } from "react";
import useDataStore from "../store/data_store";
import heroImage from "../assets/buy.svg";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const data = useDataStore((state) => state.data);
  const nav = useNavigate();

  if (data == []) {
    return (
      <div className="container mx-auto h-[500px] w-[500px] flex items-center justify-center flex-col p-20">
        <div id="ani" className="h-[500px]"></div>
        <h1 className="text-2xl text-[#242B2E]">No data found</h1>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section start */}
      <div
        className="min-h-[60vh] container mx-auto bg-gradient-to-r
    from-[#330075] to-[#5c00ba]
    flex items-center justify-between flex-row
    
    "
      >
        <div
          className=" flex min-w-[50%] min-h-full flex-col  gap-8 text-white md:pl-36
        px-4 md:px-0
      items-start justify-start
      "
        >
          <h1 className=" text-5xl font-bold">
            All you need in <br /> the closet
          </h1>
          <h3 className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rem
            maxime! Odit quasi eos sint nemo, ex illum vel doloremque?
          </h3>
          <button
            className="bg-gradient-to-r from-[#00eacb]
        to-[#00e06a]
        w-[200px] p-3 rounded-md transition-all ease-in-out delay-200 text-white hover:invert duration-200
        "
          >
            Browse Products
          </button>
        </div>
        <div className="hidden md:flex min-w-[50%] items-center justify-center ">
          <img src={heroImage} alt="" className="h-[300px] w-[400px]" />
        </div>
      </div>
      {/* Hero Section end  */}

      {/* Heading-Start */}
      <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
        Products
      </div>
      {/* Heading-ENd */}
      {/* Product Section Start */}
      <div className=" container mx-auto flex justify-center items-center  font-serif flex-wrap  gap-4 bg-[#ffffff]">
        {/* Card-Start */}
        {data.map((e, i) => (
          <div
            className=" w-[370px] h-[400px] flex items-start justify-center px-3 flex-col shadow-sm transition ease-in-out delay-150 hover:shadow-2xl duration-200 border"
            key={i}
            onClick={() => {
              nav("/product", { state: { data: e } });
            }}
          >
            <img src={e.image} alt="" className="h-52 px-10  self-center" />

            <h3 className="text-[#758283] mt-2">
              {String(e.category).toUpperCase()}
            </h3>
            <h3 className="text-[#6A1B4D] text-md">{e.title}</h3>
            <h3 className="mt-2">
              Rating:{" "}
              <span className="text-[#A77B06] font-semibold text-md">
                {e.rating.rate}
              </span>
            </h3>
            <h3 className="text-[#2e0066] text-2xl mt-2">₹{e.price}</h3>
          </div>
        ))}
        {/* Card-END */}
      </div>
      {/* Product Section End */}
    </>
  );
};

export default HomeScreen;
