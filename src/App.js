import { useState, useEffect } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore/lite";
import Intro from "./Intro";
import NavBar from "./NavBar";
import ArbTable from "./ArbTable";
import { db } from "./firebase";
import "./App.css";

const markets = ["basketball_nba"];

function App() {
  const [toggle, setToggle] = useState(false);
  const [arbData, setArbData] = useState([]);

  useEffect(() => {
    const getEventData = async () => {
      markets.forEach(async (market) => {
        const eventSnapshot = await getDocs(
          query(
            collection(db, "arb_opportunities", market, "events"),
            limit(10)
          )
        );
        eventSnapshot.forEach(async (event) => {
          const arbSnapshot = await getDocs(
            query(
              collection(
                db,
                "arb_opportunities",
                market,
                "events",
                event.id,
                "arbs"
              )
            ),
            limit(3)
          );
          arbSnapshot.forEach((arb) => {
            let d = arb.data();
            d.market = market;
            d.percent = calcOdds(d.price_1, d.price_2);
            d.timestamp = formatDate(d.timestamp);
            setArbData((prev) => [...prev, d]);
          });
        });
      });
    };

    getEventData();
  }, []);

  const calcOdds = (price_1, price_2) => {
    if (price_1 < 0 && price_2 > 0) {
      return (
        100 *
        ((1000 - (1000 / (1 - 100 / price_1) + 1000 / (price_2 / 100 + 1))) /
          (1000 / (1 - 100 / price_1) + 1000 / (price_2 / 100 + 1)))
      ).toFixed(2);
    } else if (price_2 < 0 && price_1 > 0) {
      return (
        100 *
        ((1000 - (1000 / (1 - 100 / price_2) + 1000 / (price_1 / 100 + 1))) /
          (1000 / (1 - 100 / price_2) + 1000 / (price_1 / 100 + 1)))
      ).toFixed(2);
    } else {
      return (
        100 *
        ((1000 - (1000 / (price_1 / 100 + 1) + 1000 / (price_2 / 100 + 1))) /
          (1000 / (price_1 / 100 + 1) + 1000 / (price_2 / 100 + 1)))
      ).toFixed(2);
    }
  };

  const formatDate = (date) => {
    var d = new Date(date);
    return (d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear());
  };

  const togglePage = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <NavBar togglePage={togglePage} />
      {!toggle && <Intro togglePage={togglePage} />}
      {toggle && <ArbTable arbData={arbData} />}
    </div>
  );
}

export default App;
