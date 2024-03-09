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

const orderSchema = mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    takeProfit: {
      type: Number,
    },
    stopLoss: {
      type: Number,
    },
  },
  { timestamps: true }
);

const positionSchema = mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    takeProfit: {
      type: Number,
    },
    stopLoss: {
      type: Number,
    },
  },
  { timestamps: true }
);


const Position = mongoose.model("position", positionSchema);
const Order = mongoose.model("order", orderSchema);
const Wallet = mongoose.model("wallet", walletSchema);

export { Wallet, Order, Position};