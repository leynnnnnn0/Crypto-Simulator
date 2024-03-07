import "./Benefits.css"
const Benefits = () => {
  return (
    <div className="benefits pagePadding">
      <div className="benefits-content page flexCol">
        <section className="benefits-text flexCSB">
          <h1>BENEFITS</h1>
          <p className="p">
            🚀 Risk-Free Learning: Dive into the crypto market without financial
            stakes. 📈 Skill Refinement: Hone your trading strategies in a
            realistic virtual environment. 💪 Confidence Boost: Master the art
            of cryptocurrency trading with assurance. 🔍 Strategy Testing:
            Evaluate and perfect your approaches in a secure space. 🎓
            Fast-Track Education: Accelerate your learning curve for real-market
            success. 🚫 Mistake Immunity: Learn from errors without the
            financial consequences.
          </p>
        </section>
        <div className="benefits-boxes flex">
          <section className="smart-way">
            <div>
              <h1>
                A SMART AND BEST WAY
                <br />
                TO PRACTICE CRYPTO TRADING
              </h1>
              <p className="p">
                Dive into the future of finance with the unparalleled advantages
                of investing in cryptocurrencies. Benefit from decentralization,
                transparency, and potential high returns. Explore a borderless
                financial ecosystem, harness technological innovation, and seize
                the advantage of a dynamic and rapidly evolving market. Embrace
                the opportunities that crypto investments bring for a
                forward-looking and diversified financial portfolio.
              </p>
              <iv className="begin-button">
                <button className="button">Begin your journey now</button>
              </iv>
            </div>
          </section>
          <section className="smart-way">
            <div>
              <h1>
                ADVANTAGE OF
                <br />
                INVESTING IN CRYPTO
              </h1>
              <p className="p">
                Experience the advantages of using our Crypto Simulator: Safely
                practice trading strategies in a risk-free environment, refine
                your skills without the fear of financial loss, and gain
                confidence before entering the live crypto market. Accelerate
                your learning curve, make informed decisions, and master the art
                of cryptocurrency trading with ease.
              </p>
              <iv className="begin-button">
                <button className="button">Begin your journey now</button>
              </iv>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Benefits