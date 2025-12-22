import { motion } from "motion/react";
const MarqueeContent = ({ items }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ 
        duration: 20, 
        ease: "linear", 
        repeat: Infinity,
      }}
      className="flex min-w-full shrink-0 items-center justify-around"
    >
      {items.map((item, index) => (
        <span key={index} className="mx-4 whitespace-nowrap font-bold text-Neutral-700">
          {item}
        </span>
      ))}
    </motion.div>
  );
};

export default MarqueeContent;