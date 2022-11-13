import JoinButton from "~/components/JoinButton";

const Footer = () => (
  <>
    <img
      className="fixed bottom-8 left-5 w-[224px] opacity-0 md:opacity-100"
      src="./main/map.svg"
      alt="map"
    />
    <img
      className="fixed bottom-8 left-5 hidden w-[224px]"
      src="./main/map_finish.svg"
      alt="map_finish"
    />
    <img
      id="map_now"
      className="fixed bottom-[104px] left-[20px] opacity-0 md:opacity-100"
      src="./main/map_now.gif"
      alt="map_now"
    />
    <div className="fixed right-5 bottom-4 opacity-0 md:opacity-100">
      <JoinButton />
    </div>
    <img
      src="./main/road.png"
      id="road"
      className="container fixed left-1/2 bottom-0 z-0 -mt-10 w-full -translate-x-1/2 object-contain md:-mt-20"
      alt="road"
    />
  </>
);

export default Footer;
