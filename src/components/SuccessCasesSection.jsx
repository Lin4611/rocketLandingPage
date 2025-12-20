const SuccessCasesSection = () => {
  const cardIds = Array.from({ length: 8 }, (_, i) => i + 1);
  
  const getImgsUrl = (name) =>{
    return new URL(`../assets/imgs/case/case${name}.png`, import.meta.url).href

  }

  return (
    <>
      <section className="w-full lg:max-w-360 lg:mx-auto">
        <h2 className="heading-2! text-center border border-Primary-Blue-300 mb-4 text-Neutral-700">
          成功案例
        </h2>
        <div className="grid grid-rows-2 grid-flow-col gap-7 overflow-x-auto snap-x snap-mandatory ml-12 pr-6">
          {cardIds.map((id)=>(

            <div key={id} className="w-60 h-40 r-sm snap-center">
                <img src={getImgsUrl(id)} alt={`成功案例${id}`} className="w-full h-full object-cover" />
            </div>

          ))}
          
        </div>
      </section>
    </>
  );
};

export default SuccessCasesSection;
