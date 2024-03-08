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
            console.log(walletDataStore.getState().walletData)
        } catch (err) {
            console.log(err);
        }
    }
}))