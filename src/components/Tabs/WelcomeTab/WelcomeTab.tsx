import WelcomeContent from "./WelcomeContent"
import WelcomeImage from "./WelcomeImage"

function WelcomeTab(){

    return(
    <div className="flex flex-row bg-purple-1 rounded px-2">
        <WelcomeImage/>
        <WelcomeContent/>
    </div>
    )
}

export default WelcomeTab