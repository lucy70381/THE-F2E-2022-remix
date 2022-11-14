import JoinButton from "~/components/JoinButton";

const Footer = () => (
  <>
    <img
      id="map"
      className="fixed bottom-8 left-5 hidden w-[224px] md:block"
      src="./main/map.svg"
      alt="map"
    />
    <img
      id="map_finish"
      className="fixed bottom-8 left-5 hidden w-[224px] opacity-0 md:block"
      src="./main/map_finish.svg"
      alt="map_finish"
    />
    <img
      id="map_now"
      className="fixed bottom-[104px] left-[20px] opacity-0 md:opacity-100"
      src="./main/map_now.gif"
      alt="map_now"
    />
    <a href="https://2022.thef2e.com" className="z-10 fixed right-5 bottom-4 opacity-0 md:opacity-100">
      <p className="text-primary text-center font-bold">JOIN</p>
      <JoinButton />
    </a>
    <img
      src="./main/road.png"
      id="road"
      className="container fixed left-1/2 bottom-0 z-0 -mt-10 w-full -translate-x-1/2 object-contain md:-mt-20"
      alt="road"
    />
  </>
);

export default Footer;
