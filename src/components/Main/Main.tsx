import React from "react";
import NewsTab from "../Tabs/NewsTab/NewsTab";
import ShopTab from "../Tabs/ShopTab/ShopTab";
import WelcomeTab from "../Tabs/WelcomeTab/WelcomeTab";
import { BsDiscord } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
import Logo from "./Logo";
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Lewy widget (tylko na dużych ekranach) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:flex items-center space-x-2"
          >
            <GiConsoleController color="#D4ADFC" size={54} />
            <div className="text-right">
              <p className="font-bold text-lg text-purple-2">
                33 GRACZY ONLINE
              </p>
              <p className="text-sm">IP: STYLOWAMC.PL</p>
            </div>
          </motion.div>

          {/* Logo w centrum */}
          <div className="flex justify-center flex-grow">
            <Logo />
          </div>

          {/* Prawy widget (tylko na dużych ekranach) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="https://dc.stylowamc.pl/"
            className="hidden lg:flex items-center space-x-2"
          >
            <BsDiscord color="#D4ADFC" size={54} />
            <div className="text-left">
              <p className="font-bold text-lg text-purple-2">
                4349 UŻYTKOWNIKÓW
              </p>
              <p className="text-sm">DC.STYLOWAMC.PL</p>
            </div>
          </motion.a>
        </div>
      </header>

      {/* Główna treść */}
      <main className="container mx-auto p-4 flex-grow">
        <div className="lg:flex gap-4 mb-4">
          <WelcomeTab />
          <ShopTab />
        </div>
        <NewsTab />
      </main>
    </div>
  );
}

export default Main;
