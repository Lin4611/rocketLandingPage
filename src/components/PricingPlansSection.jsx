import PricingCard from "./PricingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const PricingPlansSection = () => {
  return (
    <section className="w-full bg-Primary-Violet-200 flex justify-center">
      <div className="w-full max-w-293 flex flex-col px-12 pb-12 pt-27.5">
        <div className="flex flex-col gap-2 mb-5 self-start">
          <h3 className="heading-2 text-Neutral-700">進駐費用</h3>
          <p className="text-Neutral-700">
            進駐區域共分兩區塊：
            <span className="font-bold">培訓區域</span> 及
            <span className="font-bold">進駐區域</span>
            ，目前僅接受租期 1 個月以上，單日暫不開放。
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          className="w-full"
          breakpoints={{
            650: {
              slidesPerView: 1.3,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            850:{
              slidesPerView: 1.8,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },1440: {
              slidesPerView: 2,
              spaceBetween: 24,
              enabled: false,
            },
          }}
        >
          <SwiperSlide className="h-auto max-w-131.5 w-full">
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
          </SwiperSlide>
          <SwiperSlide className="h-auto max-w-131.5 w-full">
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
          </SwiperSlide>
        </Swiper>
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
