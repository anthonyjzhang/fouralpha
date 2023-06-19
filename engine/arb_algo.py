import util

def american_odds_to_implied_prob(american_odds):
    """
    function to convert american odds to implied probability
    """
    if american_odds < 0:
        return (-1 * american_odds) / (-1 * american_odds + 100)
    else:
        return 100 / (american_odds + 100)


def validate_arb(odds_1, odds_2):
    """
    function to validate arb oppportunity between two odds
    """
    return (
        american_odds_to_implied_prob(odds_1) + american_odds_to_implied_prob(odds_2)
        < 1
    )


def detect_arbs_game(game_obj):
    """
    function to detect arb opportunity within a single game object
    brute force approach: test every pair O(N^2)
    """
    res = {}
    res["id"] = game_obj["id"]
    res["commence_time"] = game_obj["commence_time"]
    res["home_team"] = game_obj["home_team"]
    res["away_team"] = game_obj["away_team"]
    res["arbs"] = []
    odds = game_obj["odds"]

    # loop through every odds offered by each vendor and check every pair
    count = 0
    for i in range(len(odds)):
        for j in range(i + 1, len(odds)):
            # check price1 of first vendor with price2 of second vendor
            if validate_arb(odds[i]["price_1"], odds[j]["price_2"]) and i != j:
                obj = {}
                obj["timestamp"] = game_obj["timestamp"]
                obj["bookmaker_1"] = odds[i]["bookmaker"]
                obj["team_1"] = odds[i]["team_1"]
                obj["price_1"] = odds[i]["price_1"]
                obj["bookmaker_2"] = odds[j]["bookmaker"]
                obj["team_2"] = odds[j]["team_2"]
                obj["price_2"] = odds[j]["price_2"]
                if "point_1" in odds[i] and "point_2" in odds[j]:
                    obj["point_1"] = odds[i]["point_1"]
                    obj["point_2"] = odds[j]["point_2"]
                    if abs(odds[i]["point_1"]) == abs(odds[j]["point_2"]):
                        res["arbs"].append(obj)
                        count += 1
                else:
                    res["arbs"].append(obj)
                    count += 1
            # check price2 of first vendor with price 1 of second vendor
            if validate_arb(odds[i]["price_2"], odds[j]["price_1"]) and i != j:
                obj = {}
                obj["timestamp"] = game_obj["timestamp"]
                obj["bookmaker_1"] = odds[i]["bookmaker"]
                obj["team_1"] = odds[i]["team_2"]
                obj["price_1"] = odds[i]["price_2"]
                obj["bookmaker_2"] = odds[j]["bookmaker"]
                obj["team_2"] = odds[j]["team_1"]
                obj["price_2"] = odds[j]["price_1"]
                if "point_1" in odds[i] and "point_2" in odds[j]:
                    obj["point_1"] = odds[i]["point_2"]
                    obj["point_2"] = odds[j]["point_1"]
                    if abs(odds[i]["point_2"]) == abs(odds[j]["point_1"]):
                        res["arbs"].append(obj)
                        count += 1
                else:
                    res["arbs"].append(obj)
                    count += 1
    res["Arbitrage Opportunities"] = count
    return res


def detect_arbs_market(parsed_data, TOGGLE_LIVE=True):
    """
    function to detect arb opportunities within list of game objects (market)
    """
    res = []
    count = 0
    # loop through each game in market and add event arb opportunity object to list
    for i in range(len(parsed_data)):
        if TOGGLE_LIVE:
            arb_obj = detect_arbs_game(parsed_data[i])
            res.append(arb_obj)
            count += arb_obj["Arbitrage Opportunities"]
        elif not util.is_live(parsed_data[i]["commence_time"]):
            arb_obj = detect_arbs_game(parsed_data[i])
            res.append(arb_obj)
            count += arb_obj["Arbitrage Opportunities"]
    return res, count
