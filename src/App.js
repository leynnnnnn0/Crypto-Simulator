import "./App.css"
import HomePage from "./Pages/HomePage/HomePage";
import Simulator from "./Pages/Simulator/Simulator"
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/simulator" element={<Simulator/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App