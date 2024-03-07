import "./OrderingBox.css";
import logo from "../../images/gecko.webp";
import { chartDataStore } from "../../store/chartDataStore";
import { useEffect, useState } from "react";
import { orderStore } from "../../store/orderStore";
const OrderingBox = () => {
  const [position, setPosition] = useState("");
  const { currentPrice } = chartDataStore();
  const { setOrderDetails } = orderStore();
  const [order, setOrder] = useState({
    quantity: 0,
    currentPrice,
    position: position,
    takeProfit: 0,
    stopLoss: 0,
  });
  const { quantity, takeProfit, stopLoss } = order;
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderDetails(
      parseFloat(quantity),
      parseFloat(currentPrice),
      position,
      parseFloat(takeProfit),
      parseFloat(stopLoss)
    );
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setOrder({ ...order, [name]: value })
    };
  return (
    <div className="ordering-box flexCol">
      <div className="money flexCSB">
        <div className="money-info">
          <p className="light-color">Account Balance</p>
          <p className="money-text">$14,432.12</p>
        </div>
        <div className="money-info">
          <p className="light-color">Equity</p>
          <p className="money-text">$14,432.12</p>
        </div>
        <div className="money-info">
          <p className="light-color">P&L</p>
          <p className="money-text">$14,432.12</p>
        </div>
      </div>
      <div className="long-short-option flexCSB">
        <div className={position === "Long" ? "long option-box" : "option-box"}>
          <h1 onClick={() => setPosition("Long")}>Long</h1>
        </div>
        <div
          className={position === "Short" ? "long option-box" : "option-box"}
        >
          <h1 onClick={() => setPosition("Short")}>Short</h1>
        </div>
      </div>
      <div className="coin-box flexCSB">
        <section className="coin flexCol">
          <p className="light-color">Coin</p>
          <section className="about-coin-name flex">
            <img src={logo} alt="gecko" />
            <p className="p coin-text">GECKO/USD</p>
          </section>
        </section>
        <section className="price">
          <section className="about-coin-price">
            <p className="light-color">Current Price</p>
            <p coin-text>{currentPrice}</p>
          </section>
        </section>
      </div>
      <form className="quantity-form flex">
        <p>Quantity: </p>
        <input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
        />
      </form>
      <div className="take-stop flexCSB">
        <div className="take take-stop-box">
          <p className="light-color">Take Profit</p>
          <input
            type="number"
            name="takeProfit"
            value={order.takeProfit}
            onChange={handleChange}
          />
          <p className="light-color">Possible Profit: </p>
        </div>
        <div className="stop take-stop-box">
          <p className="light-color">Stop Loss</p>
          <input
            type="number"
            name="stopLoss"
            value={order.stopLoss}
            onChange={handleChange}
          />
          <p className="light-color">Possible Loss: </p>
        </div>
      </div>
      <div className="place-order flex">
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default OrderingBox;
