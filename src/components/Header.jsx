import rocket_sm from "../assets/imgs/icon/banner-logo-rocket-sm.svg";
import rocket_card_btn_sm from "../assets/imgs/icon/banner-btn-rocket-sm.svg";
import rocket_card_highlight_sm from "../assets/imgs/icon/ic-highlight-coworking-sm.svg";
import coworkin_sm from "../assets/imgs/icon/banner-logo-coworking-sm.svg";
import coworkin_card_btn_sm from "../assets/imgs/icon/banner-btn-coworking-sm.svg";
import coworkin_card_highlight_sm from "../assets/imgs/icon/ic-highlight-rocket-sm.svg";
import rocket_lg from "../assets/imgs/icon/banner-logo-rocket-lg.svg";
import rocket_card_btn_lg from "../assets/imgs/icon/banner-btn-rocket-lg.svg";
import rocket_card_highlight_lg from "../assets/imgs/icon/ic-highlight-coworking-lg.svg";
import coworkin_lg from "../assets/imgs/icon/banner-logo-coworking-lg.svg";
import coworkin_card_btn_lg from "../assets/imgs/icon/banner-btn-coworking-lg.svg";
import coworkin_card_highlight_lg from "../assets/imgs/icon/ic-highlight-rocket-lg.svg";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
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
    link_path:'/'
  },
  {
    id: 2,
    title: "共同空間",
    en_title: "Co-working Space",
    imgUrl: coworkin_sm,
    drop_shadow: "drop-shadow-[8px_8px_0_#EEE5FF]",
    btn_color: "bg-Primary-Violet-200",
    btn: coworkin_card_btn_sm,
    highlight_pic: coworkin_card_highlight_sm,
    link_path:'/coworkingSpace'
  },
];
const bannerTextListLg = [
  {
    id: 1,
    title: "火箭隊",
    subTitle: "Bootcamp Rocket",
    desc: ["# 軟體工程師培訓營", "# 全程免費的扎實訓練", "# 帶你翻轉人生！"],
    img: rocket_lg,
    btn_color: "bg-Primary-Blue-200",
    btn: rocket_card_btn_lg,
    drop_shadow: "shadow-[8px_8px_0_#BFC9F0]",
    highlight_pic: rocket_card_highlight_lg,
    link_path:'/'
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
    btn_color: "bg-Primary-Violet-200",
    drop_shadow: "shadow-[8px_8px_0_#EEE5FF]",
    highlight_pic: coworkin_card_highlight_lg,
    link_path:'/coworkingSpace'
  },
];
const Header = () => {
  const [isSelected, setIsSelected] = useState("火箭隊");
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <div className="w-full relative flex flex-col justify-between items-center py-15 px-10 gap-12 transform-all duration-300 md:hidden lg:hidden">
        <div
          className={`${banner_bg} absolute inset-0 bg-repeat opacity-50 z-0`}
        ></div>
        {bannerTextList.map((item) => {
          const isActive = isSelected === item.title;
          return (
            <Link
              to={item.link_path}
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
                className={`w-full flex-1 flex flex-col bg-Neutral-white border-2 border-Neutral-300 r-md py-6 pl-6 gap-2  z-2 ${
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
                  <h1 className="heading-1 text-neutral-700 whitespace-nowrap md:text-2xl">
                    {item.title}
                  </h1>
                </div>
                <h2 className="heading-4 font-en text-Neutral-500 pl-1 font-bold">
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
            </Link>
          );
        })}
      </div>
      <div
        className={`hidden w-full relative md:flex lg:flex justify-center items-center md:gap-15 lg:gap-20.5 ${banner_bg} absolute inset-0 bg-repeat pt-23 pb-30.5 px-12 transform-all duration-300`}
      >
        {bannerTextListLg.map((item, index) => {
          const isActive =
            isSelected === item.title || hoveredItem === item.title;

          return (
            <React.Fragment key={item.id}>
              <Link
              to={item.link_path}
                className={`w-full max-w-110 flex items-center z-5 relative cursor-pointer transform-all duration-300 ${
                  isSelected !== item.title ? "hover:-mt-4" : ""
                }`}
                onClick={() => {
                  setIsSelected(item.title);
                }}
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`w-full flex flex-col r-lg border-2 border-Neutral-300 bg-Neutral-white gap-6 items-center relative ${
                    isSelected === item.title
                      ? item.drop_shadow
                      : "drop-shadow-none"
                  }`}
                >
                  <img
                    src={item.highlight_pic}
                    alt={item.title}
                    className={`absolute w-10 h-12 object-contain -right-10 -top-10 ${
                      isSelected === item.title ? "block" : "hidden"
                    }`}
                  />
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/60 z-20 pointer-events-none rounded-[inherit]" />
                  )}
                  <div
                    className={`w-full max-w-52.75 flex flex-col items-center justify-center -mt-7  lg:-mt-9 relative z-30 ${
                      !isActive ? "opacity-60" : ""
                    }`}
                  >
                    <h1 className="text-[36px] text-Neutral-700 lg:text-[48px] font-bold">
                      {item.title}
                    </h1>
                    <h2 className="font-en text-neutral-500 text-2xl font-bold">
                      {item.subTitle}
                    </h2>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 max-w-66">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-31 h-31 aspect-square object-contain"
                    />
                    <div className="flex flex-col justify-center items-center">
                      {item.desc.map((text) => (
                        <span
                          className="text-[16px] font-bold leading-[1.75] text-neutral-700 lg:text-xl"
                          key={text}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-30 h-35.75 relative flex items-center justify-center shrink-0 -mb-15.5">
                    <div
                      className={`absolute shrink-0 w-30 h-15 ${item.btn_color} rounded-b-full bottom-0`}
                    >
                      {!isActive && (
                        <div className="absolute inset-0 bg-white/60 z-10 pointer-events-none" />
                      )}
                    </div>
                    <img
                      src={item.btn}
                      alt={item.title}
                      className={`w-25 h-27 object-cover z-30 ${
                        !isActive ? "opacity-60" : ""
                      }`}
                    />
                  </div>
                </div>
              </Link>
              {index !== bannerTextListLg.length - 1 && (
                <div className="heading-1 text-neutral-700 px-4 select-none">
                  X
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </header>
  );
};
export default Header;
