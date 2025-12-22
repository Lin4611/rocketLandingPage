import bgImgPath from "../assets/imgs/bg/training-bg.png";
import frontEndImgSm from "../assets/imgs/icon/training-img-frontend-sm.svg";
import backendImgSm from "../assets/imgs/icon/training-img-backend-sm.svg";
import UiUxImgSm from "../assets/imgs/icon/training-img-ui-sm.svg";
import coachWeijie from "../assets/imgs/coach/coach-weijie-3x.png";
import coachYinmin from "../assets/imgs/coach/coach-yinmin-3x.png";
import coachJustin from "../assets/imgs/coach/coach-justin-3x.png";
import coachCasper from "../assets/imgs/coach/coach-casper-3x.png";

const TrainingProgramsSection = () => {
  return (
    <>
      <section className="flex flex-col items-center bg-Neutral-100">
        <h2 className="heading-2! text-Neutral-700 text-center -mt-5 mb-2 md:text-4xl! md:mb-3">
          關於培訓
        </h2>
        <div className="flex justify-center items-center gap-3 bg-Neutral-white px-5 py-3 w-83 rounded-[50px] shadow-[0_2px_4px_0_#E8E8E8] overflow-hidden text-Neutral-700 text-[14px] leading-normal tracking-[0.02em] mb-20 lg:w-159 lg:text-[16px]">
          <div className="font-bold pr-3 border-r-2 border-Neutral-200 shrink-0">
            近期梯次
          </div>

          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee hover:[animation-play-state:paused]! lg:animate-none">
              <span className="inline-block font-en">
                第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
              </span>
              <span className="inline-block font-en ml-5 lg:hidden">
                第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
              </span>
            </div>
          </div>
        </div>
        {/* 組別卡片區 */}
        <div className="relative bg-Neutral-white w-full border-2 border-Neutral-200 mb-20 lg:w-full lg:max-w-269 lg:r-sm">
          <div
            className="absolute z-0 inset-0 bg-repeat"
            style={{
              backgroundImage: `url(${bgImgPath})`,
            }}
          >
            <img src={bgImgPath} alt="網格背景圖" />
          </div>
          <section>
            {/* 內容 */}
            <div className="relative flex flex-col items-center pt-12.5 pb-8 w-full mx-auto lg:flex-row-reverse lg: max-w-237 lg:justify-center lg:gap-12">
              <h3 className="absolute -top-8 left-12 body-1! font-bold r-sm border-2 border-Neutral-700 text-Neutral-700 w-35.5 h-13.5 py-3 px-5 bg-Neutral-white z-2 shadow-[4px_4px_0px_0px_var(--color-Neutral-700)] whitespace-nowrap lg:left-0 lg:text-2xl! lg:w-fit lg:h-15 lg:px-10">
                <span>前端工程師</span>
              </h3>
              {/* 圖片 */}
              <div className="w-54.5 h-50 mb-7 lg:w-70.5 lg:h-70 lg:mb-0">
                <img
                  src={frontEndImgSm}
                  className="w-full h-full object-contain"
                  alt="前端工程師"
                />
              </div>
              {/* 文字 */}
              <div className="flex flex-col gap-8 px-12 lg:px-0 lg:max-w-154.5">
                <section className="text-Neutral-700">
                  <p className="body-2! font-bold tracking-[0.02em] pb-1 border-b-[3px] border-Neutral-700 w-fit mb-3">
                    關於前端
                  </p>
                  <p className="font-en">
                    <span className="whitespace-nowrap">
                      主要專精 JavaScript 前端 (65%)、後端 (35%)
                    </span>
                    <span className="block lg:inline">
                      開發，投入語言為HTML、CSS、
                    </span>
                    JavaScript，
                    <span className="inline box-decoration-clone bg-[linear-gradient(180deg,transparent_30%,var(--color-accent-yellow)_30%)] font-bold">
                      適合有一些 HTML、CSS、JS 基礎的學員報名
                    </span>
                    。
                  </p>
                </section>
                <section className="text-Neutral-700">
                  <p className="body-2! font-bold tracking-[0.02em] pb-1 border-b-[3px] border-Neutral-700 w-fit mb-3">
                    應徵門檻
                  </p>
                  <div className="font-en pl-3">
                    <div className="flex gap-1">
                      <p>1.</p>
                      <p>
                        <span className="lg:whitespace-nowrap">
                          會用 CSS Flexbox 排過網頁，有 RWD
                          響應式網頁概念，需提交 CSS 切版作品，
                          <span className="inline box-decoration-clone bg-[linear-gradient(180deg,transparent_30%,var(--color-accent-yellow)_30%)] font-bold lg:font-medium lg:bg-none">
                            請
                          </span>
                        </span>
                        <span className="inline box-decoration-clone bg-[linear-gradient(180deg,transparent_30%,var(--color-accent-yellow)_30%)] font-bold">
                          在履歷上需附網頁切版作品
                        </span>
                        ，Codepen、GitHub Pages 皆可。
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p>2.</p>
                      <p>
                        了解 JS 變數、陣列物件、DOM、監聽、AJAX
                        等知識，尚未熟練也沒關係。
                      </p>
                    </div>
                  </div>
                </section>
                <section className="text-Neutral-700">
                  <p className="body-2! font-bold tracking-[0.02em] pb-1 border-b-[3px] border-Neutral-700 w-fit mb-3">
                    你會學到
                  </p>
                  <div className="font-en pl-3">
                    <div className="flex gap-1">
                      <p>1.</p>
                      <p>
                        網頁切版技能：HTML5、CSS3、SCSS、Bootsrap5、TailwindCSS
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p>2.</p>
                      <p>
                        前端開發技能：JavaScript、TypeScript、ES6、SPA、JS
                        plugin 整合、API 介接、NPM
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p>3.</p>
                      <p>
                        後端開發技能：Node.js、MongoDB、heroku、express、JWT
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p>4.</p>
                      <p>
                        <span className="whitespace-nowrap">
                          JS 框架：React(Hooks)、Vue3，會依照未
                        </span>
                        來你想投入的公司進行調整
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p>5.</p>
                      <p>
                        <span className="whitespace-nowrap">
                          程式版控：Git、GitHub、Git Flow 工作流
                        </span>
                        程
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <div className="relative bg-Neutral-white w-full border-2 border-Neutral-200 mb-20 lg:w-full lg:max-w-269 lg:r-sm">
          <div
            className="absolute z-0 inset-0 bg-repeat"
            style={{
              backgroundImage: `url(${bgImgPath})`,
            }}
          >
            <img src={bgImgPath} alt="網格背景圖" />
          </div>
          <section>
            {/* 內容 */}
            <div className="relative flex flex-col items-center pt-12.5 pb-8 w-full mx-auto lg:flex-row-reverse lg: max-w-237 lg:justify-center lg:gap-12">
              <h3 className="absolute -top-8 left-12 body-1! font-bold r-sm border-2 border-Neutral-700 text-Neutral-700 w-35.5 h-13.5 py-3 px-5 bg-Neutral-white z-2 shadow-[4px_4px_0px_0px_var(--color-Neutral-700)] whitespace-nowrap lg:left-0 lg:text-2xl! lg:w-fit lg:h-15 lg:px-10">
                <span>後端工程師</span>
              </h3>
              {/* 圖片 */}
              <div className="w-54.5 h-50 mb-7 lg:w-70.5 lg:h-70 lg:mb-0">
                <img
                  src={backendImgSm}
                  className="w-full h-full object-contain"
                  alt="後端工程師"
                />
              </div>
              {/* 文字 */}
              <div className="flex flex-col gap-8 px-12 lg:px-0 lg:max-w-154.5">
                <section className="text-Neutral-700">
                  <p className="body-2! font-bold tracking-[0.02em] pb-1 border-b-[3px] border-Neutral-700 w-fit mb-3">
                    關於後端
                  </p>
                  <p className="font-en">
                    <span className="whitespace-nowrap">
                      後端工程師組主要專注為後端開發，投入後端
                    </span>
                    語言為 C#、.Net，
                    <span className="inline box-decoration-clone bg-[linear-gradient(180deg,transparent_30%,var(--color-accent-yellow)_30%)] font-bold">
                      適合無程式背景的學員報名
                    </span>
                    。
                  </p>
                </section>

                <section className="text-Neutral-700">
                  <p className="body-2! font-bold tracking-[0.02em] pb-1 border-b-[3px] border-Neutral-700 w-fit mb-3">
                    你會學到
                  </p>
                  <div className="font-en pl-3">
                    <div className="flex gap-1">
                      <p>1.</p>
                      <p>後端語言：C#</p>
                    </div>
                    <div className="flex gap-1">
                      <p>2.</p>
                      <p>程式架構：ASP.NET Web Form、ASP.NET MVC、Web API</p>
                    </div>
                    <div className="flex gap-1">
                      <p>3.</p>
                      <p>資料庫與雲端主機：MSSQL、Microsoft Azure</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <div className="relative bg-Neutral-white w-full border-2 border-Neutral-200 lg:w-full lg:max-w-269 lg:r-sm">
          <div
            className="absolute z-0 inset-0 bg-repeat"
            style={{
              backgroundImage: `url(${bgImgPath})`,
            }}
          >
            <img src={bgImgPath} alt="網格背景圖" />
          </div>
          <section>
            {/* 內容 */}
            <div className="relative flex flex-col items-center pt-12.5 pb-8 w-full mx-auto lg:flex-row-reverse lg: max-w-237 lg:justify-center lg:gap-12">
              <h3 className="absolute -top-8 left-12 body-1! font-bold r-sm border-2 border-Neutral-700 text-Neutral-700 w-35.5 h-13.5 py-3 px-5 bg-Neutral-white z-2 shadow-[4px_4px_0px_0px_var(--color-Neutral-700)] whitespace-nowrap flex justify-center lg:left-0 lg:text-2xl! lg:w-fit lg:h-15 lg:px-10">
                <span>UI 設計師</span>
              </h3>
              {/* 圖片 */}
              <div className="w-54.5 h-50 mb-7 lg:w-70.5 lg:h-70 lg:mb-0">
                <img
                  src={UiUxImgSm}
                  className="w-full h-full object-contain"
                  alt="UI 設計師"
                />
              </div>
              {/* 文字 */}
              <div className="flex flex-col gap-8 px-12 lg:px-0 lg:max-w-154.5">
                <section className="text-Neutral-700">
                  <p className="body-2! font-bold tracking-[0.02em] pb-1 border-b-[3px] border-Neutral-700 w-fit mb-3">
                    關於設計
                  </p>
                  <p className="font-en">
                    <span className="whitespace-nowrap">
                      主要以網頁 UI 設計 50%、網頁前端 50% 的雙
                    </span>
                    技能樹養成，
                    <span className="inline box-decoration-clone bg-[linear-gradient(180deg,transparent_30%,var(--color-accent-yellow)_30%)] font-bold">
                      適合具備視覺背景，操作過繪圖軟體尤佳，歡迎無工作經驗的學員報名
                    </span>
                    。
                  </p>
                </section>

                <section className="text-Neutral-700">
                  <p className="body-2! font-bold tracking-[0.02em] pb-1 border-b-[3px] border-Neutral-700 w-fit mb-3">
                    你會學到
                  </p>
                  <div className="font-en pl-3">
                    <div className="flex gap-1">
                      <p>1.</p>
                      <p>
                        <span className="block whitespace-nowrap lg:inline">
                          網頁前置規劃：Logic Flow、
                        </span>
                        Wireframe、網格系統、使用者體驗
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p>2.</p>
                      <p>
                        介面繪製流程：Figma 操作、Mockup、Prototype、標註文件
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p>3.</p>
                      <p>網頁切版技能：HTML5、CSS、Bootstrap5</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <section className="w-full pt-10 overflow-hidden xl:max-w-269 xl:mx-auto">
          <div className="heading-3! text-Neutral-700 font-bold flex w-full px-12.25 xl:max-w-296">
            <p>教練團</p>
          </div>
          {/* 輪播卡片區 */}
          <div className="pt-13">
            <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory scroll-pl-12.25 xl:overflow-visible xl:scroll-pl-0">
              <div className="flex gap-7 px-12.25 w-max py-6 xl:grid xl:grid-cols-4 xl:w-full xl:mx-auto xl:px-0 xl:gap-6">
                {/* 圖片區 */}
                <div className="relative w-83 h-50 r-lg border-2 border-Neutral-700 bg-Neutral-white shrink-0 active:bg-Primary-Blue-100 snap-start lg:w-62.75 lg:h-40">
                  <div className="absolute -top-6 left-61.5 r-sm border-2 border-Neutral-700 text-Neutral-700 w-12.5 h-28.25 py-3 px-5 bg-Neutral-white z-2 shadow-[4px_4px_0px_0px_var(--color-Neutral-700)] whitespace-nowrap body-2! font-bold [writing-mode:vertical-rl] flex justify-center items-center lg:w-12 lg:h-26 lg:pd-4 lg:font-en lg:left-45.75">
                    <p>廖 洧 杰</p>
                  </div>
                  <img
                    className="absolute -top-6 w-55 h-auto object-bottom-left z-2 lg:w-45"
                    src={coachWeijie}
                    alt="廖洧杰"
                  />
                </div>
                <div className="relative w-83 h-50 r-lg border-2 border-Neutral-700 bg-Neutral-white shrink-0 active:bg-Primary-Blue-100 snap-start lg:w-62.75 lg:h-40">
                  <div className="absolute -top-6 left-61.5 r-sm border-2 border-Neutral-700 text-Neutral-700 w-12.5 h-28.25 py-3 px-5 bg-Neutral-white z-2 shadow-[4px_4px_0px_0px_var(--color-Neutral-700)] whitespace-nowrap body-2! font-bold [writing-mode:vertical-rl] flex justify-center items-center lg:w-12 lg:h-26 lg:pd-4 lg:font-en lg:left-45.75">
                    <p>穎 旻</p>
                  </div>
                  <img
                    className="absolute -top-6 w-55 h-auto object-bottom-left lg:w-45 "
                    src={coachYinmin}
                    alt="穎 旻"
                  />
                </div>
                <div className="relative w-83 h-50 r-lg border-2 border-Neutral-700 bg-Neutral-white shrink-0 active:bg-Primary-Blue-100 snap-start lg:w-62.75 lg:h-40">
                  <div className="absolute -top-6 left-61.5 r-sm border-2 border-Neutral-700 text-Neutral-700 w-12.5 h-28.25 py-3 px-5 bg-Neutral-white z-2 shadow-[4px_4px_0px_0px_var(--color-Neutral-700)] whitespace-nowrap body-2! font-bold [writing-mode:vertical-lr] flex justify-center items-center lg:w-12 lg:h-26 lg:pd-4 lg:font-en lg:left-45.75">
                    <p>賈 斯 汀</p>
                  </div>
                  <img
                    className="absolute -top-6 w-55 h-auto object-bottom-left lg:w-45"
                    src={coachJustin}
                    alt="賈斯汀"
                  />
                </div>
                <div className="relative w-83 h-50 r-lg border-2 border-Neutral-700 bg-Neutral-white shrink-0 active:bg-Primary-Blue-100 snap-start lg:w-62.75 lg:h-40">
                  <div className="absolute -top-6 left-61.5 r-sm border-2 border-Neutral-700 text-Neutral-700 w-12.5 h-28.25 py-3 px-5 bg-Neutral-white z-2 shadow-[4px_4px_0px_0px_var(--color-Neutral-700)] whitespace-nowrap body-2! font-bold [writing-mode:vertical-rl] flex justify-center items-center lg:w-12 lg:h-26 lg:pd-4 lg:font-en lg:left-45.75">
                    <p>卡 斯 伯</p>
                  </div>
                  <img
                    className="absolute -top-6 w-55 h-auto object-bottom-left lg:w-45"
                    src={coachCasper}
                    alt="卡斯伯"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default TrainingProgramsSection;
