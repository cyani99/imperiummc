import React, { useState } from "react";
import burgerMenuIcon from "../../static/img/burger-menu.svg"


function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    let menu = <img className=" fixed m-4" src={burgerMenuIcon} onClick={() => { setShowMenu(!showMenu) }} alt="burger menu"></img>;
    if (showMenu) {
        menu = <div onClick={() => { setShowMenu(!showMenu) }} className="w-3/5 h-full fixed bg-blue-200">
            <ul>
                <li><a href="#a">Start</a></li>
                <li><a href="#b">Sklep</a></li>
                <li><a href="#c">Zaglosuj</a></li>
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