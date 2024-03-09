import "./OrderingBox.css";
import logo from "../../images/gecko.webp";
import { chartDataStore } from "../../store/chartDataStore";
import { useState } from "react";
import { orderStore } from "../../store/orderStore";
import { walletDataStore } from "../../store/walletDataStore";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { aboutOrderStore } from "../../store/aboutOrderStore";

const OrderingBox = () => {
  // Wallet information including getting the wallet data from database
  const { walletData, updateBalance } = walletDataStore();
  // Getting the current open position from database
  const { positions } = aboutOrderStore();
  // Storing the equity
  const [eq, setEquity] = useState();
  // To store the total quantity that was purchased
  const [totalQuantity, setTotalQuantity] = useState(0);
  // Destruturing the wallet data from data base
  const { balance } = walletData;
  // Used use effect here to update the quantity every time position is added or closed
  useEffect(() => {
    for (const quantity in positionsQuantity) {
      setTotalQuantity(parseFloat(totalQuantity + positionsQuantity[quantity]));
    }
  }, [balance]);
  // storing and setting the total amount to pay
  const [total, setTotal] = useState(0);
  // To get the position if long or short
  const [position, setPosition] = useState("Long");
  // Getting the current price of the coin
  const { currentPrice } = chartDataStore();
  // getting the method from the store to set the details to be ready to be sent to database
  const { setOrderDetails } = orderStore();
  // To set the P&L
  const [profitAndLoss, setProfitAndLoss] = useState(0);
  // Setting the order to be able to send it to the data base
  const [order, setOrder] = useState({
    quantity: 0,
    currentPrice,
    position: position,
    takeProfit: 0,
    stopLoss: 0,
  });
  // Used use effect to update the total correctly on text box allcoated to it, put orde as the dependency array so everytime the order box changes it will do the math to show the correct total, the same purpose as current price, when current price change it will do the math again
  useEffect(() => {
    setTotal(parseFloat(order.quantity * currentPrice));
  }, [order, currentPrice]);
  // notifaction base on the result of placing the order
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

  // Handling the change of text boxes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  // Handling place order button
  const handlePlaceOrder = (e) => {
    // Preventing the default behavior of browser when clicking a button
    e.preventDefault();
    //Desctructuring the variables inside the object
    const { quantity, takeProfit, stopLoss } = order;
    if (quantity) {
      //Updating the balance from the wallet
      updateBalance(walletData.balance - total);
      //Setting the order to send to data base
      setOrderDetails(
        parseFloat(quantity),
        parseFloat(currentPrice),
        total,
        position,
        parseFloat(takeProfit),
        parseFloat(stopLoss)
      );
      // Setting the value to 0 again after everything
      setOrder({
        quantity: 0,
        currentPrice,
        position: position,
        takeProfit: 0,
        stopLoss: 0,
      });
      // Showing success notification
      notifySuccess();
    } else {
      // Showing incomplete notification
      notifyIncomplete();
    }
  };

  // Used use effect to update the equity every time the price change
  useEffect(() => {
    setEquity(totalQuantity * currentPrice + balance);
    // Updating profit and loss
    setProfitAndLoss(parseFloat(eq - balance));
  }, [currentPrice]);

  // Simple algorithm to get the total quantity of open positions
  const positionsQuantity = positions.map((item) => item.quantity);

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
            <p className="money-text">${eq ? eq.toLocaleString() : 0}</p>
          </div>
          <div className="money-info">
            <p className="light-color">P&L</p>
            <p
              className={
                profitAndLoss > 0 ? "money-text green" : "money-text red"
              }
            >
              ${profitAndLoss.toFixed(2).toLocaleString()}
            </p>
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
              value={total}
              className="form-input"
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
