function WelcomeContent(){

    return(
        <div className="basis-2/3 flex flex-col py-4">
        <div className="text-purple-3 font-bold text-lg">Witaj na StylowejMC!</div>
        <div className="text-base font-inter py-2">Przeczytaj nasze serwerowe lore, żeby poznać historię serwera</div>
        <div className="flex w-fit m-2 bg-purple-3 p-2 rounded-lg px-5 cursor-pointer max-lg:hidden">
         <a href="https://stylowamc.fandom.com/pl/wiki/Stylowamc_Wiki" className="text-lg font-bold ">Lore</a>
        </div>
        </div>
    )
}

export default WelcomeContent