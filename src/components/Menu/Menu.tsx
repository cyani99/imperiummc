import React, { useState } from "react";
import burgerMenuIcon from "../../static/img/burger-menu.svg"
import LargeMenu from "./LargeMenu";


function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    let menu = <img className=" fixed m-4 lg:hidden" src={burgerMenuIcon} onClick={() => { setShowMenu(!showMenu) }} alt="burger menu"></img>;
    let max_menu = <LargeMenu/> 
    if (showMenu) {
        menu = <div onClick={() => { setShowMenu(!showMenu) }} className="w-full h-full fixed bg-purple-2 ">
            <ul className="p-4">
                <li className="p-2"><a className="text-4xl px-4 border-b-2" href="https://www.stylowamc.pl">Start</a></li>
                <li className="p-2"><a className="text-4xl px-4 border-b-2" href="https://vishop.pl/shop/5732/server/5469">Sklep</a></li>
                <li className="p-2"><a className="text-4xl px-4 border-b-2" href="http://82.118.227.23:81/">Mapa</a></li>
            </ul>
        </div>;
    }
    return (
        <>
            {menu}
            {max_menu}
        </>
    )
}

export default Menu;