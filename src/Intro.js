import { Button } from "@mui/material";
import "./App.css";

export default function Intro({ togglePage }) {
  return (
    <div>
      <div className="intro-row">
        <div className="intro-col">
          <h1>Risk-Free</h1>
          <h1>Sports Betting</h1>
          <h1>Arbitrage Opportunities</h1>
        </div>
      </div>
      <div className="intro-row" style={{ paddingTop: "28%" }}>
        <div className="intro-col">
          <h5>
            By taking advantage of discrepancies in 10+ bookmakers' betting
            lines, fouralpha automates the detection of arbitrage opportunities
            across multiple live and upcoming sporting events to
            allow users access to bets that yield a guaranteed return on
            investment.
          </h5>
        </div>
      </div>
      <div className="intro-row">
        <div className="intro-col">
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
                togglePage();
            }}
          >
            View Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
}
