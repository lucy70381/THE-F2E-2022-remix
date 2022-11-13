import { useEffect } from "react";
import Gsap from "~/utils/gsap";
import Footer from "~/containers/Footer";
import NavBar from "~/containers/NavBar";
import Start from "~/containers/Start";
import Trouble from "~/containers/Trouble";
import Topic from "~/containers/Topic";
import Characters from "~/components/Characters";
import Weeks from "~/containers/Weeks";
import Dates from "~/containers/Dates";
import Question from "~/containers/Question";
import Awards from "~/containers/Awards";
import Sponsors from "~/containers/Sponsors";
import Finish from "~/containers/Finish";
import SignUp from "~/containers/SignUp";

export default function Index() {
  useEffect(() => {
    Gsap();
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Start />
        <Trouble />
        <Topic />
        <Weeks />
        <Dates />
        <Question />
        <Awards />
        <Sponsors />
        <Finish />
        <SignUp />
        <Characters />
      </main>
      <Footer />
    </>
  );
}
