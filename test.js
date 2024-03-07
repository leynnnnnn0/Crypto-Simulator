import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Line, LineChart, Tooltip } from "recharts";
import { type } from "@testing-library/user-event/dist/type";

const App = () => {
  const inputRef = useRef(null);
  const [numbers, setNumbers] = useState([]);
  const [entryPosition, setEntryPosition] = useState({
    quantity: 0,
    price: 0,
  });
  const handleInput = (e) => {
    e.preventDefault();
    const inputValue = parseFloat(inputRef.current.value);
    const index = numbers.length - 1;
    const entry = numbers[index];
    setEntryPosition({
      quantity: inputValue,
      price: entry.pv,
    });
  };
  const handleClose = (e) => {
    e.preventDefault();
    const { quantity, price } = entryPosition;
    const index = numbers.length - 1;
    const currentAmount = numbers[index];
    console.log(typeof quantity);
    console.log(typeof currentAmount.pv);
    console.log(quantity * currentAmount.pv);
  };
  useEffect(() => {
    const { quantity, price } = entryPosition;
    console.log("Amount: " + quantity * price);
  }, [entryPosition]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const number = Math.random() * 100;
      setNumbers((prev) => [
        ...prev,
        {
          pv: number,
        },
      ]);
      if (numbers.length >= 50) {
        setNumbers(numbers.slice(25, 51));
      }
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [numbers]);

  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={numbers}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
      <form>
        <input type="number" ref={inputRef} />
        <input type="submit" onClick={handleInput} />
      </form>
      <button onClick={handleClose}>Close position</button>
    </div>
  );
};
