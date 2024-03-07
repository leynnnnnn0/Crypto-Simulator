import mongoose, { mongo } from "mongoose";

const walletSchema = mongoose.Schema({
    balance: {
        type: Number,
        required: true
    },
    equity: {
        type: Number,
    },
    pAndL: {
        type: Number,
    }
}, { timestamps: true })

export const Wallet = mongoose.model("wallet", walletSchema)