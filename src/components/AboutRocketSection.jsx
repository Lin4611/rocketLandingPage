import rocketBackend from "../assets/imgs/icon/about-rocket-backend.svg";
import rocketFrontend from "../assets/imgs/icon/about-rocket-frontend.svg";
import rocketUi from "../assets/imgs/icon/about-rocket-ui.svg";

const AboutRocketSection = () => {
  return (
    <>
      {/* mobile */}
      <section className="lg:hidden  py-[36px] px-[24px] bg-[rgba(229,235,255,1)] rounded-[24px]">
        <div className="max-w-[428px] w-full mx-auto">
          <h3 className="text-neutral-700 font-en text-[700] leading-[1.5] tracking-[0.32px]">
            About Rocket
          </h3>
          <h2 className="heading-1 mb-[16px]">什麼是火箭隊</h2>
          <div className="mb-[24px] flex flex-col gap-y-[24px]">
            <p className="body-3">
              火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI
              設計師職缺而設。
              <span className="font-[700]">為期七個月的免費課程</span>
              ，學員全程參與，
              <span className="font-[700]">僅需支付場地費</span>。
            </p>

            <p className="body-3">
              火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
            </p>
          </div>

          <div className="flex flex-col gap-y-[24px]">
            <div className="rounded-[24px] bg-[#fff] py-[16px] px-[20px]">
              <h4 className="mb-[8px] heading-3 text-[rgba(54,54,54,1)]">
                前端工程師
              </h4>
              <div className="mb-[12px] text-Primary-Blue-400 flex gap-x-[8px]">
                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  HTML
                </div>
                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  CSS
                </div>

                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  JavaScript
                </div>
              </div>
              <div className="mb-[28px] text-[rgba(154,154,154,1)]">
                Front-end engineer
              </div>
              <div className="flex flex-col items-center justify-center ">
                <img
                  className="object-cover z-10"
                  src={rocketFrontend}
                  alt=""
                />
                <div className="px-[20px] w-full h-[60px] mt-[-52px] rounded-[12px] bg-neutral-200"></div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#fff] py-[16px] px-[20px]">
              <h4 className="mb-[8px] heading-3 text-[rgba(54,54,54,1)]">
                後端工程師
              </h4>
              <div className="mb-[12px] text-Primary-Blue-400 flex gap-x-[8px]">
                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  C#
                </div>
                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  .Net
                </div>

                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  JavaScript
                </div>
              </div>
              <div className="mb-[28px] text-[rgba(154,154,154,1)]">
                Back-end engineer
              </div>
              <div className="flex flex-col items-center justify-center ">
                <img className="object-cover z-10" src={rocketBackend} alt="" />
                <div className="px-[20px] w-full h-[60px] mt-[-52px] rounded-[12px] bg-neutral-200"></div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#fff] py-[16px] px-[20px]">
              <h4 className="mb-[8px] heading-3 text-[rgba(54,54,54,1)]">
                前端工程師
              </h4>
              <div className="mb-[12px] text-Primary-Blue-400 flex gap-x-[8px]">
                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  Figma
                </div>

                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  HTML
                </div>
                <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                  CSS
                </div>
              </div>
              <div className="mb-[28px] text-[rgba(154,154,154,1)]">
                UI designer
              </div>
              <div className="flex flex-col items-center justify-center ">
                <img className="object-cover z-10" src={rocketUi} alt="" />
                <div className="px-[20px] w-full h-[60px] mt-[-52px] rounded-[12px] bg-neutral-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* desktop */}
      <section className="max-lg:hidden  flex flex-wrap justify-center gap-x-[72px] bg-Primary-Blue-100 w-full mx-auto py-[60px] px-[72px] max-xl:rounded-[40px]">
        <div className="w-[526px] ">
          <h3 className="text-neutral-700 font-en text-[700] text-[20px] leading-[1.5] tracking-[0.4px]">
            About Rocket
          </h3>
          <h2 className="heading-1 mb-[16px]">什麼是火箭隊</h2>
          <div className="mb-[24px] flex flex-col gap-y-[24px] body-3 text-[20px]">
            <p className="">
              火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI
              設計師職缺而設。
              <span className="font-[700]">為期七個月的免費課程</span>
              ，學員全程參與，
              <span className="font-[700]">僅需支付場地費</span>。
            </p>

            <p className="">
              火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
            </p>
          </div>
        </div>
        <div className="w-[636px] h-[592px] overflow-y-auto ">
          <div className="flex flex-col gap-y-[32px]">
            <div className="h-[280px] rounded-[24px] flex justify-between bg-[#fff] py-[36px] px-[36px]">
              <div className="">
                <h4 className="mb-[12px] heading-3 text-[rgba(54,54,54,1)]">
                  前端工程師
                </h4>
                <div className="mb-[72px] text-Primary-Blue-400 flex gap-x-[8px]">
                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    HTML
                  </div>
                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    CSS
                  </div>

                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    JavaScript
                  </div>
                </div>
                <div className="font-[700] text-[24px] tracking-[1.5] leading-[1.2px] text-[rgba(154,154,154,1)]">
                  Front-end engineer
                </div>
              </div>
              <div className="w-[216px] relative">
                <img
                  className="object-cover z-10 absolute right-[40px] top-[24px]"
                  src={rocketFrontend}
                  alt=""
                />
                <div className="px-[20px] w-[169px] h-[208px] absolute right-0 rounded-[12px] bg-neutral-200"></div>
              </div>
            </div>

            <div className="h-[280px] rounded-[24px] flex justify-between bg-[#fff] py-[36px] px-[36px]">
              <div className="">
                <h4 className="mb-[12px] heading-3 text-[rgba(54,54,54,1)]">
                  後端工程師
                </h4>
                <div className="mb-[72px] text-Primary-Blue-400 flex gap-x-[8px]">
                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    C#
                  </div>
                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    .Net
                  </div>
                </div>
                <div className="font-[700] text-[24px] tracking-[1.5] leading-[1.2px] text-[rgba(154,154,154,1)]">
                  Back-end engineer
                </div>
              </div>
              <div className="w-[216px] relative">
                <img
                  className="object-cover z-10 absolute right-[40px] top-[24px]"
                  src={rocketBackend}
                  alt=""
                />
                <div className="px-[20px] w-[169px] h-[208px] absolute right-0 rounded-[12px] bg-neutral-200"></div>
              </div>
            </div>

            <div className="h-[280px] rounded-[24px] flex justify-between bg-[#fff] py-[36px] px-[36px]">
              <div className="">
                <h4 className="mb-[12px] heading-3 text-[rgba(54,54,54,1)]">
                  UI 設計師
                </h4>
                <div className="mb-[72px] text-Primary-Blue-400 flex gap-x-[8px]">
                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    Figma
                  </div>
                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    HTML
                  </div>
                  <div className="border-2 border-Primary-Blue-300 rounded-[20px] py-[8px] px-[16px]">
                    CSS
                  </div>
                </div>
                <div className="font-[700] text-[24px] tracking-[1.5] leading-[1.2px] text-[rgba(154,154,154,1)]">
                  UI designer
                </div>
              </div>
              <div className="w-[216px] relative">
                <img
                  className="object-cover z-10 absolute right-[40px] top-[24px]"
                  src={rocketUi}
                  alt=""
                />
                <div className="px-[20px] w-[169px] h-[208px] absolute right-0 rounded-[12px] bg-neutral-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutRocketSection;
