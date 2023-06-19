import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/home/Index";
import ArbiTable from "./pages/arbitrage_table/Index";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex overflow-x-hidden justify-start items-start flex-col w-full min-h-screen">
      <Header />
      <main className="w-full flex justify-start items-center flex-col ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arbi-table" element={<ArbiTable />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
