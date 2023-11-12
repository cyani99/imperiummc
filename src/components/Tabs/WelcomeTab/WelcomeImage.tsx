import player from "../../../static/img/body.png"

function WelcomeImage(){

    return(
        <div className="basis-1/3">
            <img className="h-40" src={player}></img>
        
        </div>
    )
}

export default WelcomeImage