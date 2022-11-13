import JoinButton from "~/components/JoinButton";

const SignUp = () => (
  <section
    id="signupSection"
    className="container mt-[83px] grid h-screen place-content-center place-items-center md:mt-0"
  >
    <img
      className="mb-7 md:w-2/5 object-contain"
      src="./logo/logo.png"
      alt="logo"
    />
    <a href="/" className="mb-5 grid place-items-center">
      <JoinButton handSize="w-[88px]" btnSize="w-40" />
      <h2 className="text-highlight text-center">立即報名</h2>
    </a>
  </section>
);

export default SignUp;
