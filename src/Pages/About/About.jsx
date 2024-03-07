import "./About.css"
import { CgArrowRightO } from "react-icons/cg";
import { TbBulb } from "react-icons/tb";
import { aboutData } from "./aboutData";


const About = () => {
  return (
    <div className="about pageBackground flexCol">
      <div className="flexCenter what-is">
        <h1>
          WHAT IS <br />
          CRYPTO101?
        </h1>
        <div className="about-crypto101">
          <p>
            Crypto Simulator offers a risk-free environment for aspiring traders
            to hone their skills in the volatile world of cryptocurrency. With
            this innovative platform, users can immerse themselves in realistic
            market scenarios, make strategic decisions, and refine their trading
            techniques—all without risking their hard-earned money. Perfect for
            both novice and experienced traders, Crypto Simulator provides a
            safe space to experiment, learn, and master the intricacies of
            crypto trading before venturing into the real market
          </p>
          <button className="button get-started">
            Get Started{" "}
            <span className="arrow-icon">
              <CgArrowRightO />
            </span>
          </button>
        </div>
      </div>
      <div className="more-info flexCenter">
        <h1>
          ACHIEVE THE DESIRED CRYPTO
          <br />
          PROFITABILITY YOU SEEK.
        </h1>
        <div className="info-boxes flex">
          {aboutData.map((item) => (
            <div key={item.content} className="info-box">
              <span className="light-icon">
                <TbBulb />
              </span>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About