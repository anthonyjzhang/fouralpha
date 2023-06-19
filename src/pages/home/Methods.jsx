import { useState } from "react";

const Methods = () => {
  const [toggleEquations, setToggleEquations] = useState(false);
  return (
    <section id="vision" className="wrapper ">
      <div className="contain justify-start items-start flex-col gap-2">
        <h5 className="text-lightBlue text-sm sm:text-base md:text-lg font-medium">
          Welcome to the future of sports betting with Four Alpha
        </h5>
        <h2 className="sm:mt-4 text-[#0a2540] text-2xl md:text-[38px] font-medium max-w-[640px]">
          Innovating new methods of profitability in the emerging sports betting
          market
        </h2>
        <div className="flex mt-3 lg:flex-row flex-col justify-between items-start w-full gap-5">
          <div className="flex sm:flex-row flex-col justify-start items-start gap-2 sm:gap-10">
            <div className="flex justify-start lg:max-w-[310px] items-start flex-col gap-2 sm:gap-5">
              <p className="text-darkGray leading-[24px] font-light text-sm">
                The global sports betting market has experienced{" "}
                <span className="text-darkPurple font-semibold">
                  exponential growth
                </span>
                , fueled by the rapid expansion of legalization across multiple
                US states. With the increase in bookmakers, sports betting has
                become a{" "}
                <span className="text-darkPurple font-semibold">
                  quasi-financial market
                </span>{" "}
                , with buyers (bettors) and sellers (bookies). Thus, the concept
                of{" "}
                <span className="text-darkPurple font-semibold">
                  arbitrage can be leveraged
                </span>{" "}
                to generate a{" "}
                <span className="text-darkPurple font-semibold">
                  guaranteed return on investment
                </span>{" "}
                by aggregating, analyzing, and testing betting lines across
                multiple bookmakers.
              </p>

              <p className="text-darkGray leading-[24px] lg:hidden block font-light text-sm">
                Arbitrage is the{" "}
                <span className="text-darkPurple font-semibold">
                  simultaneous purchase of the same asset
                </span>{" "}
                in different markets to profit from{" "}
                <span className="text-darkPurple font-semibold">
                  minuscule differences
                </span>{" "}
                in how an asset is priced. More simply, arbitrage is a{" "}
                <span className="text-darkPurple font-semibold">
                  market inefficiency
                </span>
                . Each sports book has proprietary methods to set odds. When{" "}
                <span className="text-darkPurple font-semibold">
                  major pricing discrepancies
                </span>{" "}
                occur, one can bet on opposing outcomes (betting both sides) and
                earn a{" "}
                <span className="text-darkPurple font-semibold">
                  risk-free return
                </span>
                . It sounds too good to be true, but it’s possible.
              </p>

              <p className="text-darkGray leading-[24px] font-light text-sm">
                Arbitrage bets aren’t widely practiced because they rarely
                exist, and require sifting through thousands of odds to chance
                upon a singular instance. However,{" "}
                <span className="text-darkPurple font-semibold">
                  Four Alpha takes on this technological burden
                </span>{" "}
                by automating a data analysis and{" "}
                <span className="text-darkPurple font-semibold">
                  detection pipeline to capitalize
                </span>{" "}
                on these opportunities.
              </p>
              <p className="text-darkGray leading-[24px] font-light lg:hidden block text-sm">
                Four Alpha is currently in an{" "}
                <span className="text-darkPurple font-semibold">
                  open beta phase
                </span>
                , but we’re preparing to dramatically{" "}
                <span className="text-darkPurple font-semibold">
                  expand our functionality
                </span>{" "}
                . We have ambitious aspirations to grow our product offerings.
                By combining quantitative finance, computer science, and data
                science, we hope to reap the sports betting market’s{" "}
                <span className="text-darkPurple font-semibold">
                  untapped potential
                </span>{" "}
                . Our hope is to be a leading quantitative sports betting firm,
                becoming industry disruptors, and contributing to the unlocking
                of a new sector within the sports betting market.
              </p>
              <p className="font-semibold text-dark text-sm leading-[24px]">
                Join Four Alpha as they create new possibilities, inspire
                change, and redefine the very nature of sports betting.{" "}
              </p>
            </div>
            <div className="flex justify-start lg:max-w-[310px] items-start flex-col gap-2 sm:gap-5">
              <p className="text-darkGray leading-[24px] lg:block hidden font-light text-sm">
                Arbitrage is the{" "}
                <span className="text-darkPurple font-semibold">
                  simultaneous purchase of the same asset
                </span>{" "}
                in different markets to profit from{" "}
                <span className="text-darkPurple font-semibold">
                  minuscule differences
                </span>{" "}
                in how an asset is priced. More simply, arbitrage is a{" "}
                <span className="text-darkPurple font-semibold">
                  market inefficiency
                </span>
                . Each sports book has proprietary methods to set odds. When{" "}
                <span className="text-darkPurple font-semibold">
                  major pricing discrepancies
                </span>{" "}
                occur, one can bet on opposing outcomes (betting both sides) and
                earn a{" "}
                <span className="text-darkPurple font-semibold">
                  risk-free return
                </span>
                . It sounds too good to be true, but it’s possible.
              </p>
              <p className="text-darkGray leading-[24px] font-light lg:block hidden text-sm">
                Four Alpha is currently in an{" "}
                <span className="text-darkPurple font-semibold">
                  open beta phase
                </span>
                , but we’re preparing to dramatically{" "}
                <span className="text-darkPurple font-semibold">
                  expand our functionality
                </span>{" "}
                . We have ambitious aspirations to grow our product offerings.
                By combining quantitative finance, computer science, and data
                science, we hope to reap the sports betting market’s{" "}
                <span className="text-darkPurple font-semibold">
                  untapped potential
                </span>{" "}
                . Our hope is to be a leading quantitative sports betting firm,
                becoming industry disruptors, and contributing to the unlocking
                of a new sector within the sports betting market.
              </p>
            </div>
          </div>
          <div className="flex justify-start lg:max-w-[350px] xl:max-w-[450px] items-start flex-col gap-2 sm:gap-5">
            <div
              className={`${
                toggleEquations ? "max-h-[6000px]" : "max-h-0 sm:max-h-none"
              } w-full flex justify-start items-start gap-2 sm:gap-5 flex-col transition-all duration-700 sm:mb-0  overflow-hidden`}
            >
              <p className="text-black font-light leading-[24px] text-sm ">
                Let’s say the event is Boston Celtics vs. Miami Heat, with
                Outcome A as Celtics Moneyline and Outcome B as Heat Moneyline.
                Obviously, only one team wins.{" "}
              </p>
              <p className="text-black font-light leading-[24px]  italic text-[10px] sm:text-xs">
                Implied Probability of Celtics Win = (1 / Decimal odds for
                Outcome A) x 100 <br /> Implied Probability of Heat Win = (1 /
                Decimal odds for Outcome B) x 100 <br /> Arbitrage{" "}
                {window.innerWidth > 640 ? "Percentage" : "%"} = Implied
                Probability(Celtics) + Implied Probability (Heat){" "}
              </p>
              <p className="text-black font-light leading-[24px] text-sm ">
                If Arbitrage Percentage {"<"} 100%, then this means an arbitrage
                opportunity is present, as the lines incorrectly imply there is
                a chance no team wins.{" "}
              </p>
              <p className="text-black font-light leading-[24px] text-sm ">
                Now that an arbitrage opportunity has been detected, the amount
                of money to bet on each outcome must be calculated. <br />
                <span className="italic text-[10px] sm:text-xs">
                  Individual Bet = (Investment x Implied Probability of Outcome)
                  / Arbitrage {window.innerWidth > 640 ? "Percentage" : "%"}
                </span>
              </p>
              <p className="text-black font-light leading-[24px] text-sm ">
                By placing these specific wagers, you can guarantee profit!{" "}
                <br />
                <span className="italic text-[10px] sm:text-xs">
                  Guaranteed Profit = (Investment / Arbitrage{" "}
                  {window.innerWidth > 640 ? "Percentage" : "%"}) - Investment
                </span>
              </p>
            </div>

            <button
              onClick={() => setToggleEquations((prev) => !prev)}
              className=" border-darkGray border-2 hover:bg-darkGray hover:text-white transition-all duration-200 border-solid w-[200px] h-[40px] bg-transparent uppercase text-sm rounded-xl  font-semibold text-darkGray self-center sm:hidden block"
            >
              Behind the Math
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
