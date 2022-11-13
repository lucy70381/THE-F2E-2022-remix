type JoinButtonProps = {
  // text: string;
  // mode: "hover" | "animation" | "none";
  handSize?: string;
  btnSize?: string;
};

const JoinButton = ({
  // text,
  // mode,
  handSize = "h-[72px]",
  btnSize = "w-[60px]",
}: JoinButtonProps) => (
  <div className="grid w-1/2 place-content-center place-items-center md:w-full">
    <img
      className={`${handSize}`}
      src="./btn/btn_joinHand.gif"
      alt="btn_joinHand"
    />
    <img className={`${btnSize}`} src="./btn/btn_join_h.png" alt="btn_join" />
    {/* <h4 className="text-center text-primary">{text}</h4> */}
  </div>
);
export default JoinButton;
