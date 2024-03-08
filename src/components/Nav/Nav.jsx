import "./Nav.css";
import { navData } from "./navData";
import { Link } from "react-scroll";
import { Link as HomeLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav flexCSB">
      <section className="logo">
        <HomeLink to="/home">CYPTO101</HomeLink>
      </section>
      <section className="routes flex">
        {navData.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            smooth={true}
            offset={0}
            duration={500}
          >
            {item.title}
          </Link>
        ))}
      </section>
      <section className="register-button">
        <button className="button">Register</button>
      </section>
    </div>
  );
}

export default Nav