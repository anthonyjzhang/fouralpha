import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Team = () => {
  const TEAM__DATA = {
    founders: [
      {
        name: "Anthony Zhang | ajz18@duke.edu ",
        role: "Co-Founder | Chief Executive Officer",
        img: "/team/anthony.jpg",
        url: "https://www.linkedin.com/in/anthonyjzhang1/",
        desc: "Anthony Zhang is studying Mechanical Engineering and Computer Science at Duke University.  He is interning with Fidelity Investments as a full stack software engineer. In his free time, Anthony enjoys videography,  thrifting, and backpacking through Europe.",
      },
      {
        name: "Arnav Nayak | an251@duke.edu",
        role: "Co-Founder | Chief Technology Officer",
        img: "/team/arnav.jpg",
        url: "https://www.linkedin.com/in/arnav-nayak/",
        desc: "Arnav Nayak is studying Electrical Computer Engineering at Duke University. He is interning with Amazon as a software development engineer. Previously, he interned at Bloomberg and Marco Financial. Arnav enjoys weightlifting, philosophy, and playing with his dog.",
      },
      {
        name: "Adi Raj | ar625@duke.edu ",
        role: "Co-Founder | Chief Operations Officer",
        img: "/team/adi.jpeg",
        url: "https://www.linkedin.com/in/adi842/",
        desc: "Adi Raj is studying Financial Engineering  at Duke University. He is interning with TC Capital, a leading investment bank advising on cross-border M&A in Southeast Asia. Outside of school, he enjoys producing beats, listening to podcasts, and  mountain biking.",
      },
      {
        name: "Avi Singh | as1198@duke.edu ",
        role: "Co-Founder | Chief Financial Officer",
        img: "/team/avi.jpeg",
        url: "https://www.linkedin.com/in/avi-singh-5a81b8185/",
        desc: "Avi Singh is studying Math and Computer Science at Duke University. He is interning with Enhanced Healthcare Partners, a private equity firm with over $1 billion in assets under management. When he’s not working, Avi enjoys pickup basketball and Punjabi music.",
      },
    ],
    business: [
      {
        img: "/team/zeynep.jpeg",
        name: "Zeynep Akkok",
        url: "https://www.linkedin.com/in/zeynep-akkok/",
      },
      {
        img: "/team/myles.jpeg",
        name: "Myles Bell",
        url: "https://www.linkedin.com/in/myles-bell8045/",
      },
      {
        img: "/team/tanvi.jpg",
        name: "Tanvi Poondota",
        url: "https://www.linkedin.com/in/tanvipoondota/",
      },
      {
        img: "/team/allen.jpeg",
        name: "Allen Markov",
        url: "https://www.linkedin.com/in/allen-marakov/",
      },
    ],
    data: [
      {
        img: "/team/jewel.jpeg",
        name: "Jewel Levy",
        url: "https://www.linkedin.com/in/jewel-levy-0541251b6/",
      },
      {
        img: "/team/neil.jpeg",
        name: "Neil Upreti",
        url: "https://www.linkedin.com/in/neil-upreti-7038411a7/",
      },

      {
        img: "/team/neve.jpeg",
        name: "Neve Greenwald",
        url: "https://www.linkedin.com/in/neve-greenwald-56b25985/",
      },
      {
        img: "/team/george.jpeg",
        name: "George Fang",
        url: "https://www.linkedin.com/in/georgefang1/",
      },
    ],
    product: [
      {
        img: "/team/elysia.jpeg",
        name: "Elysia Ye",
        url: "https://www.linkedin.com/in/elysia-ye-40b166132/",
      },
      {
        img: "/team/diya.jpeg",
        name: "Diya Panjabi",
        url: "https://www.linkedin.com/in/diya-panjabi-827b95260/",
      },
      {
        img: "/team/shriya.jpeg",
        name: "Shriya Challam",
        url: "https://www.linkedin.com/in/shriyachallam/",
      },
      {
        img: "/team/arnav2.jpeg",
        name: "Arnav Barve",
        url: "https://www.linkedin.com/in/arnav-barve/",
      },
    ],
  };
  return (
    <section className="flex  justify-center items-center lg:w-[105%] relative lg:-left-5 slant mt-28 lg:mt-20 bg-[#243447] ">
      <div className="absolute left-0 bottom-full lg:w-auto w-full">
        <div className="bg-lightBlue opacity-80 w-full lg:w-[412px] h-[42px]  translate-y-[0px]"></div>
        <div className="top-0 bg-darkPurple opacity-80 w-[275px] h-[42px] absolute left-1/2 -translate-x-1/2   -translate-y-1/2"></div>
      </div>
      <div className="absolute right-0 top-full lg:w-auto w-full">
        <div className="bg-lightBlue opacity-80 w-full lg:w-[412px] h-[42px]  translate-y-[0px]"></div>
        <div className="bottom-0 bg-darkPurple opacity-80 w-[275px] h-[42px] absolute left-1/2 -translate-x-1/2   translate-y-1/2"></div>
      </div>
      <div className="reverseSlant w-screen flex justify-start items-center flex-col py-[50px] lg:py-[140px] ">
        <div
          id="team"
          className="contain flex-col justify-start items-start gap-4"
        >
          <div className="mb-5">
            <h5 className="text-lightBlue text-sm sm:text-base md:text-lg font-medium">
              Team
            </h5>
            <h2 className="mt-2 sm:mt-7 text-white text-2xl md:text-[38px] font-medium max-w-[640px]">
              Founders
            </h2>
          </div>
          <div className="sm:hidden block w-full team">
            <Splide
              options={{
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: true,
                width: "100%",
                gap: "20px",
                drag: true,
                type: "loop",
              }}
            >
              {TEAM__DATA.founders.map((elem, idx) => {
                return (
                  <SplideSlide key={idx + elem.name}>
                    <TeamBox {...elem} />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
          <div className="sm:grid hidden grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-5">
            {TEAM__DATA.founders.map((elem, idx) => {
              return <TeamBox {...elem} key={idx + elem.name} />;
            })}
          </div>
          <div className="flex justify-start w-full items-start flex-col gap-10 mt-8 sm:mt-14">
            <h2 className="mt-2 text-white text-2xl md:text-[38px] font-medium max-w-[640px]">
              Business Analysts
            </h2>
            <div className="sm:hidden block w-full team2">
              <Splide
                options={{
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: true,
                  width: "100%",
                  gap: "20px",
                  drag: true,
                  type: "loop",
                }}
              >
                {TEAM__DATA.business.map((elem, idx) => {
                  return (
                    <SplideSlide key={idx + elem.name}>
                      <TeamBox {...elem} />
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <div className="hidden place-items-center xl:justify-items-start sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-5">
              {TEAM__DATA.business.map((elem, idx) => {
                return <TeamBox {...elem} key={idx + elem.name} />;
              })}
            </div>
          </div>
          <div className="flex justify-start w-full items-start flex-col gap-10 mt-8 sm:mt-14">
            <h2 className="mt-2 text-white text-2xl md:text-[38px] font-medium max-w-[640px]">
              Data Scientists
            </h2>
            <div className="sm:hidden block w-full team2">
              <Splide
                options={{
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: true,
                  width: "100%",
                  gap: "20px",
                  drag: true,
                  type: "loop",
                }}
              >
                {TEAM__DATA.data.map((elem, idx) => {
                  return (
                    <SplideSlide key={idx + elem.name}>
                      <TeamBox {...elem} />
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <div className="hidden place-items-center xl:justify-items-start sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-5">
              {TEAM__DATA.data.map((elem, idx) => {
                return <TeamBox {...elem} key={idx + elem.name} />;
              })}
            </div>
          </div>
          <div className="flex justify-start w-full items-start flex-col gap-10 mt-8 sm:mt-14">
            <h2 className="mt-2 text-white text-2xl md:text-[38px] font-medium max-w-[640px]">
              Product Managers
            </h2>
            <div className="sm:hidden block w-full team2">
              <Splide
                options={{
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: true,
                  width: "100%",
                  gap: "20px",
                  drag: true,
                  type: "loop",
                }}
              >
                {TEAM__DATA.product.map((elem, idx) => {
                  return (
                    <SplideSlide key={idx + elem.name}>
                      <TeamBox {...elem} />
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <div className="hidden place-items-center xl:justify-items-start sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-5">
              {TEAM__DATA.product.map((elem, idx) => {
                return <TeamBox {...elem} key={idx + elem.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamBox = ({ img, name, desc, url, role }) => {
  return (
    <div
      target="blank"
      className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-2  "
    >
      <div
        className={`group relative overflow-hidden ${
          desc ? "sm:self-start" : "self-center"
        }`}
      >
        <div className="bg-lightBlue group-hover:opacity-100 opacity-0 pointer-events-none z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transition-all duration-200 rounded-full bg-opacity-70"></div>
        <a href={url} target="blank">
          <img
            src="/linkedin.svg"
            className="w-5 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 translate-y-[55%] transition-all duration-200 group-hover:opacity-100 opacity-0 z-20"
            alt=""
          />
        </a>
        <img
          src={img}
          className="object-cover self-center w-[193px] rounded-full h-[193px]"
          alt=""
        />
      </div>
      <h4
        className={`${
          !role ? "self-center" : ""
        } text-lightBlue break-all text-sm font-semibold`}
      >
        {name} <br /> {role && role}
      </h4>
      {desc && <p className="text-white font-light text-sm">{desc}</p>}
    </div>
  );
};
