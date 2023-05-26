# Sports Betting Arbitrage


## Background

Recently, the global betting market has experienced exponential growth, fueled by rapid expansion of legalization across multiple states and growing popularity of moibile betting platforms. With the increased number of bookmakers offering pregame and live odds on a variety of sports markets (NBA, NHL, MLB, NFL, MLS, EPL, La Liga, Ligue 1, and more), in many ways, sports betting has become like a financial market, with bookmakers valuing assets by pricing betting odds for outcomes of various events, and the public 'buying' these assets by wagering money on an outcome. Thus, like any financial market, the concept of arbitrage can be leveraged to generate a guaranteed return on investment (ROI).

## Application

This application leverages a third party API to gather odds from 15+ international bookmakers on 60+ sports betting markets. A python engine makes API GET requests, reformats the response, then an algorithm analyzes the betting lines from all available bookmakers for some event and returns any arbitrage opportunities detected. Additionally, histroical odds can be requested as well, thus the application can detect previous arbitrage opportunities since June 6th 2020. The engine can also be run on live sporting events to detect current available arbitrage opportunities! Any arbitrage opportunities detected are automated to be stored in a Firebase database.
