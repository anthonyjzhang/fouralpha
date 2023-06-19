const Code = () => {
  return (
    <section className="wrapper lg:bg-transparent bg-darkGray lg:p-0 pt-10 pb-14  mt-[70px] lg:mt-[120px] relative isolate">
      <div className="  w-full   lg:w-[107%] slant2   lg:-left-10  bg-darkGray py-10 absolute top-0  left-0 -z-10 h-full  lg:block hidden "></div>
      <div className="bg-darkGray bottom-0 left-0 lg:block hidden w-full h-[400px] -z-10 absolute"></div>
      <div className="flex justify-start items-center flex-col w-screen md:pt-[80px] lg:pt-[160px] lg:pb-[150px]">
        <div
          id="code"
          className="contain justify-start items-start flex-col gap-5"
        >
          <div className="sm:mb-5">
            <h5 className="text-lightBlue text-sm sm:text-base md:text-lg font-medium">
              Code
            </h5>
            <h2 className="mt-2 sm:mt-5 text-white leading-[1.26] text-2xl md:text-[38px] font-medium lg:max-w-[715px]">
              Exploiting inefficiencies in the sports betting industry with
              proprietary technology
            </h2>
            <p className="text-white mt-2 sm:mt-5 leading-[1.56] font-light text-sm max-w-[700px]">
              Four Alpha takes on the technological burden on behalf of our
              users. Our in-house Python engine aggregates betting odds from 10+
              US bookmakers and 100,000+ sporting events. We parse through
              millions of possible combinations to calculate and detect these
              rare arbitrage opportunities. By automating this process, we have
              streamlined our production pipeline, allowing us to analyze live
              betting odds in real-time. Four Alpha’s principle of continuous
              innovation means we are always designing or developing new
              ambitious products.
            </p>
          </div>
          <div className="grid grid-cols-2  md:flex justify-start items-start gap-5 md:mt-3">
            <div className="flex justify-start items-start flex-col gap-2">
              <h4 className="border-l border-solid text-white border-lightBlue font-helvetica font-medium text-2xl leading-[1.33] pl-3">
                50,000+
              </h4>
              <p className="pl-3 text-[#adbdcc] text-sm sm:text-base font-helvetica font-light">
                opportunities detected
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2">
              <h4 className="border-l border-solid text-white border-lightBlue font-helvetica font-medium text-2xl leading-[1.33] pl-3">
                60+
              </h4>
              <p className="pl-3 text-[#adbdcc] text-sm sm:text-base font-helvetica font-light">
                sporting markets
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2">
              <h4 className="border-l border-solid text-white border-lightBlue font-helvetica font-medium text-2xl leading-[1.33] pl-3">
                100,000+
              </h4>
              <p className="pl-3 text-[#adbdcc] text-sm sm:text-base font-helvetica font-light">
                events tested
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2">
              <h4 className="border-l border-solid text-white border-lightBlue font-helvetica font-medium text-2xl leading-[1.33] pl-3">
                10,000,000+
              </h4>
              <p className="pl-3 text-[#adbdcc] text-sm sm:text-base font-helvetica font-light">
                combinations checked
              </p>
            </div>
          </div>
          <div className="flex justify-start xl:flex-row flex-col items-end  gap-5 md:mt-6 max-w-[554px] w-full">
            <img
              src="/code1.png"
              className="w-full xl:max-w-[473px]  object-contain"
              alt=""
            />
            <img src="/code2.png" className="w-full object-contain" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Code;
