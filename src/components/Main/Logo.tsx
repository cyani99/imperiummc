import logo from "../../static/img/logo.png"
function Logo(){

    return(
    <div className="w-100 flex justify-center">
        <img className="w-80 h-80" src={logo}></img>
    </div>
    )
}

export default Logo;