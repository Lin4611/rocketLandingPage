import rocketSm from "../assets/imgs/partners/organizer-rocket-sm.png";
import hexschoolSm from "../assets/imgs/partners/organizer-hexschool-sm.png";
import gooideaSm from "../assets/imgs/partners/organizer-goodidea-sm.png";
import kdanSm from "../assets/imgs/partners/organizer-kdan-sm.png";
import titanSm from "../assets/imgs/partners/organizer-titan-sm.png";
import skwSm from "../assets/imgs/partners/organizer-skw-sm.png";
import wistronSm from "../assets/imgs/partners/organizer-wistron-sm.png";

import rocketLg from "../assets/imgs/partners/organizer-rocket-lg.png";
import hexschoolLg from "../assets/imgs/partners/organizer-hexschool-lg.png";
import gooideaLg from "../assets/imgs/partners/organizer-goodidea-lg.png";
import kdanLg from "../assets/imgs/partners/organizer-kdan-lg.png";
import titanLg from "../assets/imgs/partners/organizer-titan-lg.png";
import skwLg from "../assets/imgs/partners/organizer-skw-lg.png";
import wistronLg from "../assets/imgs/partners/organizer-wistron-lg.png";

const PartnersSection = () => {
  const data = [
    {
      role: "主辦單位",
      name: "火箭隊",
      imgSm: rocketSm,
      imgLg: rocketLg,
      imgSmWidth: "80px",
      imgLgWidth: "100px",
    },
    {
      role: "協辦單位",
      name: "六角學院",
      imgSm: hexschoolSm,
      imgLg: hexschoolLg,
      imgSmWidth: "100px",
      imgLgWidth: "120px",
    },
    {
      role: "協辦單位",
      name: "好想工作室",
      imgSm: gooideaSm,
      imgLg: gooideaLg,
      imgSmWidth: "80px",
      imgLgWidth: "100px",
    },
    {
      role: "合作招募廠商",
      name: "凱鈿科技",
      imgSm: kdanSm,
      imgLg: kdanLg,
      imgSmWidth: "140px",
      imgLgWidth: "160px",
    },
    {
      role: "合作招募廠商",
      name: "鈦坦科技",
      imgSm: titanSm,
      imgLg: titanLg,
      imgSmWidth: "80px",
      imgLgWidth: "100px",
    },
    {
      role: "合作招募廠商",
      name: "坂和企業",
      imgSm: skwSm,
      imgLg: skwLg,
      imgSmWidth: "80px",
      imgLgWidth: "100px",
    },
    {
      role: "合作招募廠商",
      name: "緯創資通",
      imgSm: wistronSm,
      imgLg: wistronLg,
      imgSmWidth: "120px",
      imgLgWidth: "150px",
    },
  ];
  return (
    <section className="bg-Neutral-200 ">
      {/* mobile */}
      <div className="lg:hidden   text-Neutral-700 pl-12 py-4">
        <h3 className="-mt-8 mb-4 heading-3 leading-normal">主辦、協辦單位</h3>
        <ul className="flex  gap-x-5 overflow-x-scroll scrollbar-hide">
          {data.map((d) => {
            return (
              <li className="">
                <div className="img mb-3 w-39 h-30 rounded-[12px] bg-white flex justify-center items-center">
                  <img
                    className="object-cover max-h-20 "
                    src={d.imgSm}
                    alt={d.name}
                    style={d.imgLgWidth ? { maxWidth: d.imgLgWidth } : ""}
                  />
                </div>
                <div className="text-[14px] leading-normal tracking-[0.28px] ">
                  <h4 className="font-bold">{d.role}</h4>
                  <p className="font-normal">{d.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* desktop */}
      <div className="max-lg:hidden text-Neutral-700 max-w-[1512px] mx-auto pl-18 pb-4">
        <h3 className="relative top-[-20px] mb-[12px] heading-3 leading-normal">
          主辦、協辦單位
        </h3>
        <ul className="flex max-w[1368px] gap-x-6 overflow-x-scroll scrollbar-hide">
          {data.map((d) => {
            return (
              <li className="" key={d.name}>
                <div className="img mb-4 w-49 h-37 rounded-[12px] bg-white flex justify-center items-center">
                  <img
                    className="object-contain max-w-40 max-h-25"
                    src={d.imgLg}
                    alt={d.name}
                    style={d.imgLgWidth ? { maxWidth: d.imgLgWidth } : ""}
                  />
                </div>
                <div className="text-[16px] leading-normal tracking-[0.28px] ">
                  <h4 className="font-bold mb-1">{d.role}</h4>
                  <p className="font-normal">{d.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;
