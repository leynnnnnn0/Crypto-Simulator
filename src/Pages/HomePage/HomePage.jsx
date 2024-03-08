import Nav from "../../components/Nav/Nav"
import "./HomePage.css"
import Images from "../../images/coinsAndwalletImage.png"
import About from "../About/About"
import Benifits from "../Benefits/Benefits"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <div className="home-page hAndW pageBackground pagePadding">
        <div className="home-page-content flexCenter page">
          <section className="navigation">
            <Nav />
          </section>
          <section className="home-page-text flexCol">
            <h1 className="main-text">
              CRYPTO
              <br /><span className="simulator-text">SIMULATOR</span>
            </h1>
            <p>
              Master crypto trading risk-free with Crypto Simulator. Practice
              your strategies without using real money. Perfect for both
              beginners and experienced traders
            </p>
            <section className="start-trading">
              <button className="button"><Link to="/simulator" className="link">Start trading</Link></button>
            </section>
          </section>
          <section className="images">
            <img src={Images} alt="background" />
          </section>
        </div>
      </div>
      <About />
      <Benifits />
      <Footer/>
    </>
  );
}

export default HomePage