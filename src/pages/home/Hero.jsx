import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="wrapper pt-[100px] sm:pt-[120px] overflow-hidden md:pt-[160px] 2xl:pt-[210px]"
    >
      {/* <video
        className="absolute -top-[20%] sm:-top-[28%] -skew-y-[15deg] left-0 w-full object-cover 2xl:max-h-[36vw] 3xl:max-h-[30vw]  max-h-[36vw] min-h-[290px] sm:min-h-[340px] -z-10"
        src="/gr.mp4"
        muted
        loop
        controls={false}
        autoPlay
        playsInline
      ></video> */}
      <img
        src="/gr.png"
        className="absolute -top-[20%] sm:-top-[16%] lg:-top-[28%] -skew-y-[15deg] left-0 w-full object-cover 2xl:max-h-[36vw] 3xl:max-h-[30vw]  max-h-[36vw] min-h-[290px] sm:min-h-[340px] -z-10"
        alt=""
      />
      {/* <img
        src="/hero-gr.png"
        className="absolute top-0 left-0 w-full object-cover min-h-[250px] sm:min-h-[340px] -z-10"
        alt=""
      /> */}
      <div className="contain lg:flex-row flex-col  justify-between items-center md:items-start gap-10">
        <div className="flex lg:w-auto w-full justify-start items-center text-center md:text-left md:items-start flex-col gap-5">
          <h2 className="text-dark leading-[1.13] font-semibold text-[32px] sm:text-[45px] md:text-[60px] xl:text-[75px] 2xl:text-[85px]">
            Risk-Free <br className="md:block hidden" />
            Sports Betting <br className="md:block hidden" />
            Arbitrage Opportunities
          </h2>
          <p className="text-darkGray w-full text-base lg:mt-6 xl:text-lg font-normal max-w-[685px] leading-[1.9]">
            By leveraging discrepancies in over 10 bookmakers’ betting lines,
            Four Alpha automates the detection of arbitrage opportunities across
            multiple live and upcoming sporting events to allow users access to
            bets that yield a guaranteed return on investment.
          </p>
          <Link
            to="/arbi-table"
            className="text-white grid place-items-center font-helvetica font-medium text-base w-[280px] h-[41px] bg-lightBlue shadow-btn hover:opacity-70 transition-all duration-300 border border-solid border-lightBlue rounded-full  outline-none leading-[1] pt-0.5"
          >
            View Arbitrage Opportunities
          </Link>
          <div className="hidden sm:flex flex-wrap justify-center md:justify-start items-center gap-5 max-w-[710px]">
            <img
              src="/partners/partner6.png"
              className="object-contain max-h-[44px]"
              alt=""
            />
            <img
              src="/partners/partner7.png"
              alt=""
              className="object-contain max-h-[29px]"
            />
            <img
              src="/partners/partner2.png"
              alt=""
              className="object-contain max-h-[39px]"
            />
            <img
              src="/partners/partner8.png"
              alt=""
              className="object-contain max-h-[28px]"
            />
            <img
              src="/partners/partner.png"
              alt=""
              className="object-contain max-h-[34px]"
            />
            <img
              src="/partners/partner9.png"
              alt=""
              className="object-contain max-h-[56px]"
            />
            <img
              src="/partners/partner11.png"
              alt=""
              className="object-contain max-h-[28px]"
            />
            <img
              src="/partners/partner10.png"
              alt=""
              className="object-contain max-h-[28px]"
            />
            <img
              src="/partners/partner5.png"
              alt=""
              className="object-contain max-h-[45px]"
            />
            <img
              src="/partners/partner4.png"
              alt=""
              className="object-contain max-h-[30px]"
            />
            <img
              src="/partners/partner12.png"
              alt=""
              className="object-contain max-h-[30px]"
            />
            <img
              src="/partners/partner3.png"
              alt=""
              className="object-contain max-h-[35px]"
            />
          </div>
          <div className="sm:hidden mt-4 w-full  team3 pb-2 ">
            <Splide
              options={{
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: true,
                autoplay: true,
                width: "100%",
                gap: "20px",
                drag: true,
                type: "loop",
              }}
            >
              <SplideSlide>
                <div className="flex justify-center items-center gap-5 w-full">
                  <img
                    src="/partners/partner6.png"
                    className="object-contain max-h-[44px]"
                    alt=""
                  />
                  <img
                    src="/partners/partner7.png"
                    alt=""
                    className="object-contain max-h-[29px]"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center gap-5 w-full">
                  <img
                    src="/partners/partner2.png"
                    alt=""
                    className="object-contain max-h-[39px]"
                  />
                  <img
                    src="/partners/partner8.png"
                    alt=""
                    className="object-contain max-h-[28px]"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center gap-5 w-full">
                  <img
                    src="/partners/partner.png"
                    alt=""
                    className="object-contain max-h-[34px]"
                  />
                  <img
                    src="/partners/partner9.png"
                    alt=""
                    className="object-contain max-h-[56px]"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center gap-5 w-full">
                  <img
                    src="/partners/partner11.png"
                    alt=""
                    className="object-contain max-h-[28px]"
                  />
                  <img
                    src="/partners/partner10.png"
                    alt=""
                    className="object-contain max-h-[28px]"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center gap-5 w-full">
                  <img
                    src="/partners/partner5.png"
                    alt=""
                    className="object-contain max-h-[45px]"
                  />
                  <img
                    src="/partners/partner4.png"
                    alt=""
                    className="object-contain max-h-[30px]"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center gap-5 w-full">
                  <img
                    src="/partners/partner12.png"
                    alt=""
                    className="object-contain max-h-[30px]"
                  />
                  <img
                    src="/partners/partner3.png"
                    alt=""
                    className="object-contain max-h-[35px]"
                  />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <img
          src="/phone.png"
          className="object-contain  w-full max-w-[220px] xl:max-w-[260px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
