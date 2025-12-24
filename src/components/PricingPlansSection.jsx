import PricingCard from "./PricingCard";

const PricingPlansSection = () => {
  return (
    <section className="w-full bg-Primary-Violet-200 flex justify-center">
      <div className="w-full max-w-269 flex flex-col px-12 pb-12 pt-27.5">
        <div className="flex flex-col gap-2 mb-5 self-start">
          <h3 className="heading-2 text-Neutral-700">進駐費用</h3>
          <p className="text-Neutral-700">
            進駐區域共分兩區塊：
            <span className="font-bold">培訓區域</span> 及
            <span className="font-bold">進駐區域</span>
            ，目前僅接受租期 1 個月以上，單日暫不開放。
          </p>
        </div>
        <div className="w-full flex gap-5 overflow-x-auto transform-all duration-300 lg:gap-6">
          <PricingCard
            title="進駐者"
            price="$ 3,200 / Month"
            features={[
              { text: "進駐區域", highlight: true },
              { text: "9:00-18:00 可使用" },
              { text: "固定座位", highlight: true },
              { text: "專屬置物櫃", highlight: true },
              { text: "免費無線網路" },
              { text: "免費咖啡茶水" },
              { text: "原價｜3,500 / Month" },
            ]}
          />

          <PricingCard
            title="單日使用（暫不提供）"
            price="$ 300 / Day"
            features={[
              { text: "培訓區域" },
              { text: "9:00-18:00 可使用" },
              { text: "非固定座位" },
              { text: "共用置物櫃" },
              { text: "免費無線網路" },
              { text: "免費咖啡茶水" },
              { text: "原價｜300 / Day" },
            ]}
          />
        </div>

        <div className="w-full flex justify-center items-center bg-Primary-Violet-200 border-2 border-Neutral-700 r-md mt-8 py-4 lg:py-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScEUjtPalxIGn0dVgO_1VLFxuq7is_0VUYROiGzktwze5QARw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="heading-3 text-Neutral-700"
          >
            馬上填表單!
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
