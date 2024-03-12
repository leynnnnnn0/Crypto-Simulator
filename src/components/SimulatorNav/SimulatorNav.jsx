import "./SimulatorNav.css"
import { Link } from "react-router-dom"

const SimulatorNav = () => {
  return (
      <div className="simulator-nav flexCSB">
          <Link className="simulator-logo" to={"/home"}>Crypto Simulator</Link>
    </div>
  )
}

export default SimulatorNav