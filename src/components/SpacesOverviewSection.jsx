import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";

import "swiper/css";


const SpacesInfo = [
  {
    id: 1,
    category: "硬體",
    name: "rest",
    title: "很 chill 的休憩區",
    discription: (<>我們貼心提供 <span className="font-bold">飲水機、冰箱、微波爐、果汁機、膠囊咖啡機</span> 及不定時茶包及小餅乾零食，我們想讓在工作認真打拼之餘的你也是需要中場休息補充能量，然後再輕鬆泡上一杯咖啡坐在吧台或懶骨頭放空冥想，讓自己 chill 一下轉換心情！</>),
  },
  {
    id: 2,
    category: "硬體",
    name: "discuss",
    title: "舒適沙發討論區",
    discription:
      "如果你有想要與夥伴們討論事情這裡也很適合三、五人一起共同開會討論哦！",
  },
  {
    id: 3,
    category: "硬體",
    name: "workspace",
    title: "進駐者區域",
    discription: [
      "我們的目標是凝聚更多開發者，為他們提供一個充滿活力的交流空間。在這裡，開發者可以互相學習、分享，透過交流讓自己的技能和視野得到更快速的成長。我們相信，一個好的環境能夠激發創意，促進專業能力的提升。",
      "我們希望將這樣的場域擴展至高雄，誠摯地邀請您加入我們，一起為開發者打造一個交流與學習的樂園，讓大家在這裡彼此成長，共同推動科技產業的進步。",
    ],
  },

  {
    id: 4,
    category: "服務",
    name: "coffee",
    title: "咖啡、茶水",
    discription: `飲水機、冰箱、微波爐、果汁機、
      膠囊咖啡機及不定時茶包及小餅乾零食`,
  },
  {
    id: 5,
    category: "服務",
    name: "wifi",
    title: "超快速網路",
    discription: `使用 Wifi Mesh，
    讓你在場域中都有順暢的網路`,
  },
  {
    id: 6,
    category: "服務",
    name: "chair",
    title: "舒服的桌椅",
    discription: `白色辦公桌設計簡潔大方，搭配上人體工學椅，
      讓您的身體在長時間辦公後仍能保持舒適`,
  },
  {
    id: 7,
    category: "服務",
    name: "chat",
    title: "與火箭隊培訓營交流",
    discription: `進駐者能夠與開發團隊暢通無阻地交流，
      共同分享各自的專業知識和經驗。`,
  },
  {
    id: 8,
    category: "服務",
    name: "traffic",
    title: "便捷的交通",
    discription: `共享空間位於捷運信義國小站附近，
    為您提供極佳的交通便利性。`,
  },
  {
    id: 9,
    category: "服務",
    name: "food",
    title: "超多美食在附近",
    discription: `無論你要日式、西式、台式，
    各種美食應有盡有`,
  },
];

const carouselPhotoList = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  url: new URL(
    `../assets/imgs/carousel/carousel${index + 1}-lg.png`,
    import.meta.url
  ).href,
}));

const getSpaceImgsUrl = (name, size) => {
  return new URL(
    `../assets/imgs/intro/intro-${name}-${size}-3x.png`,
    import.meta.url
  ).href;
};

const getIconsUrl = (name) => {
  return new URL(`../assets/imgs/icon/ic-${name}-lg.svg`, import.meta.url).href;
};

const SpacesOverviewSection = () => {
  return (
    <>
      <section className="flex flex-col items-center pt-12 w-full px-12 max-w-269 mx-auto lg:px-0 xl:pt-20">
        <h2 className="heading-2 text-Neutral-700 mb-4 xl:mb-15">場域說明</h2>
        {/* 硬體區塊 */}
        <div className="w-full flex justify-start mb-4 xl:mb-6">
          <h4 className="heading-4 text-Neutral-700 bg-[linear-gradient(180deg,transparent_35%,var(--color-accent-orange)_30%)]">
            #硬體
          </h4>
        </div>
        <div className="w-full grid grid-cols-1 gap-10">
          {SpacesInfo.filter((item) => item.category === "硬體").map(
            (space, index) => (
              <div
                key={space.id}
                className={`flex flex-col gap-4 lg:${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } lg:items-center lg:gap-10`}
              >
                <div className="w-full lg:w-131.5">
                  <picture>
                    <source
                      srcSet={getSpaceImgsUrl(space.name, "lg")}
                      media="(min-width:1024px)"
                    />
                    <img
                      src={getSpaceImgsUrl(space.name, "sm")}
                      alt={space.title}
                      className="w-full h-auto object-contain"
                    />
                  </picture>
                </div>
                <div className="flex flex-col gap-2 lg:w-123.5">
                  <p className="body-1 text-Neutral-700 font-bold">
                    \ {space.title} /
                  </p>
                  {/* 部分項目的敘述是陣列，需分段渲染 */}
                  {Array.isArray(space.discription) ? (
                    space.discription.map((text, index) => (
                      <p
                        key={index}
                        className="text-Neutral-600 text-[14px] mb-1 md:text-[16px]"
                      >
                        {text}
                      </p>
                    ))
                  ) : (
                    <p className="text-Neutral-600 text-[14px] md:text-[16px]">
                      {space.discription}
                    </p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
        {/* 服務區塊 */}
        <div className="w-full max-w-269 flex justify-start mt-12 mb-7 xl:mt-19 xl:mb-8">
          <h4 className="heading-4 text-Neutral-700 bg-[linear-gradient(180deg,transparent_35%,var(--color-accent-orange)_30%)]">
            #服務
          </h4>
        </div>
        <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
          {SpacesInfo.filter((item) => item.category === "服務").map(
            (service) => (
              <div
                key={service.id}
                className="flex gap-4 md:flex-col md:items-center md:text-center"
              >
                <div className="w-12 min-w-12 md:w-20 lg:w-30 shrink-0">
                  <img
                    src={getIconsUrl(service.name)}
                    alt={service.title}
                    className="w-full aspect-square"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-Neutral-700 font-bold md:text-[18px]">
                    {service.title}
                  </p>
                  <p className="text-Neutral-600 text-[14px] md:whitespace-pre-line">
                    {service.discription}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      {/* 照片輪播區 */}
        <div className="w-full max-w-360 pt-10 pl-12 pb-12 lg:px-0 lg:mx-auto xl:py-20 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1.15}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true}}
            allowTouchMove={true}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2.2, centeredSlides: true },
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {carouselPhotoList.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="w-full aspect-[1.5/1] overflow-hidden r-sm">
                  <img src={photo.url} alt={`空間實景照${photo.id}`} className="h-full w-full object-cover"/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
    </>
  );
};

export default SpacesOverviewSection;
