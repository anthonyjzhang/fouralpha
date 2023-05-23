import requests
import json
import util

API_KEY = '6ed8fe64bb7a8b1684b9c878c2f6e852'

SPORT = 'baseball_mlb' # use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

REGIONS = 'us' # uk | us | eu | au. Multiple can be specified if comma delimited

MARKETS = 'h2h' # h2h | spreads | totals. Multiple can be specified if comma delimited

ODDS_FORMAT = 'american' # decimal | american

DATE_FORMAT = 'iso' # iso | unix

BOOKMAKERS = 'draftkings', 'betmgm, foxbet, circasports'

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                                                                       #
# Get a list of live & upcoming games for the sport you want, along with odds for different bookmakers  #
# This will deduct from the usage quota                                                                 #
# The usage quota cost = [number of markets specified] x [number of regions specified]                  #
# For examples of usage quota costs, see https://the-odds-api.com/liveapi/guides/v4/#usage-quota-costs  #
#                                                                                                       #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

def get_odds():
    odds_response = requests.get(
        f'https://api.the-odds-api.com/v4/sports/{SPORT}/odds',
        params={
            'api_key': API_KEY,
            'regions': REGIONS,
            'markets': MARKETS,
            'oddsFormat': ODDS_FORMAT,
            'dateFormat': DATE_FORMAT,
            'bookmakers': BOOKMAKERS
        }
    )
    return odds_response

if get_odds().status_code != 200:
    print(f'Failed to get odds: status_code {get_odds().status_code}, response body {get_odds().text}')
else:
    odds_json = get_odds().json()
    print(util.pretty_print_JSON(odds_json))
    print('Number of events:', len(odds_json))
    # Check the usage quota
    print('Remaining requests', get_odds().headers['x-requests-remaining'])
    print('Used requests', get_odds().headers['x-requests-used'])

