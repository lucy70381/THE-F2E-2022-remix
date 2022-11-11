import SvgUsers from "~/components/SvgUsers";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hide = (element) => {
  gsap.set(element, { opacity: 0, visibility: "hidden" });
};

const display = (element) => {
  gsap.set(element, { opacity: 100, visibility: "visible" });
};

export default function Index() {
  const section1Ref = useRef(null);
  const readyFrameRef = useRef(null);

  // Section1
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        // start: "top 30%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, // 重要！開啟scrub來決定動畫播放是否依賴視窗滾動
        toggleClass: "mb-40", // 決定動畫開始與結束時要給予的class
        onEnter: () => {
          // 向下滾動進入start點時觸發callback
          hide(section1Ref.current);
          hide(readyFrameRef.current);
        },
        onLeaveBack: () => {
          // 向上滾動超過start點時觸發（回滾時觸發）callback
          display(section1Ref.current);
          display(readyFrameRef.current);
        },
      },
    });

    tl.fromTo(
      "#characters",
      { scale: 1 },
      {
        scale: 0.5,
        left: 0,
        position: "fixed",
        bottom: 0,
        zIndex: 100,
        transformOrigin: "50% bottom",
      }
    )
      .to("#road", { scale: 0.5, bottom: 0, left: 0, position: "fixed" }, "<")
      .fromTo("#cloud1", { x: 0 }, { xPercent: "-300" }, "<")
      .fromTo("#cloud2", { x: 0 }, { xPercent: "300" }, "<");
  }, []);

  useEffect(() => {}, []);
  return (
    <main>
      <nav className="sticky top-0 z-10 flex items-center justify-between bg-secondary-default md:hidden">
        <button>
          <img
            src="./btn/btn_burger_open.png"
            className="h-10 w-10"
            alt="btn_burger_open"
          />
        </button>
        <a
          href="/"
          className="mt-2 block aspect-[3/1] w-2/5 overflow-hidden whitespace-nowrap bg-logo_text bg-contain bg-no-repeat indent-[101%] md:mt-10 md:w-3/5"
        >
          The F2E 4th
        </a>
        <button>
          <img
            src="./btn/btn_user.png"
            className="mr-2 h-10 w-10"
            alt="btn_user"
          />
        </button>
      </nav>
      <section className="relative">
        <div className="container mx-auto h-full bg-cover bg-no-repeat md:bg-start">
          <div className="grid place-items-center">
            <div ref={section1Ref} className="grid place-items-center">
              <a
                href="/"
                className="mt-2 hidden aspect-[3/1] w-2/5 overflow-hidden whitespace-nowrap bg-logo_text bg-contain bg-no-repeat indent-[101%] md:mt-10 md:block md:w-3/5"
              >
                The F2E 4th
              </a>
              <img
                className="w-4/5 object-contain md:hidden"
                src="./logo/logo.png"
                alt="logo"
              />
              <h1 className="mt-4 inline rounded-full bg-highlight-default px-10 py-2 text-white md:-mt-2 md:mb-1">
                互動式網頁設計
              </h1>
              <div className="justify-between md:flex md:w-full md:px-8">
                {[
                  { role: "前端工程師", count: 920 },
                  { role: "UI 設計師", count: 110 },
                  { role: "團體組", count: 41 },
                ].map(({ role, count }) => (
                  <div className="mx-auto" key={role}>
                    <h5 className="text-center text-primary-default">{role}</h5>
                    <div className="flex items-center justify-center rounded-full bg-primary-default py-1 px-5 md:px-7">
                      <SvgUsers width={20} height={20} color={"white"} />
                      <span className="highlight ml-2 block text-white">
                        {count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <div
                  id="characters"
                  className="flex items-end justify-around md:mx-8"
                >
                  {["character_f2e", "character_ui", "character_team"].map(
                    (item) => (
                      <img
                        key={item}
                        src={`./character/${item}.gif`}
                        className="z-[120] w-1/4 object-contain"
                        alt="character_f2e"
                      />
                    )
                  )}
                </div>
                <img
                  src="./main/road.png"
                  id="road"
                  className="z-10 -mt-10 w-full object-contain md:-mt-20"
                  alt="road"
                />
              </div>
              <div
                ref={readyFrameRef}
                id="ready_frame"
                className="absolute bottom-40 right-0 md:bottom-60 lg:bottom-1/2"
              >
                <p className="text-center text-sm font-bold leading-[1.4] text-highlight-default xl:text-[32px]">
                  READY?
                </p>
                <div className="relative">
                  <img
                    className="w-[120px] xl:w-[275px]"
                    src="./main/ready_frame.png"
                    alt="ready_frame"
                  />
                  <div className="absolute top-3.5 left-4 flex gap-x-2 xl:top-8 xl:left-9 xl:gap-x-4">
                    <img
                      className="left-2 w-5 xl:w-12"
                      src="./main/ready_3.png"
                      alt="redLight"
                    />
                    <img
                      className="left-2 w-5 xl:w-12"
                      src="./main/ready_2.png"
                      alt="orangeLight"
                    />
                    <img
                      className="left-2 w-5 xl:w-12"
                      src="./main/ready_1.png"
                      alt="greenLight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -z-10 flex justify-between md:justify-around">
            <img
              className="w-1/3"
              id="cloud1"
              src="./bg/bg_decorate_01.png"
              alt="cloud01"
            />
            <img
              className="w-1/3"
              id="cloud2"
              src="./bg/bg_decorate_05.png"
              alt="cloud02"
            />
          </div>
        </div>
      </section>
      <section id="section2">
        <h2 className="mb-3 w-full bg-bg_talking_c bg-height-72 bg-no-repeat py-3 text-center md:hidden">
          你是否也有以下困擾？
        </h2>
        <h2 className="mb-3 hidden bg-bg_talking bg-[length:736px_151px] bg-center bg-no-repeat pt-12 pb-16 text-center md:block">
          你是否也有以下困擾？
        </h2>
        <div className="container flex flex-col items-center justify-center md:flex-row">
          {[
            "羨慕別人的酷酷網頁動畫？",
            "滿足不了同事的許願？",
            "動畫技能樹太雜無從下手？",
          ].map((text, index) => (
            <div key={text}>
              <h4 className="text-center text-highlight-default">{text}</h4>
              <img
                className="hidden object-contain md:block"
                src={`./main/question_${index + 1}.png`}
                alt={`question_${index + 1}`}
              />
              <img
                className="block object-contain md:hidden"
                src={`./main/question_${index + 1}${
                  index !== 1 ? "_m" : ""
                }.png`}
                alt={`question_${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
      <section id="section3">
        <h2 className="mb-3 w-full bg-bg_talking_c bg-height-72 bg-no-repeat py-3 text-center md:hidden">
          本屆主題：互動式網頁設計
        </h2>
        <h2 className="mb-3 hidden bg-bg_talking bg-[length:875px_151px] bg-center bg-no-repeat pt-12 pb-16 text-center md:block">
          本屆主題：互動式網頁設計
        </h2>
        <div className="container flex flex-col items-center justify-around md:flex-row">
          {["前端工程師", "ＵＩ設計師", "團體組(UI+前端)"].map(
            (text, index) => (
              <div className="grid place-items-center" key={text}>
                <img src="./btn/btn_joinHand.gif" alt="btn_joinHand" />
                <img src="./btn/btn_join_h.png" alt="btn_join" />
                <h4 className="text-center text-highlight-default">{text}</h4>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
