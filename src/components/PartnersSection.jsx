import rocketSm from "../assets/imgs/partners/organizer-rocket-sm.png";
import hexschoolSm from "../assets/imgs/partners/organizer-hexschool-sm.png";
import gooideaSm from "../assets/imgs/partners/organizer-goodidea-sm.png";
import kdanSm from "../assets/imgs/partners/organizer-kdan-sm.png";
import titanSm from "../assets/imgs/partners/organizer-titan-sm.png";
import skwSm from "../assets/imgs/partners/organizer-skw-sm.png";
import wistronSm from "../assets/imgs/partners/organizer-wistron-sm.png";

const PartnersSection = () => {
  const data = [
    {
      role: "主辦單位",
      name: "火箭隊",
      imgSm: rocketSm,
    },
    {
      role: "協辦單位",
      name: "六角學院",
      imgSm: hexschoolSm,
    },
    {
      role: "協辦單位",
      name: "好想工作室",
      imgSm: gooideaSm,
    },
    {
      role: "合作招募廠商",
      name: "凱鈿科技",
      imgSm: kdanSm,
    },
    {
      role: "合作招募廠商",
      name: "鈦坦科技",
      imgSm: titanSm,
    },
    {
      role: "合作招募廠商",
      name: "坂和企業",
      imgSm: skwSm,
    },
    {
      role: "合作招募廠商",
      name: "緯創資通",
      imgSm: wistronSm,
    },
  ];
  return (
    <section className="bg-Neutral-200  px-[48px] py-[16px]">
      <h3 className="mt-[-32px] mb-[16px] heading-3 leading-[1.5]">
        主辦、協辦單位
      </h3>
      <ul className="flex gap-x-[20px] overflow-x-scroll">
        {/* <li className="">
          <div className="img mb-[12px] w-[156px] h-[120px] py-[20px] px-[28px] rounded-[12px] bg-white flex justify-center items-center">
            <img className="object-cover w-full" src={rocketSm} alt="" />
          </div>
          <div className="text-[14px] leading-[1.5] tracking-[0.28px] ">
            <h4 className="font-[700]">主辦單位</h4>
            <p className="font-[400]">火箭隊</p>
          </div>
        </li> */}

        {data.map((d) => {
          return (
            <li className="">
              <div className="img mb-[12px] w-[156px] h-[120px] py-[20px] px-[28px] rounded-[12px] bg-white flex justify-center items-center">
                <img className="object-cover w-full" src={d.imgSm} alt="" />
              </div>
              <div className="text-[14px] leading-[1.5] tracking-[0.28px] ">
                <h4 className="font-[700]">{d.role}</h4>
                <p className="font-[400]">{d.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PartnersSection;
