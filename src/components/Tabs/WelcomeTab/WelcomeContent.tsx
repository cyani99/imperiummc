import { motion } from "framer-motion";

function WelcomeContent() {
  return (
    <div className="basis-2/3 flex flex-col py-3">
      <div className="text-purple-3 font-alegreya font-bold text-4xl">
        WITAJ NA STYLOWEJ!
      </div>
      <div className="text-base font-inter text-mdr">
        Przeczytaj nasze serwerowe lore, żeby poznać historię serwera
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex w-fit my-3 bg-purple-3 p-2 rounded-lg px-8 cursor-pointer max-lg:hidden"
      >
        <a
          href="https://stylowamc.fandom.com/pl/wiki/Stylowamc_Wiki"
          className="text-lg font-bold "
        >
          Lore
        </a>
      </motion.div>
    </div>
  );
}

export default WelcomeContent;
