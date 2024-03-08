import "./OrderingBox.css";
import logo from "../../images/gecko.webp";
import { chartDataStore } from "../../store/chartDataStore";
import { useState } from "react";
import { orderStore } from "../../store/orderStore";
import { walletDataStore } from "../../store/walletDataStore";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderingBox = () => {
  const { fetchWalletData, walletData } = walletDataStore();
  const { balance, equity, pAndL } = walletData;
  useEffect(() => {
    fetchWalletData();
  }, [balance]);
  const [position, setPosition] = useState("Long");
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
    const { quantity } = order;
    if (quantity) {
      setOrderDetails(
        parseFloat(quantity),
        parseFloat(currentPrice),
        position,
        parseFloat(takeProfit),
        parseFloat(stopLoss)
      );
      notifySuccess();
    } else {
      notifyIncomplete();
    }
  };

  const notifySuccess = () =>
    toast.success("Sent successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("Something went wrong. Please try again.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyIncomplete = () =>
    toast.error("Incomplete Details.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setOrder({ ...order, [name]: value })
    };
  return (
    <>
      <ToastContainer />
      <div className="ordering-box BR10 flexCol">
        <div className="money flexCSB">
          <div className="money-info">
            <p className="light-color">Account Balance</p>
            <p className="money-text">${balance && balance.toLocaleString()}</p>
          </div>
          <div className="money-info">
            <p className="light-color">Equity</p>
            <p className="money-text">
              ${equity ? equity.toLocaleString() : 0}
            </p>
          </div>
          <div className="money-info">
            <p className="light-color">P&L</p>
            <p className="money-text">${pAndL ? pAndL.toLocaleString() : 0}</p>
          </div>
        </div>
        <div className="long-short-option flexCSB BR10">
          <div
            className={
              position === "Long" ? "selected option-box " : "option-box"
            }
          >
            <p onClick={() => setPosition("Long")}>Long</p>
          </div>
          <div
            className={
              position === "Short" ? "selected option-box" : "option-box "
            }
          >
            <p onClick={() => setPosition("Short")}>Short</p>
          </div>
        </div>
        <div className="coin-box BR10 w100 flexCSB">
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
              <p className="coin-text">{currentPrice.toFixed(7)}</p>
            </section>
          </section>
        </div>
        <form className="quantity-form flexCSB xsP">
          <div className="quantity">
            <p className="light-color">Quantity: </p>
            <input
              type="number"
              name="quantity"
              value={order.quantity}
              className="form-input"
              onChange={handleChange}
            />
          </div>
          <div className="total">
            <p className="light-color">Total Price: </p>
            <input
              type="number"
              name="quantity"
              value={order.quantity}
              className="form-input"
              onChange={handleChange}
            />
          </div>
        </form>
        <form className="take-stop flexCSB  xsP">
          <div className="take take-stop-box">
            <p className="light-color">Take Profit</p>
            <input
              type="number"
              name="takeProfit"
              value={order.takeProfit}
              onChange={handleChange}
              className="form-input"
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
              className="form-input"
            />
            <p className="light-color">Possible Loss: </p>
          </div>
        </form>
        <div className="place-order flex">
          <button className="BR10 w100" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderingBox;
