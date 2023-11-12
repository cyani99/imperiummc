import NewsTab from "../Tabs/NewsTab/NewsTab";
import ShopTab from "../Tabs/ShopTab/ShopTab";
import WelcomeTab from "../Tabs/WelcomeTab/WelcomeTab";
import Logo from "./Logo";


function Main(){

    return(
        <div className="h-full">
            <Logo/>
            <div className="grid grid-cols-1 p-4 gap-2">
                <WelcomeTab/>
                <ShopTab/>
                <NewsTab/>
            </div>
      
        </div>
    )
}

export default Main;