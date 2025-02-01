import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";
import { motion } from "framer-motion";

function LargeMenu() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Używamy semantycznego elementu <nav>
  const menuClasses = `fixed inset-x-0 m-auto w-1/2 flex justify-center rounded-bl-xl rounded-br-xl transition duration-300 z-10 ${
    scrolling ? "bg-gray-800 shadow-xl" : "bg-transparent"
  }`;

  return (
    <nav className={menuClasses} aria-label="Menu nawigacyjne">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="http://www.stylowamc.pl"
        aria-label="Przejdź do strony startowej"
        className="flex items-center m-2 p-2 cursor-pointer ml-10"
      >
        <AiFillHome size={25} />
        <span className="mx-1 text-lg font-bold">Start</span>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.stylowamc.pl"
        aria-label="Przejdź do sklepu"
        className="flex items-center m-2 p-2 cursor-pointer bg-purple-3 hover:bg-gold-1 rounded-lg px-5"
      >
        <span className="text-lg font-bold">Sklep</span>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.stylowamc.pl"
        aria-label="Przejdź do mapy"
        className="flex items-center m-2 p-2 cursor-pointer"
      >
        <TiWorld size={30} />
        <span className="mx-1 text-lg font-bold">Mapa</span>
      </motion.a>
    </nav>
  );
}

export default LargeMenu;
