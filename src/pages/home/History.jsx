import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Roadmap from "./Roadmap";

const History = () => {
  return (
    <section id="history" className="wrapper mt-[110px] sm:mt-[40px]">
      <div className="contain justify-start items-start flex-col gap-5">
        <div className="sm:mb-5">
          <h5 className="text-darkPurple text-sm sm:text-base md:text-lg font-medium">
            History
          </h5>
          <h2 className="mt-2 sm:mt-7 text-[#0A2540] text-2xl md:text-[38px] font-medium lg:max-w-[640px]">
            United by Entrepreneurial Drive
          </h2>
        </div>
        <div className="flex justify-start items-start gap-6  lg:flex-row flex-col">
          <p className="text-darkGray text-base font-light leading-[1.6] lg:max-w-[280px]">
            In the dorms of{" "}
            <span className="text-lightBlue font-medium">Duke University</span>,
            four students found themselves united by a shared passion for
            basketball. They watched NBA games together, arguing different takes
            and supporting different teams, but an{" "}
            <span className="text-lightBlue font-medium">
              entrepreneurial spirit
            </span>{" "}
            sparked ambitions beyond the court.
          </p>
          <p className="text-darkGray text-base font-light leading-[1.6] lg:max-w-[230px]">
            In the middle of their freshman year, they noticed an increased buzz
            surrounding sports betting. College students were a prime market
            that fed on the allure of potential instant rewards in this{" "}
            <span className="text-lightBlue font-medium">
              emerging market. An idea sparked.
            </span>
          </p>
          <p className="text-darkGray text-base font-light leading-[1.6] lg:max-w-[260px]">
            With a commitment to see this idea through, Four Alpha set out to{" "}
            <span className="text-lightBlue font-medium">
              redefine sports betting.
            </span>{" "}
            Their vision was clear: to create a product that not only
            capitalized on the excitement of sports betting, but{" "}
            <span className="text-lightBlue font-medium">
              revolutionize the industry
            </span>{" "}
            with applied math and technology.
          </p>
        </div>
        <Roadmap />
        <div className="flex justify-start items-start  flex-col gap-5">
          <div className="flex justify-start items-start gap-6  lg:flex-row flex-col">
            <p className="text-darkGray text-base font-light leading-[1.6] lg:max-w-[260px]">
              Thus,{" "}
              <span className="text-lightBlue font-medium">
                Four Alpha was born
              </span>{" "}
              - a name symbolizing their quest for strategic advantage,
              technological innovation, and profit. Driven by their shared
              determination, Four Alpha embarked on a journey, leveraging
              methodologies to identify and exploit discrepancies in bookmakers’
              betting lines.
            </p>
            <p className="text-darkGray text-base font-light leading-[1.6] lg:max-w-[336px]">
              Four Alpha stands at the{" "}
              <span className="text-lightBlue font-medium">
                intersection of sports, finance, and technology.
              </span>{" "}
              Armed with their unique blend of expertise in finance and tech,
              Four Alpha harnesses the power of{" "}
              <span className="text-lightBlue font-medium">
                data-driven insights
              </span>{" "}
              and applies it to the sports betting market. Four Alpha endeavors
              to{" "}
              <span className="text-lightBlue font-medium">
                unlock the true potential of sports betting
              </span>{" "}
              as we hope to pave the way for a new era of quantitative betting
              firms.
            </p>
            <img
              src="/his1.png"
              className="lg:block hidden h-full ml-auto lg:max-w-[185px] object-cover"
              alt=""
            />
          </div>
          <div className="w-full max-w-[829px] overflow-hidden">
            <img
              src="/his2.png"
              className="lg:block hidden max-w-[829px] w-full object-contain"
              alt=""
            />

            <Splide
              options={{
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: false,
                width: "100%",
                gap: "20px",
                drag: true,
                type: "loop",
              }}
              className="lg:hidden block"
            >
              <SplideSlide>
                <img
                  src="/his2.png"
                  className="max-w-[829px] w-full object-contain"
                  alt=""
                />
              </SplideSlide>

              <SplideSlide>
                <div className="w-full flex justify-center items-center">
                  <img
                    src="/his1.png"
                    className="h-full  lg:max-w-[185px] object-cover"
                    alt=""
                  />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
