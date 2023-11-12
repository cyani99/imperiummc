import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import {BiSolidLike} from "react-icons/bi";

function LargeMenu() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(():any => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
        window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
        
  const menuClasses = `flex max-lg:hidden rounded-bl-xl  rounded-br-xl justify-center fixed w-1/2 m-auto inset-x-0 transition duration-300 z-10 ${
    scrolling ? " bg-gray-800 shadow-xl" : "bg-transparent "
  }`;

  return (
    <div className={menuClasses}>
      <div className="flex ml-10 m-2 p-2 cursor-pointer">
        <AiFillHome size="25px" />
        <div className="mx-1 text-lg font-bold">Start</div>
      </div>
      <div className="flex m-2 bg-purple-3 p-2 rounded-lg px-5 cursor-pointer">
        <div className="text-lg font-bold">Sklep</div>
      </div>
      <div className="flex m-2 p-2 cursor-pointer">
        <BiSolidLike size="25px" />
        <div className="mx-1 text-lg font-bold">Zagłosuj</div>
      </div>
    </div>
  );
}

export default LargeMenu;
