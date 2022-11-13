import SectionTitle from "~/components/SectionTitle";

const Trouble = () => (
  <section
    id="troubleSection"
    className="relative pb-20 mt-10 md:h-screen"
  >
    <SectionTitle id="troubleTitle" title="你是否也有以下困擾？" width={736} />
    <div className="container flex flex-col items-center justify-center md:flex-row">
      {[
        "羨慕別人的酷酷網頁動畫？",
        "滿足不了同事的許願？",
        "動畫技能樹太雜無從下手？",
      ].map((text, index) => (
        <div id={`trouble${index + 1}`} className="opacity-0" key={text}>
          <h4 className="text-center text-highlight">{text}</h4>
          <img
            className="hidden object-contain md:block"
            src={`./main/question_${index + 1}.png`}
            alt={`question_${index + 1}`}
          />
          <img
            className="block object-contain md:hidden"
            src={`./main/question_${index + 1}${index !== 1 ? "_m" : ""}.png`}
            alt={`question_${index + 1}`}
          />
        </div>
      ))}
    </div>
    <div id="troubleDecorate" className="opacity-0 container absolute bottom-0 left-1/2 -z-10 hidden -translate-x-1/2 scale-50 justify-between md:flex">
      <img
        className="w-[150px] object-contain"
        src="./bg/bg_decorate_09.png"
        alt="bg_decorate_09"
      />
      <img
        className="w-[150px] object-contain"
        src="./bg/bg_decorate_09.png"
        alt="bg_decorate_09"
      />
    </div>
  </section>
);

export default Trouble;
