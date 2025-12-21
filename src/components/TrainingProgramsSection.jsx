const TrainingProgramsSection = () => {
  return (
    <>
      <section className="flex flex-col items-center bg-Neutral-100">
        <h2 className="heading-2! text-Neutral-700 text-center -mt-5 mb-2">
          關於培訓
        </h2>
        <div className="flex justify-center items-center gap-3 bg-Neutral-white px-5 py-3 w-83 rounded-[50px] shadow-[0_2px_4px_0_#E8E8E8] overflow-hidden text-Neutral-700 text-[14px] leading-normal tracking-[0.02em] mb-20">
          <div className="font-bold pr-3 border-r-2 border-Neutral-200 shrink-0">
            近期梯次
          </div>

          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-[marquee_20s_linear_infinite] hover:[animation-play-state:pause]">
              <span className="inline-block">
                第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
              </span>
              <span className="inline-block ml-3">
                第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingProgramsSection;
