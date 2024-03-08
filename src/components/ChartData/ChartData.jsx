import "./ChartData.css"
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartDataStore } from "../../store/chartDataStore";
import { useEffect, useState } from "react";


const ChartData = () => {
    const { data } = chartDataStore();
    const [priceData, setPriceData] = useState([]);
    useEffect(() => {
      setPriceData(data);
    }, [data])
    
  return (
    <div className="chart-data xs">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={300} data={priceData}>
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartData