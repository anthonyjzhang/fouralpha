import { useEffect } from "react";
import sample_data from "./sample.json";

const ArbiTable = () => {
  return (
    <section className="wrapper mb-10 mt-[100px] md:mt-[120px]">
      <div className="contain flex-col justify-start items-start gap-7">
        <div className="relative w-full isolate">
          <div className="bg-purpleGr rounded-full -inset-1 sm:-inset-1.5 absolute -z-10"></div>
          <p className="w-full bg-white grid place-items-center rounded-full text-[30px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-extrabold text-black">
            ARBITRAGE TABLE
          </p>
        </div>
        <p className="text-black font-light text-base md:text-xl">
          <strong className="font-semibold">Disclaimer:</strong> Four Alpha does
          not endorse gambling. Betting lines move quickly - use this
          information at your own risk.
        </p>
        <div className="relative -mt-2">
          <p className="text-[25px] sm:text-[40px] font-medium text-black">
            SELECTED OPPORTUNITIES
          </p>
          <div className="bg-purpleBlueLinear h-[5px] w-full absolute top-full left-0 "></div>
        </div>
        <div className="flex pb-2 justify-start customScroll items-start flex-col overflow-x-auto max-w-full w-full">
          <div className="grid grid-cols-5 min-w-[880px] place-items-center bg-[#0A2540] w-full border-b border-solid border-[#8B8B8B] py-1 px-5 min-h-[38px] rounded-tr-md rounded-tl-md">
            <p className="text-white text-sm font-semibold">Date</p>
            <p className="text-white text-sm font-semibold">
              Percent Return (ROI)
            </p>
            <p className="text-white text-sm font-semibold">Market</p>
            <p className="text-white text-sm font-semibold">Event</p>
            <p className="text-white text-sm font-semibold">Bets</p>
          </div>
          {sample_data.map((elem, idx) => {
            return <TableRow {...elem} key={idx + elem.timestamp} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ArbiTable;

const TableRow = ({
  team_1,
  bookmaker_2,
  bookmaker_1,
  price_1,
  price_2,
  timestamp,
  team_2,
  market,
  percent,
}) => {
  const DECIPHER = {
    market: [
      {
        json: "basketball_nba",
        convert: "Basketball - NBA",
      },
      {
        json: "icehockey_nhl",
        convert: "Hockey - NHL",
      },
      {
        json: "baseball_mlb",
        convert: "Baseball - MLB",
      },
      {
        json: "americalfootball_nfl",
        convert: "Football - NFL",
      },
      {
        json: "americanfootball_ncaaf",
        convert: "Football - NCAAF",
      },
    ],
    books: [
      {
        json: "unibet_us",
        convert: "Unibet",
      },
      {
        json: "betmgm",
        convert: "BetMGM",
      },
      {
        json: "foxbet",
        convert: "FOX Bet",
      },
      {
        json: "pointsbetus",
        convert: "PointsBet",
      },
      {
        json: "draftkings",
        convert: "Draftkings",
      },
      {
        json: "barstool",
        convert: "Barstool",
      },
      {
        json: "twinspires",
        convert: "Twinspires",
      },
      {
        json: "fanduel",
        convert: "FanDuel",
      },
      {
        json: "circasports",
        convert: "Circasports",
      },
      {
        json: "betus",
        convert: "BetUS",
      },
      {
        json: "wynnbet",
        convert: "WynnBet",
      },
      {
        json: "betonlineag",
        convert: "BetOnline",
      },
    ],
  };

  return (
    <div className="grid grid-cols-5 min-w-[880px] place-items-center w-full border-b border-solid bg-[#fcfcfc] border-[#D1D1D1] py-2 min-h-[64px] px-4 ">
      <p className="text-[#333] text-sm font-normal">{timestamp}</p>
      <p className="text-[#333] text-sm font-normal">{percent}</p>
      <p className="text-[#333] text-sm font-normal">
        {
          DECIPHER.market.filter(
            (elem) => elem.json === market && elem.convert
          )[0]?.convert
        }
      </p>
      <div className="flex justify-start items-start flex-col">
        <p className="text-[#333] text-sm font-normal">{team_1}</p>
        <p className="text-[#333] text-sm font-normal">{team_2}</p>
      </div>
      <div className="flex justify-start items-start flex-col">
        <p className="text-[#333] text-sm font-normal">
          {price_1 > 0 ? `+${price_1}` : price_1}{" "}
          {
            DECIPHER.books.filter(
              (elem) => elem.json === bookmaker_1 && elem.convert
            )[0]?.convert
          }
        </p>
        <p className="text-[#333] text-sm font-normal">
          {price_2 > 0 ? `+${price_2}` : price_2}{" "}
          {
            DECIPHER.books.filter(
              (elem) => elem.json === bookmaker_2 && elem.convert
            )[0]?.convert
          }
        </p>
      </div>
    </div>
  );
};
