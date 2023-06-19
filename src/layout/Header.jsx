import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const bgFunc = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", bgFunc);
    return () => {
      window.removeEventListener("scroll", bgFunc);
    };
  }, []);

  return (
    <header
      className={`${
        headerBg
          ? pathname !== "/arbi-table"
            ? "bg-dark"
            : "bg-lightGray"
          : "bg-transparent"
      } transition-all duration-200 wrapper fixed top-0 left-0 z-50`}
    >
      <div className="contain justify-between sm:justify-start items-center gap-8 h-[80px] ">
        <HashLink to="/#hero" smooth>
          {pathname !== "/" ? (
            <img
              src="/logo-blue.png"
              className="w-[140px] sm:w-[160px] object-contain"
              alt=""
            />
          ) : (
            <img
              src="/logo.png"
              className="w-[140px] sm:w-[160px] object-contain"
              alt=""
            />
          )}
        </HashLink>
        {pathname === "/" && (
          <>
            <nav
              className={`sm:static fixed top-0 ${
                headerToggle ? "right-0" : "-right-full"
              } transition-all duration-700 w-full h-full z-[100] px-[3rem] pt-[6rem] pb-[3rem] flex-col sm:flex-row sm:w-auto sm:h-auto sm:p-0 overflow-y-auto sm:overflow-visible bg-dark sm:bg-transparent flex justify-start items-center gap-6 sm:gap-8`}
            >
              <a
                href="#vision"
                onClick={() => setHeaderToggle(false)}
                className={`${
                  pathname !== "/"
                    ? "text-white sm:text-[#0A2540]"
                    : "text-white"
                } text-lg sm:text-base font-bold font-Sf_pro`}
              >
                Vision
              </a>
              <a
                href="#team"
                onClick={() => setHeaderToggle(false)}
                className={`${
                  pathname !== "/"
                    ? "text-white sm:text-[#0A2540]"
                    : "text-white"
                } text-lg sm:text-base font-bold font-Sf_pro`}
              >
                Team
              </a>
              <a
                href="#history"
                onClick={() => setHeaderToggle(false)}
                className={`${
                  pathname !== "/"
                    ? "text-white sm:text-[#0A2540]"
                    : "text-white"
                } text-lg sm:text-base font-bold font-Sf_pro`}
              >
                History
              </a>
              <a
                href="#code"
                onClick={() => setHeaderToggle(false)}
                className={`${
                  pathname !== "/"
                    ? "text-white sm:text-[#0A2540]"
                    : "text-white"
                } text-lg sm:text-base font-bold font-Sf_pro`}
              >
                Code
              </a>
              <Link
                to="/arbi-table"
                onClick={() => setHeaderToggle(false)}
                className={`${
                  pathname !== "/"
                    ? "text-white sm:text-[#0A2540]"
                    : "text-white"
                } text-lg sm:text-base sm:hidden block font-bold font-Sf_pro`}
              >
                Arbitrage Table
              </Link>
            </nav>
            <button
              onClick={() => setHeaderToggle((prev) => !prev)}
              className={`relative z-[102] sm:hidden block ${
                pathname !== "/" ? "text-[#0A2540]" : "text-white"
              }`}
            >
              {headerToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              )}
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
