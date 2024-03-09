import express from "express";
const router = express.Router();
import { Order, Position, Wallet } from "../model/walletSchema.js";

router.get("/get", async (req, res) => {
    try {
        const result = await Wallet.find({});
        res.send({result});
    } catch (err) {
        res.send({ message: err });
    }
})

router.post("/post", async (req, res) => {
    try {
        const { balance, equity, pAndL } = req.body;
        const newMoney = new Wallet({
            balance,
            equity,
            pAndL
        })
        newMoney.save();
        res.send({message: "added"})
    } catch (err) {
        console.log(err);
    }
})

router.post("/addOrder", async (req, res) => {
    try {
        const { quantity, currentPrice, total, position, takeProfit, stopLoss } = req.body;
        const newOrder = new Order({
            quantity,
            currentPrice,
            total,
            position,
            takeProfit,
            stopLoss
        })
        newOrder.save();
        res.send({ message: "order added" });
    } catch (err) {
        console.log(err);
    }
})

router.get("/getHistory", async (req, res) => {
    try {
        const result = await Order.find({});
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})

router.post("/addPosition", async (req, res) => {
    try {
      const { quantity, currentPrice, total, position, takeProfit, stopLoss } =
        req.body;
      const newPosition = new Position({
        quantity,
          currentPrice,
        total,
        position,
        takeProfit,
        stopLoss,
      });
      newPosition.save();
      res.send({ message: "position added" });
    } catch (err) {
      console.log(err);
    }
})

router.get("/getPositions", async (req, res) => {
    try {
        const result = await Position.find({});
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})

router.delete("/closePosition/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
        await Position.findByIdAndDelete(_id);
        res.send({message: "deleted/"});
    } catch (err) {
        console.log(err);
    }
})

router.put("/updateWallet", async (req, res) => {
    const { _id, balance, equity, pAndL } = req.body;
    try {
        await Wallet.findByIdAndUpdate(_id, { balance, equity, pAndL });
        res.send("Updated successfully!")
    } catch (err) {
        console.log(err);
    }
})

router.put("/updateBalance", async (req, res) => {
  const { _id, balance} = req.body;
  try {
    await Wallet.findByIdAndUpdate(_id, { balance });
    res.send("Updated successfully!");
  } catch (err) {
    console.log(err);
  }
});

router.get("/getPosition/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Position.findOne({ _id });
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})

export default router;