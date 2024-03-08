import express from "express";
const router = express.Router();
import { Order, Wallet } from "../model/walletSchema.js";

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
        const { quantity, currentPrice, position, takeProfit, stopLoss } = req.body;
        const newOrder = new Order({
            quantity,
            currentPrice,
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

export default router;