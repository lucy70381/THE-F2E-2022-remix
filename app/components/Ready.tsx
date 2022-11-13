const Ready = () => (
  <div
    id="ready_frame"
    className="absolute bottom-40 right-0 md:bottom-60 lg:bottom-1/2"
  >
    <p id="readyText" className="text-highlight text-center text-sm font-bold leading-[1.4] xl:text-[32px]">
      READY?
    </p>
    <div className="relative">
      <img
        className="w-[120px] xl:w-[275px]"
        src="./main/ready_frame.png"
        alt="ready_frame"
      />
      <div className="absolute top-3.5 left-4 flex gap-x-2 xl:top-8 xl:left-9 xl:gap-x-4">
        {[
          { imgName: "ready_3", name: "redLight" },
          { imgName: "ready_2", name: "orangeLight" },
          { imgName: "ready_1", name: "greenLight" },
        ].map(({ imgName, name }) => (
          <img
            key={name}
            alt={name}
            src={`./main/${imgName}.png`}
            id={name}
            className="left-2 w-5 xl:w-12"
          />
        ))}
      </div>
    </div>
  </div>
);

export default Ready;
