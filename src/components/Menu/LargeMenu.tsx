import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import {BiSolidLike} from "react-icons/bi";
import { TiWorld } from "react-icons/ti";

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
      <a href="https://www.stylowamc.pl" className="flex ml-10 m-2 p-2 cursor-pointer">
        <AiFillHome size="25px" />
        <div className="mx-1 text-lg font-bold">Start</div>
      </a>
      <a href="https://vishop.pl/shop/5732/server/5469" className="flex m-2 bg-purple-3 p-2 rounded-lg px-5 cursor-pointer">
        <div className="text-lg font-bold">Sklep</div>
      </a>
      <a href="http://82.118.227.23:81/" className="flex m-2 p-2 cursor-pointer">
        <TiWorld size="30px" />
        <div className="mx-1 text-lg font-bold">Mapa</div>
      </a>
    </div>
  );
}

export default LargeMenu;
