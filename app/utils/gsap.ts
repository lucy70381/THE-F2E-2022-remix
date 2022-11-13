import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const Gsap = () => {
  function handleResize() {
    ScrollTrigger.refresh();
    gsap.to("#startSection", { y: 0, duration: 0 });
    console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
  }

  window.addEventListener("resize", handleResize);

  const startScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#startSection",
      start: () =>
        `top ${window.matchMedia("(max-width: 768px)").matches ? 83 : -1}`,
      end: () =>
        `center ${window.matchMedia("(max-width: 768px)").matches ? 83 : 0}`,
      pin: "#startSection",
      pinSpacing: false,
      scrub: true,
      markers: true,
      invalidateOnRefresh: true,
      onEnter: () => gsap.to("#startSection", { y: 0, duration: 0 }),
      onresize: () => gsap.to("#startSection", { y: 0, duration: 0 }),
    },
  });

  startScroll
    .fromTo("#orangeLight, #greenLight", { opacity: 1 }, { opacity: 0 })
    .to("#redLight", { opacity: 0 }, "+=2")
    .fromTo("#cloud1", { scale: 1 }, { scale: 0.6, ease: "elastic" }, ">+=2")
    .fromTo("#cloud2", { scale: 1 }, { scale: 0.6, ease: "elastic" }, "<")
    .to("#orangeLight", { opacity: 1 }, "<")
    .fromTo("#cloud1", { scale: 0.6 }, { scale: 0.3, ease: "elastic" }, ">+=2")
    .fromTo("#cloud2", { scale: 0.6 }, { scale: 0.3, ease: "elastic" }, "<")
    .to("#orangeLight", { opacity: 0 }, "<")
    .to("#greenLight", { opacity: 1 }, "<")
    .fromTo("#readyText", { text: "READY?" }, { text: "GO!" }, "<")
    .fromTo("#cloud1", { scale: 0.3 }, { scale: 0, ease: "elastic" }, ">+=2")
    .fromTo("#cloud2", { scale: 0.3 }, { scale: 0, ease: "elastic" }, "<")
    .to("#startSection", { opacity: 0 }, ">")
    .to("#logo", { opacity: 1 }, "<");

  const troubleScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#troubleSection",
      end: () => `10% top`,
      pin: !window.matchMedia("(max-width: 768px)").matches,
      pinSpacing: window.matchMedia("(max-width: 768px)").matches,
      scrub: true,
      markers: true,
    },
  });

  troubleScroll
    .to("#troubleSection", { opacity: 1 })
    .to("#characters, #road", {
      scale: 0.5,
      transformOrigin: "50% bottom",
    })
    .to("#troubleDecorate", { opacity: 1 }, "<")
    .to("#map_now", { x: 38, y: -44 }, "<")
    .fromTo("#troubleTitle", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "<")
    .fromTo("#trouble1", { x: -300, opacity: 0 }, { x: 0, opacity: 1 }, ">+=2")
    .to("#trouble2", { opacity: 1 }, ">+=2")
    .fromTo("#trouble3", { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, ">+=2")
    .to("#troubleDecorate", { opacity: 0 }, "<");

  const topicScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#topicSection",
      end: () => `10% top`,
      pin: !window.matchMedia("(max-width: 768px)").matches,
      pinSpacing: window.matchMedia("(max-width: 768px)").matches,
      scrub: 0.5,
      markers: true,
    },
  });

  topicScroll
    .to("#topicSection", { opacity: 1 })
    .to("#weeksSection", { opacity: 0 }, "<")
    .fromTo("#topicTitle", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "<")
    .to(
      "#characters, #road",
      {
        scale: 1,
      },
      ">"
    )
    .fromTo("#topic1", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#topic2", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#topic3", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .to("#trouble2", { opacity: 1 }, ">")
    .fromTo("#trouble3", { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, ">");

  const weeksScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#weeksSection",
      end: () => `center top`,
      pinSpacing: false,
      scrub: 0.5,
      markers: true,
    },
  });

  weeksScroll
    .to("#weeksSection", { opacity: 1 })
    .fromTo("#weeksTitle", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "<")
    .to(
      "#characters, #road",
      {
        scale: 0.5,
        transformOrigin: "50% bottom",
      },
      ">"
    )
    .fromTo("#activity1", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#activity2", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#activity3", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">");

  const datesScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#datesSection",
      end: () => `10% top`,
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      markers: true,
    },
  });

  datesScroll
    .to("#datesSection", { opacity: 1 })
    .to("#questionSection", { opacity: 0 }, "<")
    .to(
      "#characters, #road",
      {
        scale: 1,
      },
      ">"
    )
    .fromTo("#date_line", { opacity: 0 }, { opacity: 1 }, "<")
    .fromTo("#date1", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#date2", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#date3", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">");

  const questionScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#questionSection",
      end: () => `10% top`,
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      markers: true,
    },
  });

  questionScroll
    .to("#questionSection", { opacity: 1 })
    .to("#awardsSection", { opacity: 0 }, "<")
    .fromTo("#date_line", { opacity: 0 }, { opacity: 1 }, "<")
    .fromTo("#decorate_03", { x: -300, opacity: 0 }, { x: 0, opacity: 1 }, ">")
    .fromTo("#decorate_07", { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, "<");

  const awardsScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#awardsSection",
      end: () => `10% top`,
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      markers: true,
    },
  });

  awardsScroll
    .to("#awardsSection", { opacity: 1 })
    .to("#sponsorsSection", { opacity: 0 }, "<")
    .to("#decorate_03", { opacity: 0 }, "<")
    .to("#decorate_07", { opacity: 0 }, "<")
    .to(
      "#characters, #road",
      {
        scale: 0.5,
        transformOrigin: "50% bottom",
      },
      ">"
    )
    .fromTo("#awardsTitle", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("awardsContent", { opacity: 0 }, { opacity: 1 }, ">");

  const sponsorsScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#sponsorsSection",
      end: () => `10% top`,
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      markers: true,
    },
  });

  sponsorsScroll
    .to("#sponsorsSection", { opacity: 1 })
    .to("#finishSection", { opacity: 0 }, "<")
    .fromTo("#sponsorsTitle", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .to("#decorate_04, #decorate_08", { opacity: 1 }, ">")
    .to(
      "#decorate_04, #decorate_08",
      {
        scale: 0.5,
        transformOrigin: "50% bottom",
      },
      ">"
    )
    .fromTo("#sponsor1", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#sponsor2", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .fromTo("#sponsor3", { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, ">")
    .to("#decorate_04, #decorate_08", { opacity: 0 }, "<");

  const finishScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#finishSection",
      end: () => `10% top`,
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      markers: true,
    },
  });

  finishScroll
    .to("#finishSection", { opacity: 1 })
    .to("#cloud3", { x: 0, opacity: 1 }, ">")
    .to("#cloud4", { x: 0, opacity: 1 }, "<")
    .fromTo("#finish", { opacity: 0 }, { x: 0, opacity: 1 }, ">")
    .fromTo("#cloud3", { x: 0 }, { x: 100 }, ">")
    .fromTo("#cloud4", { x: 0 }, { x: -100 }, "<")

    .fromTo("#finishLine_l", { opacity: 0 }, { opacity: 1 }, ">+=2")
    .fromTo("#finishLine_r", { opacity: 0 }, { opacity: 1 }, "<")
    .to(
      "#characters",
      {
        scale: 1.05,
      },
      ">+=2"
    )
    .fromTo("#finishLine_l", { x: 0 }, { x: -100 }, "<")
    .fromTo("#finishLine_r", { x: 0 }, { x: 100 }, "<")
    .fromTo("#finishLine_l", { opacity: 1 }, { opacity: 0 }, ">")
    .fromTo("#finishLine_r", { opacity: 1 }, { opacity: 0 }, "<")
    .to(
      "#characters",
      {
        scale: 1.1,
      },
      "<"
    )
    .to("#characters", { opacity: 0 }, ">")
    .to("#finishSection", { opacity: 0 }, "<");

  const signupScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#signupSection",
      end: () => `10% top`,
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      markers: true,
    },
  });

  signupScroll.to("#signupSection", { opacity: 1 });
};

export default Gsap;
