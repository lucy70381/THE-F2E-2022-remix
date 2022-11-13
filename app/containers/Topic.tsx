import SectionTitle from "~/components/SectionTitle";

const Topic = () => (
  <section id="topicSection" className="md:h-screen">
    <div id="topicTitle">
      <SectionTitle title="本屆主題：互動式網頁設計" width={875} />
      <h5 className="mb-16 text-center text-secondary-dark">
        以下兩個角色進行攜手合作
      </h5>
    </div>
    <div className="container flex flex-col items-center justify-around md:flex-row">
      {[
        { role: "前端工程師", imgName: "f2e" },
        { role: "ＵＩ設計師", imgName: "ui" },
        { role: "團體組(UI+前端)", imgName: "team" },
      ].map(({ role, imgName }, index) => (
        <div
          id={`topic${index + 1}`}
          className="flex justify-between odd:flex-row-reverse md:w-1/3 md:justify-center"
          key={imgName}
        >
          <img
            id={`topicCharacter${index + 1}`}
            className="w-1/2 md:hidden"
            src={`./character/character_${imgName}.png`}
            alt="imgName"
          />
          <div className="group grid w-1/2 place-content-center place-items-center md:w-full">
            <img
              className="invisible h-[72px] group-hover:visible"
              src="./btn/btn_joinHand.gif"
              alt="btn_joinHand"
            />
            <img
              className="w-[60px]"
              src="./btn/btn_join_h.png"
              alt="btn_join"
            />
            <h4 className="text-center text-primary">{role}</h4>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Topic;
