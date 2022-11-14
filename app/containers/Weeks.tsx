import SectionTitle from "~/components/SectionTitle";

const Weeks = () => (
  <section id="weeksSection">
    <div id="weeksTitle">
      <SectionTitle title="年度最強合作，三大主題來襲" width={940} />
      <h5 className="mb-16 whitespace-pre-wrap text-center text-secondary-dark">
        {"各路廠商強強聯手\n共同設計出接地氣的網頁互動挑戰關卡"}
      </h5>
    </div>
    <div className="container grid grid-cols-12 gap-y-11">
      {[
        {
          activity: "The F2E 活動網站設計",
          feature: "Parallax Scrolling",
          company: "#版塊設計",
        },
        {
          activity: "今晚，我想來點點簽",
          feature: "Canvas",
          company: "#凱鈿行動科技",
        },
        {
          activity: "Scrum 新手村",
          feature: "JS draggable",
          company: "#鈦坦科技",
        },
      ].map(({ activity, feature, company }, index) => (
        <div
          id={`activity${index + 1}`}
          key={company}
          className="group col-span-10 col-start-2 flex w-full flex-col items-center gap-x-10 md:flex-row-reverse md:odd:flex-row"
        >
          <img
            className="w-4/5 md:w-1/5"
            src={`./main/week_${index + 1}.png`}
            alt="activity"
          />
          <div className="grid place-items-center md:place-items-start md:group-even:place-items-end">
            <h2 className="mb-2 text-highlight">{`WEEK${index + 1}`}</h2>
            <h3 className="mb-2 text-primary">{activity}</h3>
            <div className="mb-5 grid place-items-center gap-3 md:flex">
              <p className="highlight rounded-full border-2 border-secondary-dark px-6 py-1 text-secondary-dark">
                {feature}
              </p>
              <p className="highlight rounded-full border-2 border-secondary-dark px-6 py-1 text-secondary-dark">
                {company}
              </p>
            </div>
            <a
              href={`https://2022.thef2e.com/news/week${index + 1}`}
              className="rounded-full bg-secondary-dark px-6 py-1 text-white"
            >
              查看關卡細節
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Weeks;
