import "./CoinInfo.css"
import logo from "../../images/gecko.webp";
import {
  chartDataStore
} from "../../store/chartDataStore";
import { useEffect } from "react";

const CoinInfo = () => {
  const {data, getATHandATL, currentPrice, allTimeHigh, allTimeLow} = chartDataStore();
  useEffect(() => {getATHandATL()}, [data]);
  return (
    <div className="coin-info flexCSB">
      <section className="about-coin-name flexCenter">
        <img src={logo} alt="gecko" />
        <p className="p">GECKO/USD</p>
      </section>
      <section className="about-coin-price">
        <p className="light-color">Current Price</p>
        <p>{currentPrice.toFixed(2)}</p>
      </section>
      <section className="about-coin-price">
        <p className="light-color">All Time High</p>
        <p>{allTimeHigh.toFixed(2)}</p>
      </section>
      <section className="about-coin-price">
        <p className="light-color">All Time Low</p>
        <p>{allTimeLow.toFixed(2)}</p>
      </section>
    </div>
  );
}

export default CoinInfo