import logo from "../../static/img/logo.png";

function Logo() {
  return (
    <div className="lg:pt-5 w-full flex justify-center">
      <img className="w-80 h-80" src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
