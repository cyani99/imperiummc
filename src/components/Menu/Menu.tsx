import React, { useState } from "react";
import burgerMenuIcon from "../../static/img/burger-menu.svg";
import logo from "../../static/img/logo.png"
import LargeMenu from "./LargeMenu";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* Ikona burgera wyświetlana tylko na urządzeniach mobilnych */}
      <div className="fixed m-4 lg:hidden z-50">
        <button onClick={toggleMenu} aria-label="Otwórz menu">
          <img src={burgerMenuIcon} alt="Ikona menu" />
        </button>
      </div>

      {/* Overlay menu mobilnego */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-purple-2 z-40 flex flex-col items-center justify-center text-black font-inter"
          onClick={toggleMenu}
        >
          {/* Logo nad menu */}
          <div className="mb-4">
            <img src={logo} alt="Logo" className="h-32" />
          </div>
          <nav
            className="p-4 bg-white rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li className="p-2">
                <a
                  className="text-4xl px-4 border-b-2 block"
                  href="https://www.stylowamc.pl"
                >
                  Start
                </a>
              </li>
              <li className="p-2">
                <a
                  className="text-4xl px-4 border-b-2 block"
                  href="https://www.stylowamc.pl"
                >
                  Sklep
                </a>
              </li>
              <li className="p-2">
                <a
                  className="text-4xl px-4 border-b-2 block"
                  href="https://www.stylowamc.pl"
                >
                  Mapa
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Menu wyświetlane na dużych ekranach */}
      <LargeMenu />
    </>
  );
}

export default Menu;
