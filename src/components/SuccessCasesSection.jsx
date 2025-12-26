const SuccessCasesSection = () => {
  const cardIds = Array.from({ length: 8 }, (_, i) => i + 1);

  const getImgsUrl = (name) => {
    return new URL(`../assets/imgs/case/case${name}.png`, import.meta.url).href;
  };

  return (
    <>
      <section className="w-full pt-12 overflow-hidden mb-24 xl:max-w-360 xl:mx-auto lg:px-12 xl:mb-30 ">
        <h2 className="heading-2! text-center mb-4 text-Neutral-700 w-full max-w-324 mx-auto  lg:text-4xl! xl:mb-7">
          成功案例
        </h2>
<<<<<<< HEAD
        <div className="w-full grid grid-rows-2 grid-flow-col gap-x-6 gap-y-7 overflow-x-auto overflow-hidden scrollbar-hide snap-x snap-mandatory ml-12 pr-24 xl:grid-cols-4 xl:overflow-visible xl:pr-0 xl:max-w-324 xl:mx-auto">
=======
        <div className="w-full grid grid-rows-2 grid-flow-col gap-x-6 gap-y-7 overflow-x-auto overflow-hidden scrollbar-hidde snap-x snap-mandatory ml-12 pr-6 lg:ml-0 lg:pr-0 xl:grid-cols-4 xl:overflow-visible xl:pr-0 xl:max-w-324 xl:mx-auto">
>>>>>>> dev
          {cardIds.map((id) => (
            <div key={id} className={`w-60 h-40 r-sm snap-center lg:w-full lg:h-full ld:max-w-76.5 ld:max-h-50`}>
              <img
                src={getImgsUrl(id)}
                alt={`成功案例${id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SuccessCasesSection;
