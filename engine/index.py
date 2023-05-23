import requests
import util
import arb_algo

API_KEY = "c462bd1d951f7f7011af81eb210d8677"
MARKET = "h2h"
TOGGLE_LIVE = True
DATE = "2023-05-13T20:02:00Z"


def get_all_sports_as_list():
    """
    function to get list of available markets
    """

    request_url = "https://api.the-odds-api.com/v4/sports?apiKey={api_key}".format(
        api_key=API_KEY
    )
    data = requests.get(request_url)
    return util.parse_markets_list(data)


def get_all_sports_data():
    """
    function to get arbs from all available markets
    """

    res = []
    # sports = get_all_sports_as_list()
    sports = ["basketball_nba"]
    for sport in sports:
        request_url = "https://api.the-odds-api.com/v4/sports/{sport}/odds/?regions=us&oddsFormat=american&markets={market}&apiKey={api_key}".format(
            sport=sport, api_key=API_KEY, market=MARKET
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
    # sports = get_all_sports_as_list()
    sports = ["baseball_mlb"]
    for sport in sports:
        request_url = "https://api.the-odds-api.com/v4/sports/{sport}/odds-history/?regions=us&oddsFormat=american&markets={market}&apiKey={api_key}&date={date}".format(
            sport=sport, api_key=API_KEY, market=MARKET, date=DATE
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


def main():
    arbs = get_historical_sports_data()
    print(util.pretty_print_JSON(arbs))
    util.add_arbs_to_firebase(arbs)


if __name__ == "__main__":
    main()
