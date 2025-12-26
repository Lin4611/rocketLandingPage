import no1Sm from "../assets/imgs/icon/ic-no.1-sm.svg";
import no1Lg from "../assets/imgs/icon/ic-no.1-lg.svg";
import no2Sm from "../assets/imgs/icon/ic-no.2-sm.svg";
import no2Lg from "../assets/imgs/icon/ic-no.2-lg.svg";
import no3Sm from "../assets/imgs/icon/ic-no.3-sm.svg";
import no3Lg from "../assets/imgs/icon/ic-no.3-lg.svg";
import no4Sm from "../assets/imgs/icon/ic-no.4-sm.svg";
import no4Lg from "../assets/imgs/icon/ic-no.4-lg.svg";
import no5Sm from "../assets/imgs/icon/ic-no.5-sm.svg";
import no5Lg from "../assets/imgs/icon/ic-no.5-lg.svg";

const EnrollmentInfoSection = () => {
  return (
    <section className="text-Neutral-700 font-normal">
      {/* mobile */}
      <div className="md:hidden pt-22.5 pb-19">
        {/* 培訓費用 */}
        <div className="mb-12  pl-12.25 pr-11.75">
          <h2 className="heading-3 mb-1">
            培訓費用
          </h2>
          <div>
            <div className="flex gap-x-4 py-5 border-t-2 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no1Sm} alt="no1Sm" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Q：請問參加培訓需要費用嗎？</p>
                <p>
                  A：不會有任何費用，僅需要場地費 ( $1,200 / Month
                  )，其餘完全免費。
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 py-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no2Sm} alt="no2Sm" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Q：你們不是直銷吧？</p>
                <p>A：不是，不會推銷任何東西。</p>
              </div>
            </div>

            <div className="flex gap-x-4 py-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no3Sm} alt="no3Sm" />
              </div>
              <div className="shrink flex flex-col gap-y-2">
                <p className="font-bold">
                  Q：你們真的不是詐騙集團？台灣有其他單位做一樣的事了嗎？
                </p>
                <p>
                  A：其實在台灣已經有許多單位在做一樣的事了，但絕大部分都在中北部，例如
                  <a href="https://school.appworks.tw/" className="underline">
                    AppWorks School
                  </a>
                  、
                  <a
                    href="https://www.programmer101.org/"
                    className="underline"
                  >
                    CMoney
                  </a>
                  ，以及在台南的
                  <a
                    href="https://www.facebook.com/GoodideasStudio/"
                    className="underline"
                  >
                    好想工作室
                  </a>
                  。一樣也是提供
                  <span className="font-bold">免費培訓</span>
                  。而在高雄上，我們是第一個單位舉辦此培訓營。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 培訓流程 */}
        <div className="pl-12.25 pr-11.75">
          <h2 className="heading-3 mb-1">培訓流程</h2>
          <div>
            <div className="flex gap-x-[16px] py-[20px] border-t-2 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no1Sm} alt="no1Sm" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Q：那培訓的時間是多久呢？</p>
                <p>
                  A：培訓時間為七個月，您可以選擇要投入前端工程師、後端工程師或
                  UI 設計師。
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 py-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no2Sm} alt="no2Sm" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Q：那如果七個月後，可以續留嗎？</p>
                <p>
                  A：當然可以，我們提供額外的進駐空間供您使用。在這裡，您可以與其他火箭隊夥伴保持緊密交流，分享心得，或者利用此空間接案和進行遠端工作，讓您的技能不斷精進。
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 py-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no3Sm} alt="no3Sm" />
              </div>
              <div className="shrink flex flex-col gap-y-2">
                <p className="font-bold">
                  Q：你們和其他的培訓單位有什麼差異呢？
                </p>
                <p>
                  A：我們的培訓流程，主要是將學員培育成
                  <span className="font-bold">
                    「擁有自我解決問題的工程師」
                  </span>
                  ，大部分的實體補習班都會給您一個完整課綱，您照著它走完就結束。但是不論任何工作，出社會才會發現，有很多事情都還是自己不懂的，您必須
                  <span className="font-bold">
                    了解該如何找出問題癥結點，並解決問題
                  </span>
                  。讓您有足夠的搜索與研究能力，自行打造火箭，航向您想去的星球。
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 py-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no4Sm} alt="no4Sm" />
              </div>
              <div className="shrink flex flex-col gap-y-2">
                <p className="font-bold">Q：這麼說來，你們沒有一個完整課綱？</p>
                <p>
                  A：是的，我們只會針對您當下的狀態，並觀察您需要什麼養分，提供給您
                  <span className="font-bold">「目標」</span>
                  ，您再依照此目標去達成，而我們也會從您研究的過程中，觀察您還需要哪些技術，以達到其目標。舉例來說，您對
                  web layout
                  沒有從零到有的開發經驗，那教練就陪您跑過整個流程，甚至模擬自己是業主，與您討論網站建構流程。或是後端您沒有自己架過郵件伺服器，那教練就會給您建立一個最小可行性的郵件服務，以達成目標。
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 py-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no5Sm} alt="no5Sm" />
              </div>
              <div className="shrink flex flex-col gap-y-2">
                <p className="font-bold">
                  Q：所以有很多的時間都是在自我研究技術？
                </p>
                <p>
                  A：是的，沒有錯，教練的存在是觀察您目前的狀態，並與您共同建立各階段性的目標，確保您方向沒有走歪，能順遂朝自己的方向邁進。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="max-md:hidden max-w-214 max-[calc(856px+96px)]:px-[48px]  mx-auto pt-[128px] pb-[124px]">
        {/* 培訓費用 */}
        <div className="mb-15 font-medium ">
          <h2 className="heading-3 mb-1">培訓費用</h2>
          <div>
            <div className="flex gap-x-[32px] p-[20px] border-t-2 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no1Lg} alt="no1Lg" />
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <p className="font-bold">Q：請問參加培訓需要費用嗎？</p>
                <p>
                  A：不會有任何費用，僅需要場地費 ( $1,200 / Month
                  )，其餘完全免費。
                </p>
              </div>
            </div>

            <div className="flex gap-x-[32px] p-[20px] border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no2Lg} alt="no2Lg" />
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <p className="font-bold">Q：你們不是直銷吧？</p>
                <p>A：不是，不會推銷任何東西。</p>
              </div>
            </div>

            <div className="flex gap-x-[32px] p-[20px] border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no3Lg} alt="no3Lg" />
              </div>
              <div className="shrink flex flex-col gap-y-[8px]">
                <p className="font-bold">
                  Q：你們真的不是詐騙集團？台灣有其他單位做一樣的事了嗎？
                </p>
                <p>
                  A：其實在台灣已經有許多單位在做一樣的事了，但絕大部分都在中北部，例如
                  <a href="https://school.appworks.tw/" className="underline">
                    AppWorks School
                  </a>
                  、
                  <a
                    href="https://www.programmer101.org/"
                    className="underline"
                  >
                    CMoney
                  </a>
                  ，以及在台南的
                  <a
                    href="https://www.facebook.com/GoodideasStudio/"
                    className="underline"
                  >
                    好想工作室
                  </a>
                  。一樣也是提供
                  <span className="font-bold">免費培訓</span>
                  。而在高雄上，我們是第一個單位舉辦此培訓營。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 培訓流程 */}
        <div>
          <h2 className="heading-3 mb-[4px]">培訓流程</h2>
          <div>
            <div className="flex gap-x-[32px] p-5 border-t-2 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no1Lg} alt="no1Lg" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Q：那培訓的時間是多久呢？</p>
                <p>
                  A：培訓時間為七個月，您可以選擇要投入前端工程師、後端工程師或
                  UI 設計師。
                </p>
              </div>
            </div>

            <div className="flex gap-x-[32px] p-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no2Lg} alt="no2Lg" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Q：那如果七個月後，可以續留嗎？</p>
                <p>
                  A：當然可以，我們提供額外的進駐空間供您使用。在這裡，您可以與其他火箭隊夥伴保持緊密交流，分享心得，或者利用此空間接案和進行遠端工作，讓您的技能不斷精進。
                </p>
              </div>
            </div>

            <div className="flex gap-x-[32px] p-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no3Lg} alt="no3Lg" />
              </div>
              <div className="shrink flex flex-col gap-y-[8px]">
                <p className="font-bold">
                  Q：你們和其他的培訓單位有什麼差異呢？
                </p>
                <p>
                  A：我們的培訓流程，主要是將學員培育成
                  <span className="font-bold">
                    「擁有自我解決問題的工程師」
                  </span>
                  ，大部分的實體補習班都會給您一個完整課綱，您照著它走完就結束。但是不論任何工作，出社會才會發現，有很多事情都還是自己不懂的，您必須
                  <span className="font-bold">
                    了解該如何找出問題癥結點，並解決問題
                  </span>
                  。讓您有足夠的搜索與研究能力，自行打造火箭，航向您想去的星球。
                </p>
              </div>
            </div>

            <div className="flex gap-x-[32px] p-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no4Lg} alt="no4Lg" />
              </div>
              <div className="shrink flex flex-col gap-y-2">
                <p className="font-bold">Q：這麼說來，你們沒有一個完整課綱？</p>
                <p>
                  A：是的，我們只會針對您當下的狀態，並觀察您需要什麼養分，提供給您
                  <span className="font-bold">「目標」</span>
                  ，您再依照此目標去達成，而我們也會從您研究的過程中，觀察您還需要哪些技術，以達到其目標。舉例來說，您對
                  web layout
                  沒有從零到有的開發經驗，那教練就陪您跑過整個流程，甚至模擬自己是業主，與您討論網站建構流程。或是後端您沒有自己架過郵件伺服器，那教練就會給您建立一個最小可行性的郵件服務，以達成目標。
                </p>
              </div>
            </div>

            <div className="flex gap-x-[32px] p-5 border-b-2 border-Neutral-200">
              <div className="shrink-0">
                <img src={no5Lg} alt="no5Lg" />
              </div>
              <div className="shrink flex flex-col gap-y-2">
                <p className="font-bold">
                  Q：所以有很多的時間都是在自我研究技術？
                </p>
                <p>
                  A：是的，沒有錯，教練的存在是觀察您目前的狀態，並與您共同建立各階段性的目標，確保您方向沒有走歪，能順遂朝自己的方向邁進。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentInfoSection;
