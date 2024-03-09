import  {create}  from "zustand";
import axios from "axios";

export const aboutOrderStore = create((set) => ({
  orderHistory: [],
  fetchOrderHistoryData: async () => {
    try {
      const res = await axios.get("http://localhost:8000/getHistory");
        const data = res.data;
        const orderHistory = data.map((item) => ({
          _id: item._id,
          createdAt: item.createdAt,
            quantity: item.quantity,
            total: item.total,
          currentPrice: item.currentPrice,
          position: item.position,
          takeProfit: item.takeProfit,
          stopLoss: item.stopLoss,
        }));
        set({ orderHistory }); 
    } catch (err) {
      console.log(err);
    }
    },
    positions: [],
    fetchPositions: async () => {
        try {
      const res = await axios.get("http://localhost:8000/getPositions");
            const data = res.data;
        const positions = data.map((item) => ({
          _id: item._id,
          createdAt: item.createdAt,
            quantity: item.quantity,
          total: item.total,
          currentPrice: item.currentPrice,
          position: item.position,
          takeProfit: item.takeProfit,
          stopLoss: item.stopLoss,
        }));
        set({ positions }); 
    } catch (err) {
      console.log(err);
    }      
  }
}));