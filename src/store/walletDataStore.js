import { create } from "zustand";
import axios from "axios";

export const walletDataStore = create(set => ({
    walletData: {
        balance: 0,
        equity: 0,
        pAndL: 0
    },
    fetchWalletData: async () => {
        try {
            const result = await axios.get(
              "https://crypto-simulator-backend.onrender.com/get"
            );
            const data = result.data.result;
            const [{ balance, equity, pAndL }] = data;
            set({
                walletData: {
                    balance,
                    equity,
                    pAndL
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    updateWallet: async (balance, equity, pAndL) => {
        try {
            await axios.put(
              "https://crypto-simulator-backend.onrender.com/updateWallet",
              { _id: "65e9978f7e718d158d6f8f7c", balance, equity, pAndL }
            );
        } catch (err) {
            console.log(err);
        }
    },
    updateBalance: async (balance) => {
        try {
            await axios.put(
              "https://crypto-simulator-backend.onrender.com/updateBalance",
              { _id: "65e9978f7e718d158d6f8f7c", balance }
            );
        } catch (err) {
            console.log(err);
        }
    }
}))