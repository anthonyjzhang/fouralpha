import requests
import util
import arb_algo
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")
MARKETS = "h2h"
TOGGLE_LIVE = True
REGIONS = "us"
ODDS_FORMAT = "american"
BOOKMAKERS = "fanduel,draftkings,betmgm,foxbet,barstool,pointsbetus,circasports,wynnbet,unibet_us,betus,twinspires,betonlineag"
SPORTS = [
    "basketball_nba",
    "americanfootball_nfl",
    "icehockey_nhl",
    "americanfootball_ncaaf",
    "baseball_mlb",
]
DATE = "2023-04-09T20:45:00Z"


def get_all_sports_as_list():
    """
    function to get list of available sports markets
    """

    request_url = "https://api.the-odds-api.com/v4/sports?apiKey={api_key}".format(
        api_key=API_KEY
    )
    data = requests.get(request_url)
    return util.parse_markets_list(data)


def get_all_upcoming_odds():
    """
    function to retrieve of all live games and the next 8 upcoming games across all sports markets
    """

    request_url = "https://api.the-odds-api.com/v4/sports/{sport}/odds/?regions={regions}&oddsFormat={odds_format}&markets={markets}&apiKey={api_key}".format(
        sport="upcoming",
        api_key=API_KEY,
        markets=MARKETS,
        regions=REGIONS,
        odds_format=ODDS_FORMAT,
    )
    data = requests.get(request_url)
    return data


def get_current_sports_data():
    """
    function to get arbs from all available markets
    """

    res = []
    for SPORT in SPORTS:
        request_url = "https://api.the-odds-api.com/v4/sports/{sport}/odds/?regions={regions}&oddsFormat={odds_format}&markets={markets}&bookmakers={bookmakers}&apiKey={api_key}".format(
            sport=SPORT,
            api_key=API_KEY,
            markets=MARKETS,
            regions=REGIONS,
            odds_format=ODDS_FORMAT,
            bookmakers=BOOKMAKERS,
        )
        data = requests.get(request_url)
        data = util.parse_market_data(data)
        if data is None or len(data) <= 0:
            print("no data parsed")
            return
        obj = {}
        obj["sport_key"] = data[0]["sport_key"]
        obj["sport_title"] = data[0]["sport_title"]
        (
            obj["events"],
            obj["Total Arbitrage Opporutunities"],
        ) = arb_algo.detect_arbs_market(data, TOGGLE_LIVE)
        res.append(obj)
    return res


def get_historical_sports_data():
    """
    function to get historical arbs from all available markets
    """

    res = []
    for SPORT in SPORTS:
        request_url = "https://api.the-odds-api.com/v4/sports/{sport}/odds-history/?regions={regions}&oddsFormat={odds_format}&markets={markets}&bookmakers={bookmakers}&date={date}&apiKey={api_key}".format(
            date=DATE,
            sport=SPORT,
            api_key=API_KEY,
            markets=MARKETS,
            regions=REGIONS,
            odds_format=ODDS_FORMAT,
            bookmakers=BOOKMAKERS,
        )
        data = requests.get(request_url)
        data = util.parse_historical_market_data(data)
        if data is None or len(data) <= 0:
            print("no data parsed")
            return
        obj = {}
        obj["sport_key"] = data[0]["sport_key"]
        obj["sport_title"] = data[0]["sport_title"]
        (
            obj["events"],
            obj["Total Arbitrage Opporutunities"],
        ) = arb_algo.detect_arbs_market(data, TOGGLE_LIVE)
        res.append(obj)
    return res


def getSports():
    available_sports = get_all_sports_as_list()
    print(util.pretty_print_JSON(available_sports))


def getOdds():
    if get_all_upcoming_odds().status_code != 200:
        print(
            f"Failed to get odds: status_code {get_all_upcoming_odds().status_code}, response body {get_all_upcoming_odds().text}"
        )
    else:
        odds_json = get_all_upcoming_odds().json()
        print(util.pretty_print_JSON(odds_json))
        print("Number of events:", len(odds_json))

        # Check the usage quota of the API
        print(
            "Remaining requests",
            get_all_upcoming_odds().headers["x-requests-remaining"],
        )
        print("Used requests", get_all_upcoming_odds().headers["x-requests-used"])


def main():
    arbs = get_current_sports_data()
    #arbs = get_historical_sports_data()
    print(util.pretty_print_JSON(arbs))
    util.add_arbs_to_firebase(arbs)


if __name__ == "__main__":
    main()
