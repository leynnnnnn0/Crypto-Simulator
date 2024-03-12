import { useEffect } from "react";
import AboutOrders from "../../components/AboutOrders/AboutOrders";
import ChartData from "../../components/ChartData/ChartData";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import Nav from "../../components/Nav/Nav";
import OrderingBox from "../../components/OrderingBox/OrderingBox";
import { aboutOrderStore } from "../../store/aboutOrderStore";
import "./Simulator.css";
import { walletDataStore } from "../../store/walletDataStore";
import SimulatorNav from "../../components/SimulatorNav/SimulatorNav";


const Simulator = () => {
  const { positions, orderHistory, fetchPositions } = aboutOrderStore();
  const { fetchWalletData } = walletDataStore();
  useEffect(() => {
    fetchPositions();
    fetchWalletData();
  }, [positions, orderHistory])
  return (
    <div className="simulator hAndW">
      <section className="navigation-area">
        <SimulatorNav/>
      </section>
      <div className="simulator-content-division flex">
        <div className="simulator-content">
          <section className="about-coin-area">
            <CoinInfo />
          </section>
          <section className="chart-section">
            <ChartData />
          </section>
        </div>
        <section className="ordering-area">
          <OrderingBox/>
        </section>
      </div>
      <section className="order-info">
        <AboutOrders/>
      </section>
    </div>
  );
};

export default Simulator;
