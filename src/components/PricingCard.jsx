import check from "../assets/imgs/icon/ic-check-lg.svg";
const PricingCard = ({ title, price, features }) => {
  return (
    <div
      className={`
        max-w-83.25 p-8 flex flex-col gap-4 items-center justify-center r-md
        bg-Neutral-white text-Neutral-700 transition-all duration-300
      `}
    >
      <h4 className="heading-3 whitespace-nowrap">{title}</h4>

      <div className="w-full py-5 px-10 bg-Neutral-200 flex justify-center">
        <p className="text-2xl font-en whitespace-nowrap">{price}</p>
      </div>

      <div className="w-full flex flex-col gap-3">
        {features.map((item, index) => (
          <div key={index} className="flex gap-2">
            <img src={check} alt="check" className="w-6 h-6" />
            {item.highlight ? (
              <div className="relative">
                <p className="relative z-10">{item.text}</p>
                <span className="absolute inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0"></span>
              </div>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PricingCard;
