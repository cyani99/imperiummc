import Logo from "./Logo";


function Main(){

    return(
        <div className="h-full">
            <Logo/>
            <div className="h-full">
            <div className="w-full h-1/5 bg-gray-500 rounded p-4">
                <div>ZDJ</div>
                <div>Title</div>
                <div>Description</div>
            </div>
            <div className="w-full h-2/4 bg-gray-500 rounded p-4 mt-5">
                <div>NEWS</div>
            </div>
            </div>
      
        </div>
    )
}

export default Main;