import { aboutOrderStore } from "../../store/aboutOrderStore";
import { chartDataStore } from "../../store/chartDataStore";
import { orderStore } from "../../store/orderStore";
import { walletDataStore } from "../../store/walletDataStore";
import "./TableContent.css"
import axios from "axios";
const TableContent = ({ _id, createdAt, quantity, total, entryPrice, position, takeProfit, stopLoss, close }) => {
    const { closePosition } = orderStore(); 
    const { walletData, updateBalance } = walletDataStore();
    const { currentPrice } = chartDataStore();
    const { fetchPositions,positions } = aboutOrderStore();
    const handleClick = async () => {
        try {
            const result = await axios.get(
              `https://crypto-simulator-backend.onrender.com/getPosition/${_id}`
            );
            const { quantity } = result.data;
            const total = quantity * currentPrice;
            console.log(typeof walletData.balance + total);
            updateBalance(walletData.balance + total)
            closePosition(_id);  
            fetchPositions();
        } catch (err) {
          console.log(err);
        }
    }
    
        
  return (
    <tbody className="table-data" key={createdAt}>
      <tr>
        <td>{createdAt.slice(0, 10)}</td>
        <td>{quantity}</td>
        <td>{entryPrice}</td>
        <td>{total && total.toFixed(2).toLocaleString()}</td>
        <td className={position}>{position}</td>
        <td>{takeProfit}</td>
        <td>{stopLoss}</td>
        {close && (
          <td onClick={handleClick} className="close">
            x
          </td>
        )}
      </tr>
    </tbody>
  );
}

export default TableContent