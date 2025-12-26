import MarqueeContent from "./MarqueeContent";
const marqueeItems = [
  "Let's join",
  "- 火箭隊培訓營 Rocket -",
  "- 共同空間 Co-working space -",
  "Let's join",
  "- 火箭隊培訓營 Rocket -",
  "- 共同空間 Co-working space -",
  "Let's join",
  "- 火箭隊培訓營 Rocket -",
  "- 共同空間 Co-working space -",
];
const Marquee = () => {
  return (
    <div className="sticky top-0 right-0 z-50 flex w-full overflow-hidden bg-Neutral-white backdrop-blur shadow-sm py-2">
      <MarqueeContent items={marqueeItems} />
      <MarqueeContent items={marqueeItems} />
      <MarqueeContent items={marqueeItems} />
    </div>
  );
};
export default Marquee;
