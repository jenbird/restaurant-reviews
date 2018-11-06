# Restaurant Review FEND Application

## Table of Contents

-   [Project Background](#projectbackground)
-   [Instructions](#instructions)
-   [Dependencies](#dependencies)

## Project Background

This project was completed as part of the Udacity Google Scholarship (Phase 2, Project 6) and tested for skills in converting a static site to a web and mobile-ready application.

Starter code was provided by Udacity which was not usable in its given form. Features had to be added to aid accessibility, to ensure the app is accessible for screen reader use and to convert the design to be responsive on different sized displays. Project requirements were to also add a service worker to begin the process of creating a seamless offline experience for users. The original functionality had to be maintained.

### Instructions

Starting the app:
The app is live at: https://jennifersmithuk.github.io/restaurant-reviews/

For running on a local machine:
Download the folder with all files.
There are a few changes that the code needs to run properly on a local machine:
- js/dbhelper.js  uncomment lines 12 & 13 and comment out line 14
- js/dbhelper.js  uncomment line 156 and comment out line 157
- index.html      uncomment line 18 and comment out line 19
- index.html      uncomment line 52 and comment out 53
- restaurant.html uncomment line 21 and comment out 22
- restaurant.html uncomment line 27 and comment out 28
- restaurant.html uncomment line 66 and comment out line 67
- main.js         uncomment line 18 and comment out 19

Set up a simple server:
In the app folder, set up a simple server. This will allow HTTP requests to serve up the site files on your local computer. This can be done using Python. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

Loading the app:
Go to your preferred browser and with your server running, visit the site: `http://localhost:8000`. This app is optimised for Google Chrome.

### Dependencies

Most of the code in this project was written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, ES6 was used to write any additional JavaScript.

The site uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.
