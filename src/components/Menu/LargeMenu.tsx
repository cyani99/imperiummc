import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";
import { motion } from "framer-motion";

function LargeMenu() {
  const [scrolling, setScrolling] = useState(false);

  useEffect((): any => {
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
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="http://www.stylowamc.pl"
        className="flex ml-10 m-2 p-2 cursor-pointer"
      >
        <AiFillHome size="25px" />
        <div className="mx-1 text-lg font-bold">Start</div>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.stylowamc.pl"
        className="flex m-2 bg-purple-3 hover:bg-gold-1 p-2 rounded-lg px-5 cursor-pointer"
      >
        <div className="text-lg font-bold">Sklep</div>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.stylowamc.pl"
        className="flex m-2 p-2 cursor-pointer"
      >
        <TiWorld size="30px" />
        <div className="mx-1 text-lg font-bold">Mapa</div>
      </motion.a>
    </div>
  );
}

export default LargeMenu;
