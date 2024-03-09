import { create } from "zustand";
import axios from "axios";

export const orderStore = create((set) => ({
  orderDetails: {
    quantity: 0,
        currentPrice: 0,
    total: 0,
    position: 0,
    takeProfit: 0,
    stopLoss: 0,
  },
  setOrderDetails: (quantity, currentPrice, total, position, takeProfit, stopLoss) => {
    set({
      orderDetails: {
        quantity,
            currentPrice,
        total,
        position,
        takeProfit,
        stopLoss,
      },
    });
      console.log(orderStore.getState().orderDetails)
      orderStore.getState().addOrder();
      orderStore.getState().addPosition();
  },
  addOrder: async () => {
    const { quantity, currentPrice, total, position, takeProfit, stopLoss } =
      orderStore.getState().orderDetails;
    await axios
      .post("http://localhost:8000/addOrder", {
        quantity,
          currentPrice,
        total,
        position,
        takeProfit,
        stopLoss,
      })
      .then(console.log("added"))
      .catch((err) => console.log(err));
  },
  addPosition: async () => {
    const { quantity, currentPrice, total, position, takeProfit, stopLoss } =
      orderStore.getState().orderDetails;
    await axios
      .post("http://localhost:8000/addPosition", {
        quantity,
          currentPrice,
        total,
        position,
        takeProfit,
        stopLoss,
      })
      .then(console.log("added"))
      .catch((err) => console.log(err));
    },
    closePosition: async (_id) => {
        try {
            await axios.delete(
              `https://crypto-simulator-backend.onrender.com/closePosition/${_id}`
            );
        } catch (err) {
            console.log(err);
      }
    },
}));