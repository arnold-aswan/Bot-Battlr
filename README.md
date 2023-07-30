# BotBattlr

# Introduction

Bot Battlr is a web app that allows you to custom build your own bot army. The app is built with react.

# Features

- See profiles of each bot in Bots collection.
- Add an individual bot to your army by clicking on it.
- Realease a bot from your army by clicking on it.
- Discharge a bot from the service forever by clicking on the discharge button.
- Choose if you want to enlist a bot in your army or just see it's specs.
- Filter bots by their class

# Dependencies

Make sure you have the following installed first.

- Node (v16.20.1 or later)
- npm (v8.19.4 or later)
- React (v18.2.0)

# Project Setup

### 1. Clone the repo

`git clone git@github.com:arnold-aswan/Bot-Battlr.git`

### 2. Navigate to the project directory

`cd bot-battlr`

### 3. Install required dependencies.

`npm install`

### 4. Installing & starting the json server.

1. navigate to the src directory:

- `npm install -g json-server`

2. start the server

- `json-server --watch db.json`

### Test server connection by visiting this url

`http://localhost:8001/bots`

You should see something of the sorts

```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
```

### 5. Start the development server.

`npm run start`

runs the app in development mode.

### 6. Open the app in your browser.

The app should launch automatically in your default browseronce you run `npm start` if it doesn't navigate to `http://localhost/3000` to manually open it.
The page will reload if you save changes.
You may also see any lint errors in the console.

## Author & LIcense.

Author: Arnold Aswani 2023.

Licensed under the MIT License, see License file for more details.
