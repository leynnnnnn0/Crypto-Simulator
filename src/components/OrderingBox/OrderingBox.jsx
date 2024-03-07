import "./OrderingBox.css"
import logo from "../../images/gecko.webp"
import { chartDataStore } from "../../store/chartDataStore";
const OrderingBox = () => {
    const { currentPrice } = chartDataStore();
  return (
    <div className="ordering-box flexCol">
      <div className="long-short-option flexCSB">
        <div className="option-box">
          <h1 className="long">Long</h1>
        </div>
        <div>
          <h1>Short</h1>
        </div>
      </div>
      <div className="coin-box flexCSB">
        <section className="coin flexCol">
          <p className="light-color">Coin</p>
          <section className="about-coin-name flex">
            <img src={logo} alt="gecko" />
            <p className="p">GECKO/USD</p>
          </section>
        </section>
        <section className="price">
          <section className="about-coin-price">
            <p className="light-color">Current Price</p>
            <p>{currentPrice}</p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default OrderingBox