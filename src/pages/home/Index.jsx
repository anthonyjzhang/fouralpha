import Code from "./Code";
import Hero from "./Hero";
import History from "./History";
import Methods from "./Methods";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-lightGray  mt-14 md:mt-20 pt-14 md:pt-20">
        <Methods />
        <div className="w-full lg:pb-32 lg:pt-16">
          <Team />
        </div>
        <History />
        {/* <div className="overflow-hidden lg:pt-10"> */}
        <Code />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
