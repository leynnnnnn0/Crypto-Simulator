import express from "express";
const router = express.Router();
import { Wallet } from "../model/walletSchema.js";

router.get("/get", async (req, res) => {
    try {
        res.send({ message: "Hello" });
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

export default router;