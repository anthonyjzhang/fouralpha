from datetime import datetime
from firebase import firestore_client
import pytz
import json
import hashlib


def is_live(commenceTime):
    """
    function to check if event is live or not ( returns true if game is live, returns false if game is not live)
    """
    updatedTime = commenceTime[:-1]

    # converts current time to UTC
    converted_tz = pytz.timezone("UTC")

    # converts current time in UTC to ISO 8061 time format
    current_dt = datetime.now(converted_tz).isoformat()

    # checks if the current time is later than the start time of the sporting event
    return current_dt > updatedTime


def pretty_print_JSON(responseInJSON):
    """
    function reformat the API response into an easibly readable JSON format
    """
    return json.dumps(responseInJSON, indent=4)


def parse_market_data(response_data):
    """
    function to parse the incoming API response from GET odds request and extracts relevant fields for our objective
    """

    # convert data into json
    data = response_data.json()

    # exit function if API response is empty
    if len(data) <= 0:
        print("received data is empty")
        return

    # loop through each game event in array and create game object
    res = []
    for i in range(len(data)):
        # assign id and odds array to each game object
        game_obj = {}
        game_obj["timestamp"] = datetime.now().isoformat()
        game_obj["id"] = data[i]["id"]
        game_obj["sport_key"] = data[i]["sport_key"]
        game_obj["sport_title"] = data[i]["sport_title"]
        game_obj["commence_time"] = data[i]["commence_time"]
        game_obj["home_team"] = data[i]["home_team"]
        game_obj["away_team"] = data[i]["away_team"]
        game_obj["odds"] = []
        bookmakers = data[i]["bookmakers"]

        # loop through each bookmaker in game object and grab respective odds
        for j in range(len(bookmakers)):
            odd_obj = {}

            # h2h odds (assumed to be first element of market)
            h2h_odds = bookmakers[j]["markets"][0]
            outcomes = h2h_odds["outcomes"]

            # only include the event if it has two-way betting odds (Ex; win, lose, draw lines are excluded since these are three-way moneylines)
            # once the application is deployed, this issue can be revisted to implement arbitrage detection of three-way betting lines
            if len(outcomes) != 2:
                return

                # grab each book's report on teams and prices
            odd_obj["bookmaker"] = bookmakers[j]["key"]
            odd_obj["team_1"] = outcomes[0]["name"]
            odd_obj["price_1"] = outcomes[0]["price"]
            if "point" in outcomes[0]:
                odd_obj["point_1"] = outcomes[0]["point"]
            odd_obj["team_2"] = outcomes[1]["name"]
            odd_obj["price_2"] = outcomes[1]["price"]
            if "point" in outcomes[1]:
                odd_obj["point_2"] = outcomes[1]["point"]
            game_obj["odds"].append(odd_obj)

        res.append(game_obj)
    return res


def parse_historical_market_data(response_data):
    """
    function to parse the incoming API response from GET historical odds request and extracts relevant fields for our objective
    """

    # convert data into json
    data = response_data.json()

    # exit function if API response is empty
    if len(data) <= 0:
        print("received data is empty")
        return

    # loop through each game event in array and create game object
    res = []
    for i in range(len(data["data"])):
        # assign id and odds array to each game object
        game_obj = {}
        game_obj["timestamp"] = data["timestamp"]
        game_obj["id"] = data["data"][i]["id"]
        game_obj["sport_key"] = data["data"][i]["sport_key"]
        game_obj["sport_title"] = data["data"][i]["sport_title"]
        game_obj["commence_time"] = data["data"][i]["commence_time"]
        game_obj["home_team"] = data["data"][i]["home_team"]
        game_obj["away_team"] = data["data"][i]["away_team"]
        game_obj["odds"] = []
        bookmakers = data["data"][i]["bookmakers"]

        # loop through each bookmaker in game object and grab respective odds
        for j in range(len(bookmakers)):
            odd_obj = {}

            # h2h odds (assumed to be first element of market)
            h2h_odds = bookmakers[j]["markets"][0]
            outcomes = h2h_odds["outcomes"]

            # only include the event if it has two-way betting odds (Ex; win, lose, draw lines are excluded since these are three-way moneylines)
            # once the application is deployed, this issue can be revisted to implement arbitrage detection of three-way betting lines
            if len(outcomes) != 2:
                return

            # grab each book's report on teams and prices
            odd_obj["bookmaker"] = bookmakers[j]["key"]
            odd_obj["team_1"] = outcomes[0]["name"]
            odd_obj["price_1"] = outcomes[0]["price"]
            if "point" in outcomes[0]:
                odd_obj["point_1"] = outcomes[0]["point"]
            odd_obj["team_2"] = outcomes[1]["name"]
            odd_obj["price_2"] = outcomes[1]["price"]
            if "point" in outcomes[1]:
                odd_obj["point_2"] = outcomes[1]["point"]
            game_obj["odds"].append(odd_obj)

        res.append(game_obj)
    return res


def parse_markets_list(response_data):
    """
    function to parse incoming API sports data into list of market keys
    """

    # convert data into json
    data = response_data.json()

    if len(data) <= 0:
        print("received data is empty")
        return

    # loop through response object and add key to list
    res = []

    for obj in data:
        res.append(obj["key"])
    return res


def add_arbs_to_firebase(arb_data):
    """
    function to update firebase with arb data
    """

    for market in arb_data:
        ref = firestore_client.collection("arb_opportunities").document(
            market["sport_key"]
        )
        ref.set({"sport_title": market["sport_title"]})
        events = market["events"]
        for event in events:
            if event["Arbitrage Opportunities"] != 0:
                event_ref = ref.collection("events").document(event["id"])
                event_ref.set(
                    {
                        "home_team": event["home_team"],
                        "away_team": event["away_team"],
                        "commence_time": event["commence_time"],
                    }
                )
                for arb in event["arbs"]:
                    key = (
                        arb["bookmaker_1"]
                        + arb["team_1"]
                        + str(arb["price_1"])
                        + arb["bookmaker_2"]
                        + arb["team_2"]
                        + str(arb["price_2"])
                        + arb["timestamp"]
                    )
                    id = hashlib.sha256(key.encode("utf-8")).hexdigest()
                    arb_coll = event_ref.collection("arbs").document(id)
                    arb_coll.set(
                        {
                            "bookmaker_1": arb["bookmaker_1"],
                            "team_1": arb["team_1"],
                            "price_1": arb["price_1"],
                            "bookmaker_2": arb["bookmaker_2"],
                            "team_2": arb["team_2"],
                            "price_2": arb["price_2"],
                            "timestamp": arb["timestamp"],
                        }
                    )
