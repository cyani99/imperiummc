import NewsTab from "../Tabs/NewsTab/NewsTab";
import ShopTab from "../Tabs/ShopTab/ShopTab";
import WelcomeTab from "../Tabs/WelcomeTab/WelcomeTab";
import {BsDiscord} from "react-icons/bs";
import {GiConsoleController} from "react-icons/gi"
import Logo from "./Logo";
import { motion } from "framer-motion";

function Main(){

    return(
        <div className="h-full">
            <div className="flex items-center justify-center ">
                <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }} className="flex justify-center basis-1/3 max-lg:hidden">
                    <div className="mr-4">
                        <div className="font-bold text-lg text-purple-2">13 GRACZY ONLINE</div>
                        <div className="flex justify-end">IP: STYLOWAMC.PL</div>
                    </div>
                    <GiConsoleController color="#D4ADFC" size="54px"/>
                </motion.div>
                <Logo/>
                <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }} href="https://dc.stylowamc.pl/" className="flex justify-center basis-1/3 max-lg:hidden">
                    <div className="mr-4">
                        <div className="font-bold text-lg text-purple-2">4411 UŻYTKOWNIKÓW</div>
                        <div className="flex justify-end">DC.STYLOWAMC.PL</div>
                    </div>
                    <BsDiscord color="#D4ADFC" size="54px"/>
                </motion.a>
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