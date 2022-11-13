const Finish = () => (
  <section id="finishSection" className="relative mt-[83px] h-screen md:mt-0 ">
    <div
      id="finish"
      className="z-[100] h-screen w-full bg-[length:75%_100vh] bg-top bg-no-repeat md:bg-finish_1"
    />
    <div className="container mx-auto">
      <div className="absolute left-0 top-1/2 flex justify-between md:justify-around">
        <img
          className="w-1/3"
          id="cloud3"
          src="./bg/bg_decorate_01.png"
          alt="cloud01"
        />
        <img
          className="w-1/3"
          id="cloud4"
          src="./bg/bg_decorate_05.png"
          alt="cloud02"
        />
      </div>
    </div>
    <div className="bottom-20 md:bottom-[200px] absolute flex w-full justify-between">
      <img
        id="finishLine_l"
        className="-mr-5 w-3/5"
        src="./main/finishLine_l.png"
        alt="finishLine_l"
      />
      <img
        id="finishLine_r"
        className="-ml-5 w-3/5"
        src="./main/finishLine_r.png"
        alt="finishLine_r"
      />
    </div>
  </section>
);

export default Finish;
