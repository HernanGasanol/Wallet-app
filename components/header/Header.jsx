import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center relative">
     
     
     <div className="h-[50rem] flex  items-center w-full relative">
        <img src="v_model.jpg" alt="" className=" h-full object-cover w-full" />
        <img src="wave.svg" alt="" className="absolute   bottom-0" />
      </div>

     
     <div className=" flex justify-center  px-10 md:px-0  gap-10 md:justify-around   items-center md:bottom-5  w-full  text-white  absolute z-20">
        <div className="hidden sm:inline w-[16rem]  md:w-80">
          <img src="phone3.png" alt="" className="w-full h-full " />
        </div>

        <div className=" flex flex-col ">
          <h2 className="text-[2rem] md:text-[3rem] ">
            Te cuidamos <br /> Mientras cuidas tus ahorros
          </h2>
        

          <div className="flex items-center space-x-7 ">
              <img src="google.png" alt="" className="w-[8rem] h-[3rem]" />
              <img src="store.svg" alt="" className="w-[8rem] h-[8rem]"  />
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Header;
