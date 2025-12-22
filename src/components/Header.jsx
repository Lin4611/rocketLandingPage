import * as Motion from "motion/react-client";
import rocket_sm from "../assets/imgs/icon/banner-logo-rocket-sm.svg";
import rocket_card_btn_sm from "../assets/imgs/icon/banner-btn-rocket-sm.svg";
import rocket_card_highlight_sm from "../assets/imgs/icon/ic-highlight-coworking-sm.svg";
import coworkin_sm from "../assets/imgs/icon/banner-logo-coworking-sm.svg";
import coworkin_card_btn_sm from "../assets/imgs/icon/banner-btn-coworking-sm.svg";
import coworkin_card_btn_highlight from "../assets/imgs/icon/ic-highlight-rocket-sm.svg";
import rocket_lg from "../assets/imgs/icon/banner-logo-rocket-lg.svg";
import rocket_card_btn_lg from "../assets/imgs/icon/banner-btn-rocket-lg.svg";
import rocket_card_highlight_lg from "../assets/imgs/icon/ic-highlight-rocket-lg.svg";
import coworkin_lg from "../assets/imgs/icon/banner-logo-coworking-lg.svg";
import coworkin_card_btn_lg from "../assets/imgs/icon/banner-btn-coworking-lg.svg";
import coworkin_card_highlight_lg from "../assets/imgs/icon/ic-highlight-coworking-lg.svg";
import { useState } from "react";
import React from "react";

const marqueeTexts = [
  "Let's join",
  "．火箭隊培訓營 Rocket",
  "．共同空間 Co-working space",
];
const banner_bg = `bg-[url('../assets/imgs/bg/banner-bg.png')]`;
const bannerTextList = [
  {
    id: 1,
    title: "火箭隊",
    en_title: "Bootcamp Rocket",
    imgUrl: rocket_sm,
    btn_color: "bg-Primary-Blue-200",
    drop_shadow: "drop-shadow-[8px_8px_0_#BFC9F0]",
    btn: rocket_card_btn_sm,
    highlight_pic: rocket_card_highlight_sm,
  },
  {
    id: 2,
    title: "共同空間",
    en_title: "Co-working Space",
    imgUrl: coworkin_sm,
    drop_shadow: "drop-shadow-[8px_8px_0_#EEE5FF]",
    btn_color: "bg-Primary-Violet-200",
    btn: coworkin_card_btn_sm,
    highlight_pic: coworkin_card_btn_highlight,
  },
];
const bannerTextListLg = [
  {
    id: 1,
    title: "火箭隊",
    subTitle: "Bootcamp Rocket",
    desc: ["# 軟體工程師培訓營", "# 全程免費的扎實訓練", "# 帶你翻轉人生！"],
    img: rocket_lg,
    btn: rocket_card_btn_lg,
    highlight_pic: rocket_card_highlight_lg,
  },
  {
    id: 2,
    title: "共同空間",
    subTitle: "Co-working Space",
    desc: [
      "# 超 chill 的共同工作場域",
      "# 餅乾、零食、咖啡應有盡有",
      "# 等你來一同交流成長",
    ],
    img: coworkin_lg,
    btn: coworkin_card_btn_lg,
    highlight_pic: coworkin_card_highlight_lg,
  },
];
const Header = () => {
  const [isSelected, setIsSelected] = useState("火箭隊");
  return (
    <header className="w-full py-2">
      <div className="overflow-hidden w-full flex bg-Neutral-white sticky">
        <Motion.div
          className="w-full flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="flex gap-4 px-4 py-3">
            {marqueeTexts.map((text, i) => (
              <span key={`a-${i}`}>{text}</span>
            ))}
          </div>
          <div className="flex gap-4 px-4 py-3">
            {marqueeTexts.map((text, i) => (
              <span key={`b-${i}`}>{text}</span>
            ))}
          </div>
        </Motion.div>
      </div>
      <div className="w-full relative flex flex-col justify-between items-center py-15 px-10 gap-12 lg:hidden">
        <div
          className={`${banner_bg} absolute inset-0 bg-repeat opacity-50 z-0`}
        ></div>
        {bannerTextList.map((item) => {
          const isActive = isSelected === item.title;
          return (
            <div
              className="w-full relative max-w-100 flex items-center z-5"
              key={item.id}
              onClick={() => {
                setIsSelected(item.title);
              }}
            >
              {!isActive && (
                <div className="absolute inset-0 bg-white/60 z-20" />
              )}
              <img
                src={item.highlight_pic}
                alt="highlight"
                className={`absolute w-9 h-10 object-contain -top-5 -left-5 z-10 ${
                  isSelected === item.title ? "block" : "hidden"
                }`}
              />
              <div
                className={`w-full flex-1 flex flex-col bg-Neutral-white border-2 border-Neutral-300 r-md py-6 pl-6 gap-2 max-w-73.5 z-2 ${
                  isSelected === item.title
                    ? item.drop_shadow
                    : "drop-shadow-none"
                }`}
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-12 h-12 aspect-square object-contain"
                  />
                  <h1 className="heading-1 text-neutral-700 whitespace-nowrap">
                    {item.title}
                  </h1>
                </div>
                <h2 className="heading-4 font-en text-Neutral-500 pl-1">
                  {item.en_title}
                </h2>
              </div>
              <div className="w-18 h-20 relative flex items-center justify-center shrink-0 -ml-8.5">
                <div
                  className={`absolute shrink-0 w-9.5 h-20 ${item.btn_color} rounded-r-full right-0`}
                ></div>
                <img
                  src={item.btn}
                  alt={item.title}
                  className="absolute z-10 w-15 h-15 aspect-square object-contain left-0"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`hidden w-full relative lg:flex justify-between items-center max-w-360 ${banner_bg} absolute inset-0 bg-repeat px-34.5 pt-23 pb-30.5`}
      >
        {bannerTextListLg.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="w-full max-w-110 flex flex-col items-center r-lg border-2 border-Neutral-300 bg-Neutral-white gap-6">
              <div className="flex flex-col items-center justify-center -mt-9">
                <h1 className="heading-1 text-Neutral-700">{item.title}</h1>
                <h2 className="font-en text-neutral-500 text-xl font-bold leading-1.75 tracking-[0.02em]">
                  {item.subTitle}
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-31 h-31 aspect-square object-contain"
                />
                <div className="flex flex-col justify-center items-center">
                  {item.desc.map((text) => (
                    <span className="heading-4 text-neutral-700" key={text}>
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};
export default Header;
