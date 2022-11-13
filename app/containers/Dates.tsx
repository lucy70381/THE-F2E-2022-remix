import JoinButton from "~/components/JoinButton";

const Dates = () => (
  <section id="datesSection" className="container md:h-screen">
    <div className="relative mt-20 grid place-items-center items-start gap-y-10 md:flex md:justify-between">
      {[
        {
          stepName: "SIGN UP",
          date: "10/13 - 11/6",
          desc: "截止前可修改報名組別",
        },
        {
          imgName: "start",
          stepName: "START",
          date: "10/31 - 11/28",
          desc: "10/31(一) UI、團體組開賽\n11/7(一) 前端組開賽",
        },
        {
          imgName: "upload",
          stepName: "UPLOAD",
          date: "10/31 - 11/28",
          desc: "依賽程登錄作品",
          addition: "額外競賽： 主題豐厚獎金等著你",
        },
      ].map(({ stepName, imgName, date, desc, addition }, index) => (
        <div
          id={`date${index + 1}`}
          key={stepName}
          className="group relative grid place-content-center place-items-center gap-y-3 pb-[140px]"
        >
          {stepName === "SIGN UP" ? (
            <JoinButton />
          ) : (
            <img
              className="w-[140px]"
              src={`./main/date_${imgName}.png`}
              alt={stepName}
            />
          )}
          <h2 className="text-highlight">{stepName}</h2>
          <h4 className="rounded-full bg-primary py-2 px-7 text-center text-white">
            {date}
          </h4>
          <div className="z-10 h-[60px] bg-secondary">
            <h5 className="whitespace-pre-wrap pb-2 text-center text-secondary-dark">
              {desc}
            </h5>
            {addition && <p className="text-highlight">{addition}</p>}
          </div>
          <img
            className="absolute left-1/2 hidden h-[120px] -translate-x-1/2 group-even:bottom-[80px] md:bottom-9 md:block lg:bottom-8 xl:bottom-6"
            src="./main/date_weekLine.png"
            alt="date_weekLine"
          />
        </div>
      ))}
      <img
        id="date_line"
        className="absolute left-0 bottom-0 hidden h-[100px] w-full object-fill object-center md:block"
        src="./main/date_line.png"
        alt="date_line"
      />
    </div>
  </section>
);

export default Dates;
