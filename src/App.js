import React from "react";
import "./App.css";
//1. Import coingecko-api
const CoinGecko = require("coingecko-api");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
const gecko = async () => {
  let data = await CoinGeckoClient.ping();
  console.log("data", data);
  return data;
};

function App() {
  return <div className="App">{gecko}</div>;
}

export default App;
