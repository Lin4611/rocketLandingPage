const SharedSpaceSection = () => {
  return (
    <section className="text-Neutral-700 bg-violet-200">
      <div className="lg:hidden py-[36px] px-[48px] rounded-[24px]">
        <h3 className="font-[700] leading-normal tracking-[0.28px]">
          About Us
        </h3>
        <h2 className="heading-1 mb-[16px]">共同空間簡介</h2>
        <p className="body-3 mb-[20px]">
          共同空間有近 100 坪的空間，在開放式的公共區域中有
          <span className="font-[700]">休憩區以及舒適沙發討論區</span>
          ，在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。
        </p>

        {/* 地圖 */}
        <div className="flex justify-center h-[332px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.232812259288!2d120.30793527536764!3d22.628019879452346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491b7febacd%3A0x24542bac2726199b!2z5a-25oiQ5LiW57SA5aSn5qiT!5e1!3m2!1szh-TW!2stw!4v1766476737037!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </div>

      {/* desktop */}
      <div className="max-lg:hidden flex  max-xl:flex-wrap max-xl:flex-col-reverse justify-start max-xl:items-center gap-x-[96px] py-[60px] px-[72px] pr-[136px] rounded-[40px]">
      
        <div className="w-[636px] max-xl:w-full  flex-shrink h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.232812259288!2d120.30793527536764!3d22.628019879452346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491b7febacd%3A0x24542bac2726199b!2z5a-25oiQ5LiW57SA5aSn5qiT!5e1!3m2!1szh-TW!2stw!4v1766476737037!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>

        <div className="w-[500px] max-xl:w-full flex-shrink-0">
          <h3 className="font-bold leading-normal tracking-[0.28px]">
            About Us
          </h3>
          <h2 className="heading-1 mb-[16px]">共同空間簡介</h2>
          <p className="body-3 mb-[20px]">
            共同空間有近 100 坪的空間，在開放式的公共區域中有
            <span className="font-[700]">休憩區以及舒適沙發討論區</span>
            ，在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。
          </p>
        </div>
      </div>
    </section>
  );
};

export default SharedSpaceSection;
