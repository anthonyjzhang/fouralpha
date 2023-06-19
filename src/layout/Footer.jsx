import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className={`wrapper mt-auto bg-[#F6F9FC] relative z-20 py-[50px]`}>
      <div className="contain justify-start items-start flex-col gap-6">
        <HashLink smooth to="/#hero" className="relative -left-1.5">
          <img
            src="/foot-logo.png"
            className="w-[150px] object-contain"
            alt=""
          />
        </HashLink>
        <div className="flex justify-between items-start w-full max-w-[410px]">
          <div className="flex justify-start items-start flex-col gap-2">
            <p className="text-[#0A2540] text-base font-light  flex justify-start items-center gap-2">
              <img
                src="/location.png"
                className="w-[11px] object-contain"
                alt=""
              />
              United States
            </p>
            <p className="text-[#0A2540] text-base font-light  flex justify-start items-center gap-2">
              <img
                src="/message.png"
                className="w-[11px] object-contain"
                alt=""
              />
              English (United States)
            </p>
          </div>
          <div className="flex justify-start items-start flex-col gap-2">
            <HashLink
              smooth
              to="/#hero"
              className="text-[#0A2540] text-base font-light"
            >
              Home
            </HashLink>
            <HashLink
              to="/arbi-table"
              smooth
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#0A2540] text-base font-light"
            >
              Arbitrage Table
            </HashLink>
          </div>
        </div>
        <p className="text-[#364657] text-base font-light">
          © 2023 Four Alpha. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
