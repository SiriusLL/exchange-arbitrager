import React, { useEffect, useState } from "react";
import "./App.css";

//1. Import coingecko-api
const CoinGecko = require("coingecko-api");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls

function App() {
  const [ping, setPing] = useState({});
  useEffect(() => {
    const gecko = async () => {
      let data = await CoinGeckoClient.coins.all();
      // console.log("data", data);
      // data = JSON.stringify(data);
      data = data;
      console.log("data", data);
      setPing(data);
      // return data;
    };
    gecko();
  }, []);
  console.log("ping", typeof ping.data);
  return <div className="App">{ping.data.map((index) => index.id)}</div>;
}

export default App;
