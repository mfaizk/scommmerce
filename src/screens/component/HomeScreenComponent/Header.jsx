import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [TranslateValue, setTranslateValue] = useState("translate-y-[-150px]");

  return (
    <div className=" bg-[#6f00e6] min-h-[60px] flex items-center justify-between flex-row container mx-auto text-white font-serif px-3 sm:px-11 z-10">
      <h1 className=" font-thin text-2xl">
        store <span className="font-bold">Logo</span>
      </h1>
      {isMenuOpen ? (
        <RxCross1
          size={30}
          onClick={() => {
            setisMenuOpen(!isMenuOpen);
            setTranslateValue("translate-y-[-150px]");
          }}
          className="flex sm:hidden"
        />
      ) : (
        <AiOutlineMenu
          size={30}
          onClick={() => {
            setisMenuOpen(!isMenuOpen);
            setTranslateValue("translate-y-0");
          }}
          className="flex sm:hidden"
        />
      )}
      <div
        className={`
      container bg-[#6f00e6] sm:hidden absolute top-[60px] left-0
      transition-all ease-in-out delay-150 ${TranslateValue} duration-300 
      `}
      >
        <div
          className="bg-gradient-to-r from-[#6f00e6]
          to-[#ffffff] p-2 flex  justify-center text-xl
          z-0
        "
        >
          Cart
        </div>
      </div>

      <div className=" items-center justify-between flex-row gap-20 hidden sm:flex">
        <h1 className="text-xl font-mono opacity-75">
          demo.user@scommerce.com
        </h1>
        <AiOutlineShoppingCart size={30} />
      </div>
    </div>
  );
};

export default Header;
