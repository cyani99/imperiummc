import React, { useState } from "react";
import burgerMenuIcon from "../../static/img/burger-menu.svg"


function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    let menu = <img className=" fixed m-4" src={burgerMenuIcon} onClick={() => { setShowMenu(!showMenu) }} alt="burger menu"></img>;
    if (showMenu) {
        menu = <div onClick={() => { setShowMenu(!showMenu) }} className="w-full h-full fixed bg-purple-2">
            <ul className="p-4">
                <li className="p-2"><a className="text-4xl px-4 border-b-2" href="#a">Start</a></li>
                <li className="p-2"><a className="text-4xl px-4 border-b-2" href="#a">Sklep</a></li>
                <li className="p-2"><a className="text-4xl px-4 border-b-2" href="#a">Zagłosuj</a></li>
            </ul>
        </div>;
    }

    return (
        <>
            {menu}
        </>
    )
}

export default Menu;