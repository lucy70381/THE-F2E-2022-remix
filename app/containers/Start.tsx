import Ready from "~/components/Ready";
import SvgUsers from "../components/SvgUsers";

const Start = () => (
  <section
    id="startSection"
    className="h-screen bg-[length:75%_100vh] bg-center bg-no-repeat md:bg-start mt-[83px] md:mt-0"
  >
    <div className="container mx-auto">
      {/* <div className="absolute top-0 left-1/2 h-screen w-3/4 -translate-x-1/2 bg-[length:100%_100vh] bg-no-repeat md:bg-start"></div> */}

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
        <h1 className="bg-highlight mt-4 inline rounded-full px-10 py-2 text-white md:-mt-2 md:mb-1">
          互動式網頁設計
        </h1>
        <div className="justify-between md:flex md:w-full md:px-8">
          {[
            { role: "前端工程師", count: 920 },
            { role: "UI 設計師", count: 110 },
            { role: "團體組", count: 41 },
          ].map(({ role, count }) => (
            <div className="mx-auto" key={role}>
              <h5 className="text-center text-primary">{role}</h5>
              <div className="flex items-center justify-center rounded-full bg-primary py-1 px-5 md:px-7">
                <SvgUsers width={20} height={20} color={"white"} />
                <span className="highlight ml-2 block text-white">{count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-1/2 flex justify-between md:justify-around">
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
    <Ready />
  </section>
);

export default Start;
