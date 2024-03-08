import ChartData from "../../components/ChartData/ChartData";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import Nav from "../../components/Nav/Nav";
import OrderingBox from "../../components/OrderingBox/OrderingBox";
import "./Simulator.css";

const Simulator = () => {
  return (
    <div className="simulator hAndW">
      <section className="navigation-area">
        <Nav />
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
    </div>
  );
};

export default Simulator;
