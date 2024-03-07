import { create } from "zustand";

export const chartDataStore = create((set) => ({
  data: [
    {
      pv: 34.24324,
    },
    {
      pv: 14.24324,
    },
    {
      pv: 31.24324,
    },
    {
      pv: 34.24324,
    },
    {
      pv: 14.24324,
    },
    {
      pv: 21.24324,
    },
  ],
  currentPrice: 0,
  allTimeHigh: 0,
  allTimeLow: 0,
  intervalId: setInterval(() => {
    const { data } = chartDataStore.getState();
    const number = Math.random() * 100;
    set({
      data: [
        ...data,
        {
          pv: number,
        },
      ],
    });
  }, 10000),
  getATHandATL: () => {
    const { data } = chartDataStore.getState();
    const prices = data.map(item => item.pv);
    set({ currentPrice: prices[prices.length - 1] });
    prices.sort();
    set({ allTimeHigh: prices[prices.length - 1] });
    set({ allTimeLow: prices[0] });
  },
}));
