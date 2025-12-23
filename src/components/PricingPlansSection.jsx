import check from "../assets/imgs/icon/ic-check-lg.svg";
const PricingPlansSection = () => {

  return (
    <section className="w-full flex flex-col items-center justify-center bg-Primary-Violet-200 px-12 pb-12 ">
      <div className="flex flex-col gap-2 mb-5 self-start">
        <h3 className="heading-2 text-Neutral-700">進駐費用</h3>
        <p className="text-Neutral-700">
          進駐區域共分兩區塊：<span className="font-bold">培訓區域</span> 及{" "}
          <span className="font-bold">進駐區域</span>，目前僅接受租期 1
          個月以上，單日暫不開放。
        </p>
      </div>
      <div className="w-full flex gap-5 overflow-x-auto transform-all duration-300 lg:gap-6">
        <div className="max-w-83.25 shrink-0 p-8 flex flex-col gap-4 items-center r-md bg-Neutral-white text-Neutral-700 active:border-2 active:border-Neutral-700">
          <h4 className="heading-3">進駐者</h4>
          <div className="w-full py-5 px-10 bg-Neutral-200 flex items-center justify-center">
            <p className="heading-3 font-en whitespace-nowrap">
              $ 3,200 / Month
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <div className="relative">
                <p className="relative z-10">進駐區域</p>
                <span className="absolute -inset-y-0.1 inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0"></span>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>9:00-18:00 可使用</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <div className="relative">
                <p className="relative z-10">固定座位</p>
                <span className="absolute -inset-y-0.1 inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0"></span>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <div className="relative">
                <p className="relative z-10">專屬置物櫃</p>
                <span className="absolute -inset-y-0.1 inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0"></span>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>免費無線網路</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>免費咖啡茶水</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>原價｜3,500 / Month</p>
            </div>
          </div>
        </div>
        <div className="smax-w-83.25 shrink-0 p-8 flex flex-col gap-4 items-center r-md bg-Neutral-white text-Neutral-700 active:border-2 active:border-Neutral-700">
          <h4 className="heading-3 whitespace-nowrap">單日使用（暫不提供）</h4>
          <div className="w-full py-5 px-10 bg-Neutral-200 flex items-center justify-center">
            <p className="heading-3 font-en whitespace-nowrap">$ 300 / Day</p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>培訓區域</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>9:00-18:00 可使用</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>非固定座位</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>共用置物櫃</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>免費無線網路</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>免費咖啡茶水</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="check" className="w-6 h-6 aspect-square" />
              <p>原價｜300 / Day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingPlansSection;
