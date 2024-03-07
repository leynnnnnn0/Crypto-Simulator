import { create } from "zustand";

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
        console.log(orderStore.getState().orderDetails);
    }
}))