import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

const Roadmap = () => {
  const [restart, setRestart] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const container = useRef(null);
  const line = useRef(null);
  const dot1 = useRef(null);
  const dot2 = useRef(null);
  const dot3 = useRef(null);
  const dot4 = useRef(null);
  const dot5 = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const title4 = useRef(null);
  const title5 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const textDivLine1 = useRef(null);
  const textDivLine2 = useRef(null);
  const textDivLine3 = useRef(null);
  const textDivLine4 = useRef(null);
  const textDivLine5 = useRef(null);
  const titleMob1 = useRef(null);
  const titleMob2 = useRef(null);
  const titleMob3 = useRef(null);
  const titleMob4 = useRef(null);
  const titleMob5 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        defaults: { duration: 1 },
      });

      timeline
        .to(line.current, { width: `10%` })
        .fromTo(
          title1.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0 },
          "part1"
        )
        .fromTo(dot1.current, { opacity: 0 }, { opacity: 1 }, "part1")
        .fromTo(
          textDivLine1.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "part1"
        )
        .fromTo(
          text1.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part1"
        )
        ////////////////
        .to(line.current, { width: `30%` })
        .fromTo(dot2.current, { opacity: 0 }, { opacity: 1 }, "part2")
        .fromTo(
          title2.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 },
          "part2"
        )
        .fromTo(
          textDivLine2.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          "part2"
        )
        .fromTo(
          text2.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part2"
        )
        ////////////////////
        .to(line.current, { width: `50%` })
        .fromTo(dot3.current, { opacity: 0 }, { opacity: 1 }, "part3")
        .fromTo(
          title3.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0 },
          "part3"
        )
        .fromTo(
          textDivLine3.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "part3"
        )
        .fromTo(
          text3.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part3"
        )
        ////////////////////
        .to(line.current, { width: `70%` })
        .fromTo(dot4.current, { opacity: 0 }, { opacity: 1 }, "part4")
        .fromTo(
          title4.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 },
          "part4"
        )
        .fromTo(
          textDivLine4.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          "part4"
        )
        .fromTo(
          text4.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part4"
        )
        /////////////////////
        .to(line.current, { width: `90%` })
        .fromTo(dot5.current, { opacity: 0 }, { opacity: 1 }, "part5")
        .fromTo(
          title5.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0 },
          "part5"
        )
        .fromTo(
          textDivLine5.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "part5"
        )
        .fromTo(
          text5.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part5"
        )
        .to(line.current, {
          width: "100%",
          onComplete: () => setShowBtn(true),
        });
    });
    mm.add("(max-width:768px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        defaults: { duration: 1 },
      });
      timeline
        .to(line.current, { height: `0%` })
        .fromTo(
          titleMob1.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          "part1"
        )
        .fromTo(dot1.current, { opacity: 0 }, { opacity: 1 }, "part1")

        .fromTo(
          text1.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part1"
        )
        ////////////////
        .to(line.current, { height: `20%` })
        .fromTo(
          titleMob2.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          "part2"
        )
        .fromTo(dot2.current, { opacity: 0 }, { opacity: 1 }, "part2")

        .fromTo(
          text2.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part2"
        )
        ////////////////
        .to(line.current, { height: `40%` })
        .fromTo(
          titleMob3.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          "part3"
        )
        .fromTo(dot3.current, { opacity: 0 }, { opacity: 1 }, "part3")

        .fromTo(
          text3.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part3"
        )
        ////////////////
        .to(line.current, { height: `60%` })
        .fromTo(
          titleMob4.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          "part4"
        )
        .fromTo(dot4.current, { opacity: 0 }, { opacity: 1 }, "part4")

        .fromTo(
          text4.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3 },
          "part4"
        )
        ////////////////
        .to(line.current, { height: `80%` })
        .fromTo(
          titleMob5.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          "part5"
        )
        .fromTo(dot5.current, { opacity: 0 }, { opacity: 1 }, "part5")

        .fromTo(
          text5.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 0.3, onComplete: () => setShowBtn(true) },
          "part5"
        );
      ////////////////
    });
    return () => {
      mm.revert();
    };
  }, [restart]);

  return (
    <div
      ref={container}
      className="my-3 md:my-[60px]  max-w-[830px] flex justify-start items-center flex-col gap-3 md:gap-14 w-full"
    >
      <div className="grid  md:gap-x-0 gap-x-3 grid-cols-[auto__1fr] md:grid-cols-5 md:gap-y-3 md:place-items-center md:grid-rows-[auto__auto__auto] w-full">
        <div className="grid grid-rows-5 md:min-h-0 min-h-[400px] md:grid-rows-1 md:grid-cols-5 isolate md:place-items-center w-full md:row-start-2 md:row-end-3 col-span-1 relative row-start-1 row-span-5 md:row-span-1 md:col-span-5">
          <div
            ref={line}
            className="bg-darkPurple w-[1px] md:w-0 -z-10 h-[80%] md:h-[1px] absolute top-3 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"
          ></div>
          <div
            ref={dot1}
            className="border-2 border-solid border-lightBlue w-6 h-6 rounded-full grid place-items-center"
          >
            <div className="bg-lightBlue w-[14px] h-[14px] rounded-full"></div>
          </div>
          <div
            ref={dot2}
            className="border-2 border-solid border-lightBlue w-6 h-6 rounded-full grid place-items-center"
          >
            <div className="bg-lightBlue w-[14px] h-[14px] rounded-full"></div>
          </div>
          <div
            ref={dot3}
            className="border-2 border-solid border-lightBlue w-6 h-6 rounded-full grid place-items-center"
          >
            <div className="bg-lightBlue w-[14px] h-[14px] rounded-full"></div>
          </div>
          <div
            ref={dot4}
            className="border-2 border-solid border-lightBlue w-6 h-6 rounded-full grid place-items-center"
          >
            <div className="bg-lightBlue w-[14px] h-[14px] rounded-full"></div>
          </div>
          <div
            ref={dot5}
            className="border-2 border-solid border-lightBlue w-6 h-6 rounded-full grid place-items-center"
          >
            <div className="bg-lightBlue w-[14px] h-[14px] rounded-full"></div>
          </div>
        </div>
        {/* //first part ---------------- */}
        <h4
          ref={title1}
          className="text-darkPurple self-end font-bold text-xl md:block hidden md:row-start-1"
        >
          Nov 2021
        </h4>
        <div className="md:row-start-3 text-center gap-2 flex justify-start md:col-auto col-start-2 items-start md:items-center flex-col md:w-auto w-full">
          <div ref={textDivLine1} className="relative md:block hidden">
            <div className="w-[1px] h-[50px] bg-[#DCDCDC]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#DCDCDC] w-2 h-2 rounded-full"></div>
          </div>
          <h4
            ref={titleMob1}
            className="text-darkPurple  font-bold text-lg md:hidden block leading-[1.3]"
          >
            Nov 2021
          </h4>
          <p
            ref={text1}
            className="text-dark font-normal text-base md:text-sm md:max-w-[150px]"
          >
            Idea formulation
          </p>
        </div>
        {/* //second part ---------------- */}
        <h4
          ref={title2}
          className="text-darkPurple self-start font-bold text-xl row-start-3 md:block hidden"
        >
          Dec 2021
        </h4>
        <div className="md:row-start-1 text-center gap-2 flex justify-start md:col-auto col-start-2 items-start w-full md:items-center md:flex-col-reverse flex-col ">
          <div ref={textDivLine2} className="relative md:block hidden">
            <div className="w-[1px] h-[50px] bg-[#DCDCDC]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#DCDCDC] w-2 h-2 rounded-full"></div>
          </div>
          <h4
            ref={titleMob2}
            className="text-darkPurple  font-bold text-lg md:hidden block leading-[1.3]"
          >
            Dec 2021
          </h4>
          <p
            ref={text2}
            className="text-dark font-normal text-base md:text-sm md:max-w-[150px]"
          >
            Spray painted logo
          </p>
        </div>
        {/* //third part ---------------- */}
        <h4
          ref={title3}
          className="text-darkPurple self-end font-bold text-xl md:block hidden md:row-start-1"
        >
          May 2022
        </h4>
        <div className="md:row-start-3 text-center gap-2 flex justify-start md:col-auto col-start-2 items-start md:items-center flex-col w-full ">
          <div ref={textDivLine3} className="relative md:block hidden">
            <div className="w-[1px] h-[50px] bg-[#DCDCDC]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#DCDCDC] w-2 h-2 rounded-full"></div>
          </div>
          <h4
            ref={titleMob3}
            className="text-darkPurple  font-bold text-lg md:hidden block leading-[1.3]"
          >
            May 2022
          </h4>
          <p
            ref={text3}
            className="text-dark font-normal text-base md:text-sm md:max-w-[150px]"
          >
            Backend algorithm passes testing phase
          </p>
        </div>
        {/* //fourth part ---------------- */}
        <h4
          ref={title4}
          className="text-darkPurple self-start font-bold text-xl row-start-3 md:block hidden"
        >
          Jan 2023
        </h4>
        <div
          className="md:row-start-1 text-center gap-2 flex justify-start md:col-auto col-start-2 items-start
       md:items-center md:flex-col-reverse flex-col w-full "
        >
          <div ref={textDivLine4} className="relative md:block hidden">
            <div className="w-[1px] h-[50px] bg-[#DCDCDC]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#DCDCDC] w-2 h-2 rounded-full"></div>
          </div>
          <h4
            ref={titleMob4}
            className="text-darkPurple  font-bold text-lg md:hidden block leading-[1.3]"
          >
            Jan 2023
          </h4>
          <p
            ref={text4}
            className="text-dark font-normal text-base md:text-sm md:max-w-[150px]"
          >
            Initial deployment
          </p>
        </div>
        {/* //fifth part ---------------- */}
        <h4
          ref={title5}
          className="text-darkPurple self-end font-bold text-xl md:block hidden md:row-start-1"
        >
          Fall 2023
        </h4>
        <div className="md:row-start-3 text-center gap-2 flex justify-start md:col-auto col-start-2 items-start md:items-center flex-col w-full">
          <div ref={textDivLine5} className="relative md:block hidden">
            <div className="w-[1px] h-[50px] bg-[#DCDCDC]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#DCDCDC] w-2 h-2 rounded-full"></div>
          </div>
          <h4
            ref={titleMob5}
            className="text-darkPurple  font-bold text-lg md:hidden block leading-[1.3]"
          >
            Fall 2023
          </h4>
          <p
            ref={text5}
            className="text-dark font-normal text-base md:text-sm md:max-w-[150px]"
          >
            Coming soon
          </p>
        </div>
      </div>

      <button
        onClick={() => setRestart((prev) => (prev += 1))}
        className={`transition-all duration-300 ${
          showBtn
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } border-darkGray border-2 hover:bg-darkGray hover:text-white transition-all duration-200 border-solid w-[100px] h-[40px] bg-transparent uppercase text-sm rounded-xl  font-semibold text-darkGray`}
      >
        Restart
      </button>
    </div>
  );
};

export default Roadmap;
