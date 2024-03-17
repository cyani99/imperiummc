import ShopContent from "./ShopContent";
import ShopIcon from "./ShopIcon";
import { motion } from "framer-motion";

function ShopTab() {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      href="https://dc.stylowamc.pl/"
      className="flex flex-row bg-purple-2 hover:bg-gold-1 rounded px-4 lg:w-1/3"
    >
      <ShopContent />
      <ShopIcon />
    </motion.a>
  );
}

export default ShopTab;
