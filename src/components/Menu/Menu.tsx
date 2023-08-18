import burgerMenuIcon from "../../static/img/burger-menu.svg"

function Menu(){

    return(
        <div>
            <div className="">
                <img src={burgerMenuIcon} alt="burger menu" className="text-blue-400"></img>
                Menu
            </div>

        </div>
    )
}

export default Menu;