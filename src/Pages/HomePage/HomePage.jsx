import Nav from "../../components/Nav/Nav"
import "./HomePage.css"
import Images from "../../images/coinsAndwalletImage.png"

const HomePage = () => {
  return (
    <div className="home-page hAndW pageBackground pagePadding">
      <div className="home-page-content flexCenter page">
        <section className="navigation">
          <Nav />
        </section>
        <section className="home-page-text flexCol">
          <h1 className="main-text">
            CRYPTO
            <br /> <span className="simulator">SIMULATOR</span>
          </h1>
          <p>
            Master crypto trading risk-free with Crypto Simulator. Practice your
            strategies without using real money. Perfect for both beginners and
            experienced traders
          </p>
          <section className="start-trading">
            <button className="button">Start Trading</button>
          </section>
        </section>
        <section className="images">
          <img src={Images} alt="background" />
        </section>
      </div>
    </div>
  );
}

export default HomePage