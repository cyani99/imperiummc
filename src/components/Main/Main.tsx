import NewsTab from "../Tabs/NewsTab/NewsTab";
import ShopTab from "../Tabs/ShopTab/ShopTab";
import WelcomeTab from "../Tabs/WelcomeTab/WelcomeTab";
import {BsDiscord} from "react-icons/bs";
import {GiConsoleController} from "react-icons/gi"
import Logo from "./Logo";


function Main(){

    return(
        <div className="h-full">
            <div className="flex items-center justify-center ">
                <div className="flex justify-center basis-1/3 max-lg:hidden">
                    <div className="mr-4">
                        <div className="font-bold text-lg text-purple-2">0 GRACZY ONLINE</div>
                        <div className="flex justify-end">IP: STYLOWAMC.PL</div>
                    </div>
                    <GiConsoleController color="#D4ADFC" size="54px"/>
                </div>
                <Logo/>
                <div className="flex justify-center basis-1/3 max-lg:hidden">
                    <div className="mr-4">
                        <div className="font-bold text-lg text-purple-2">5000 UŻYTKOWNIKÓW</div>
                        <div className="flex justify-end">DC.STYLOWAMC.PL</div>
                    </div>
                    <BsDiscord color="#D4ADFC" size="54px"/>
                </div>
            </div>
            
            <div className="lg:mx-40 grid grid-cols-1 p-4 gap-2">
                <div className="lg:flex ">
                    <WelcomeTab/>
                    <ShopTab/>
                </div>

                <NewsTab/>
            </div>
        </div>
    )
}

export default Main;