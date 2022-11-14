import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav id="NavBar">
        <div className="fixed top-0 z-20 flex w-full items-center justify-center bg-secondary md:hidden">
          <a
            href="/"
            className="mt-2 block aspect-[3/1] w-2/5 overflow-hidden whitespace-nowrap bg-logo_text bg-contain bg-no-repeat indent-[101%] md:mt-10 md:w-3/5 md:hidden"
          >
            The F2E 4th
          </a>
        </div>

        <menu className="fixed top-0 left-0 z-20 flex h-full border-primary bg-primary pt-10 md:pl-5">
          {openMenu && (
            <div className="grid place-content-start gap-y-10 px-4">
              {[
                { name: "關卡資訊", iconName: "info", link: 'https://2022.thef2e.com/news' },
                { name: "作品列表", iconName: "list", link: 'https://2022.thef2e.com/works' },
                { name: "攻略資源", iconName: "strategy", link: 'https://hackmd.io/ofJD4K7iSI65V19zxC7d0w' },
                { name: "求職專區", iconName: "job", link: 'https://2022.thef2e.com/jobs' },
              ].map(({ name, iconName, link }) => (
                <a href={link} key={iconName}>
                  <img
                    className="mx-auto mb-1 block h-[60px] w-[60px]"
                    src={`./ic/ic_menu_${iconName}.png`}
                    alt={iconName}
                  />
                  <p className="text-secondary">{name}</p>
                </a>
              ))}
            </div>
          )}
        </menu>
        <button
          className={`fixed top-6 md:top-1/2 ${
            openMenu ? "left-[98px] md:left-[124px]" : "left-0 md:left-5"
          } z-20`}
          onClick={() => setOpenMenu((preState) => !preState)}
        >
          <img
            src="./btn/btn_burger_open.png"
            className="h-10 w-10"
            alt="btn_burger_open"
          />
        </button>
        <button className="fixed top-6 right-2 z-20">
          <img src="./btn/btn_user.png" className="h-10 w-10" alt="btn_user" />
        </button>
        <a href="/" id="logo" className="hidden opacity-0 md:block fixed top-2 left-9 z-20">
          <img className="w-[200px]" src="./logo/logo.png" alt="logo" />
        </a>
      </nav>
    </>
  );
};

export default NavBar;
