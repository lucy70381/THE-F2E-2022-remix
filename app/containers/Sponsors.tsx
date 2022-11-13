import SectionTitle from "~/components/SectionTitle";

const Sponsors = () => (
  <section
    id="sponsorsSection"
    className="relative pb-[60px] md:mb-0 md:h-screen"
  >
    <SectionTitle id="sponsorsTitle" title="贊助單位" width={466} />
    <div className="container grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
      <div className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-end-12">
        <div className="grid items-center justify-between gap-y-10 gap-x-5 md:flex lg:gap-x-[60px]">
          {[
            { company: "#版塊設計", logoName: "blockstudio" },
            { company: "#鈦坦科技", logoName: "titansoft" },
            { company: "#凱鈿科技", logoName: "kdanmobile" },
          ].map(({ company, logoName }, index) => (
            <div
              id={`sponsor${index + 1}`}
              className="grid place-items-center"
              key={company}
            >
              <img
                className="mb-3 rounded-[60px] border-4 border-primary md:rounded-[24px] lg:rounded-[60px] lg:border-8"
                src={`./main/logo_${logoName}.png`}
                alt={logoName}
              />
              <p className="highlight rounded-full border-2 border-secondary-dark py-1 px-6 text-secondary-dark">
                {company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="container fixed -bottom-4 left-1/2 -z-10 hidden -translate-x-1/2 justify-between md:flex">
      <img
        id="decorate_04"
        className="w-[331px] object-contain"
        src="./bg/bg_decorate_04.png"
        alt="bg_decorate_04"
      />
      <img
        id="decorate_08"
        className="w-[342px] object-contain"
        src="./bg/bg_decorate_08.png"
        alt="bg_decorate_08"
      />
    </div>
  </section>
);

export default Sponsors;
