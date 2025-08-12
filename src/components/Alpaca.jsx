import Ears from "../components/parts/ears/Ears";
import Settings from "./Settings";
import blueBgImg from "./background_images/blue50.png";

export default function Alpaca() {
  return (
    <>
      <h1> Alpaca Generator </h1>
      <div className="main">
        <div
          className="alpaca"
          style={{ backgroundImage: `url(${blueBgImg})` }}
        >
          <Ears />
        </div>
        <Settings />
      </div>
    </>
  );
}
