import { create } from "zustand";
import axios from "axios";

export const orderStore = create(set => ({
    orderDetails: {
        quantity: 0,
        currentPrice: 0,
        position: 0,
        takeProfit: 0,
        stopLoss: 0,
    },
    setOrderDetails: (quantity, currentPrice, position, takeProfit, stopLoss) => {
        set({
            orderDetails: {
                quantity,
                currentPrice,
                position,
                takeProfit,
                stopLoss
            }
        })
        console.log(orderStore.getState().orderDetails)
        orderStore.getState().addOrder();
    },
    addOrder: async () => {
        const { quantity, currentPrice, position, takeProfit, stopLoss } =
          orderStore.getState().orderDetails;
        await axios.post("http://localhost:8000/addOrder", { quantity, currentPrice, position, takeProfit, stopLoss })
            .then(console.log("added")).catch(err => console.log(err));
    }
}))