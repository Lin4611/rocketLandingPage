import PricingCard from "./PricingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import icon_go from "../assets/imgs/icon/ic-go-coworking.svg";
const PricingPlansSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  return (
    <section className="w-full bg-Primary-Violet-200 flex justify-center">
      <div className="w-full max-w-293 flex flex-col px-12 pb-12 pt-9 relative lg:pt-15 lg:pb-20 ">
        <div className="relative mb-7.25 max-w-116.5 w-full md:mb-6.25 md:pl-20">
          <p className="r-sm outline-2 outline-Neutral-700  bg-white px-2.5 py-3 text-Neutral-700 text-sm md:px-4 md:text-base">
            <span className="font-en font-bold">2023</span>
            <span> 年為試營運階段，進駐可享有</span>
            <span className="font-bold">限定優惠價！</span>
          </p>
          <span
            className="
                        absolute left-5.5 md:left-23 -bottom-3.75
                        h-0 w-0
                        border-l-13 border-l-transparent
                        border-r-12 border-r-transparent
                        border-t-15 border-t-Neutral-700"
          />
          <span
            className="
                        absolute left-6 md:left-23 -bottom-3
                        h-0 w-0
                        border-l-11 border-l-transparent
                        border-r-11 border-r-transparent
                        border-t-15 border-t-white"
          />
        </div>
        <div className="flex flex-col gap-2 mb-5 self-start ">
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
            850: {
              slidesPerView: 1.8,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1440: {
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
              isActive={activeIndex === 0}
              onClick={() => setActiveIndex(0)}
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
              isActive={activeIndex === 1}
              onClick={() => setActiveIndex(1)}
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

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScEUjtPalxIGn0dVgO_1VLFxuq7is_0VUYROiGzktwze5QARw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center bg-Primary-Violet-200 border-2 border-Neutral-700 r-md mt-8 h-24"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          onClick={() => {
            setIsHover(false);
          }}
        >
          <span className="heading-3 text-Neutral-700">馬上填表單!</span>
          <img
            src={icon_go}
            alt="go"
            className={`w-16 h-16 aspect-square ${
              isHover ? "scale-100 ml-5" : "scale-0"
            } transition-all duration-300 hidden lg:block`}
          />
        </a>
      </div>
    </section>
  );
};

export default PricingPlansSection;
