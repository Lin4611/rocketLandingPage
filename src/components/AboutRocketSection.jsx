import rocketBackend from "../assets/imgs/icon/about-rocket-backend.svg";
import rocketFrontend from "../assets/imgs/icon/about-rocket-frontend.svg";
import rocketUi from "../assets/imgs/icon/about-rocket-ui.svg";

const AboutRocketSection = () => {
  const ROCKETS = [
    {
      title: "前端工程師",
      tags: ["HTML", "CSS", "JavaScript"],
      titleEn: "Front-end engineer",
      img: rocketFrontend,
    },
    {
      title: "後端工程師",
      tags: ["C#", ".Net"],
      titleEn: "Back-end engineer",
      img: rocketBackend,
    },
    {
      title: "UI 設計師",
      tags: ["Figma", "HTML", "CSS"],
      titleEn: "UI designer",
      img: rocketUi,
    },
  ];
  return (
    <>
      {/* mobile */}
      <section className="lg:hidden py-9 text-Neutral-700 bg-Primary-Blue-100 rounded-[24px]">
        <div className="w-83  mx-auto">
          <h3 className="ml-1 font-en font-bold leading-normal tracking-[0.32px]">
            About Rocket
          </h3>
          <h2 className="heading-1 mb-4">什麼是火箭隊</h2>
          <div className="mb-6 flex flex-col gap-y-6">
            <p className="body-3">
              火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI
              設計師職缺而設。
              <span className="font-bold">為期七個月的免費課程</span>
              ，學員全程參與，
              <span className="font-bold">僅需支付場地費</span>。
            </p>

            <p className="body-3">
              火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
            </p>
          </div>

          <div className="flex flex-col gap-y-6">
            {ROCKETS.map((rocket) => (
              <div
                key={rocket.title}
                className="rounded-[24px] bg-white py-4 px-5"
              >
                <h4 className="mb-2 heading-3 text-Neutral-700">
                  {rocket.title}
                </h4>
                <div className="mb-3 text-Primary-Blue-400 flex gap-x-2 ">
                  {rocket.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] tracking-[0.24px] border-2 border-Primary-Blue-300 rounded-[20px] py-2 px-4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mb-7 text-[20px] leading-normal tracking-[0.4px] text-Neutral-500">{rocket.titleEn}</div>
                <div className="flex flex-col items-center justify-center ">
                  <img
                    className="object-cover z-10"
                    src={rocket.img}
                    alt={rocket.title}
                  />
                  <div className=" w-full h-15 -mt-13 rounded-[12px] bg-Neutral-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* desktop */}
      <section className="max-lg:hidden text-Neutral-700 flex flex-wrap justify-center gap-x-33.5 bg-Primary-Blue-100 w-full mx-auto py-[60px] px-[72px] max-[1440px]:rounded-[40px]">
        <div className="w-131.5 ">
          <h3 className="ml-1 font-en font-bold text-[20px] leading-normal tracking-[0.4px]">
            About Rocket
          </h3>
          <h2 className="heading-1 mb-10">什麼是火箭隊</h2>
          <div className="mb-6 flex flex-col gap-y-6 body-1">
            <p className="">
              火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI
              設計師職缺而設。
              <span className="font-bold">為期七個月的免費課程</span>
              ，學員全程參與，
              <span className="font-bold">僅需支付場地費</span>。
            </p>

            <p className="">
              火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
            </p>
          </div>
        </div>
        <div className="w-159 h-148 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-y-8">
            {ROCKETS.map((rocket, i) => (
              <div
                key={rocket.title}
                className="h-70 rounded-[24px] flex justify-between bg-white py-9 px-9"
              >
                <div className="">
                  <h4 className="mb-3 heading-3 text-Neutral-700">
                    {rocket.title}
                  </h4>
                  <div className="mb-18 text-Primary-Blue-400 flex gap-x-3">
                    {rocket.tags.map((tag) => (
                      <div
                        key={tag}
                        className="border-2 border-Primary-Blue-300 rounded-[20px] py-2 px-4"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="font-bold text-[24px] text-Neutral-500">
                    {rocket.titleEn}
                  </div>
                </div>
                <div className="w-55 relative">
                  <img
                    className="object-cover z-10 absolute right-14 top-6"
                    src={rocket.img}
                    alt={rocket.title}
                  />
                  <div className="w-42.25 h-52 absolute right-0 rounded-[12px] bg-Neutral-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutRocketSection;
