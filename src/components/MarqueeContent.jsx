import { motion } from "motion/react";
const MarqueeContent = ({ items }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ 
        duration: items.length * 2, 
        ease: "linear", 
        repeat: Infinity,
      }}
      className="flex min-w-full shrink-0 items-center justify-between"
    >
      {items.map((item, index) => (
        <span key={index} className="py-3 px-4 whitespace-nowrap font-bold text-Neutral-700">
          {item}
        </span>
      ))}
    </motion.div>
  );
};

export default MarqueeContent;