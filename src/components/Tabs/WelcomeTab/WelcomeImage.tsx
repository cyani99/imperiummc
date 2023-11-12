import player from "../../../static/img/body.png"

function WelcomeImage(){

    return(
        <div className="flex w-fit justify-start">
            <img className="h-40" src={player}></img>
        </div>
    )
}

export default WelcomeImage