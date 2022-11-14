const Question = () => (
  <section
    id="questionSection"
    className="constainer grid place-content-center place-items-center h-screen"
  >
    <h2 className="mb-[252px] whitespace-pre-wrap text-center text-highlight md:mb-0 md:whitespace-normal">
      {"區區修煉\n已經無法滿足了嗎？"}
    </h2>
    <div className="hidden justify-between md:flex">
      <img
        id="decorate_03"
        className="w-[450px] object-contain"
        src="./bg/bg_decorate_03.png"
        alt="bg_decorate_03"
      />
      <img
        id="decorate_07"
        className="w-[368px] object-contain"
        src="./bg/bg_decorate_07.png"
        alt="bg_decorate_07"
      />
    </div>
  </section>
);

export default Question;
