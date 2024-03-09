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
            const result = await axios.get("http://localhost:8000/get");
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
            await axios.put("http://localhost:8000/updateWallet", {_id: "65e9978f7e718d158d6f8f7c", balance, equity, pAndL});
        } catch (err) {
            console.log(err);
        }
    },
    updateBalance: async (balance) => {
        try {
            await axios.put("http://localhost:8000/updateBalance", {_id: "65e9978f7e718d158d6f8f7c", balance});
        } catch (err) {
            console.log(err);
        }
    }
}))