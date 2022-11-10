import SvgUsers from "~/components/SvgUsers";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const ref = useRef(null);
  // Section1
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#characters", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        // start: "top top", // 決定動畫開始點的位置
        // end: "bottom bottom", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });

    // tl.fromTo(
    //   "#characters",
    //   { scale: 1 },
    //   { scale: 0.5, left: 0, position: "fixed", bottom: 0 }
    // )
    //   // .fromTo(
    //   //   "#road",
    //   //   { scale: 1 },
    //   //   { scale: 0.5, bottom: 0, left:0, position: 'fixed', scrollTrigger: {
    //   //     trigger: "#characters", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    //   //     markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    //   //     scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    //   //     toggleClass: 'translate-y-0'
    //   //   } },
    //   //   "<"
    //   // )
    //   .fromTo("#cloud1", { x: 0 }, { xPercent: "-300" }, "<")
    //   .fromTo("#cloud2", { x: 0 }, { xPercent: "300" }, "<");
  }, []);

  useEffect(() => {
    gsap.to(".loop", {
      // this.x = x + Math.random() * 5\n//     this.y = y + Math.random() * 5\n//     this.dx = (0.5 - Math.random()) * 2 - 1\n//     this.dy = -Math.random() * 3 - 1\n//     this.life = 20 + Math.random() * 50
      // x: Math.random() * 5,
      // y: Math.random() * 5,
      // yPercent: Math.random() * 100, // 隨機決定y軸的移動距離
      // ease: "none",
      // duration: 10,
      // repeat: -1,
    });
  }, []);
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
        <div className="container mx-auto bg-contain bg-no-repeat md:bg-start">
          <div className="grid place-items-center">
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
            <div>
              <div className="left-0 fixed bottom-0 w-full">
                <div
                  id="characters"
                  className="flex items-end justify-around md:mx-8"
                >
                  {["character_f2e", "character_ui", "character_team"].map(
                    (item) => (
                      <img
                        key={item}
                        src={`./character/${item}.gif`}
                        className="z-10 w-1/4 object-contain"
                        alt="character_f2e"
                      />
                    )
                  )}
                </div>
                <img
                  src="./main/road.png"
                  id="road"
                  className="object-contain"
                  alt="road"
                />
              </div>
              <div
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
              ref={ref}
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
      <section>
        <div className="">
          <div className=" h-[72px] w-full bg-bg_talking_c bg-contain bg-repeat-x">
            <img src="./bg/bg_talking_c.png" alt="" />
            {/* <img className="w-full lg:w-[736px] lg:h-[251px]" src="./bg/bg_talking_c.png" alt="bg_talking" /> */}
            <h2 className="text-center">你是否也有以下困擾？</h2>
          </div>
        </div>
      </section>
      <object>
        <img className="loop" src="./index-show-pattern.svg" alt="" />
      </object>
    </main>
  );
}
