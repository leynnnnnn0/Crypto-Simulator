import { useEffect } from "react";
import { aboutOrderStore } from "../../store/aboutOrderStore"
import "./AboutOrders.css"
import { useState } from "react";
import TableContent from "../TableContent/TableContent";
import { useId } from "react";

const AboutOrders = () => {
    const generatedKey = useId();
    // To track what is selected to know what to show
    const [selected, setSelected] = useState("positions");
    // To get the data from database to store the current positions and history
    const { fetchOrderHistoryData, fetchPositions, orderHistory, positions } = aboutOrderStore();
    // Used use effect to fetch the data one component is rendered
    useEffect(() => {
        fetchPositions();
        fetchOrderHistoryData();
    }, [0])
  return (
    <div className="about-orders BR20">
      <div className="about-order-selection flex">
        <p
          onClick={() => setSelected("positions")}
          className={selected === "positions" && "active"}
        >
          Positions
        </p>
        <p
          onClick={() => setSelected("history")}
          className={selected === "history" && "active"}
        >
          Order History
        </p>
      </div>
      <div className="order-table">
        <table className="history-table">
          <thead className="history-header">
            <td>Time</td>
            <td>Quantiy</td>
            <td>Entry Price</td>
            <td>Total Amount</td>
            <td>Position</td>
            <td>Take Profit</td>
            <td>Stop Loss</td>
          </thead>
          {selected === "positions" ? (
            positions.length > 0 ? (
              positions.map((item) => (
                <>
                  <TableContent
                    key={item._id}
                    createdAt={item.createdAt}
                    quantity={item.quantity}
                    position={item.position}
                    total={item.total}
                    entryPrice={item.currentPrice}
                    takeProfit={item.takeProfit}
                    stopLoss={item.stopLoss}
                    _id={item._id}
                    close={true}
                  />
                </>
              ))
            ) : (
              <p key={"test"} className="xs">
                No active position(s)
              </p>
            )
          ) : (
            orderHistory.map((item) => (
              <TableContent
                key={item._id}
                createdAt={item.createdAt}
                quantity={item.quantity}
                entryPrice={item.currentPrice}
                total={item.total}
                position={item.position}
                takeProfit={item.takeProfit}
                stopLoss={item.stopLoss}
              />
            ))
          )}
        </table>
      </div>
    </div>
  );
}

export default AboutOrders