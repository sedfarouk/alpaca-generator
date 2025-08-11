import Accessories from "./parts/accessories/Accessories";
import blueBgImg from './background_images/blue50.png';

export default function Alpaca() {
  return (
    <>
      <h1> Alpaca Generator </h1>
      <div className="main" style={{backgroundImage: `url(${blueBgImg})`}}>
        <Accessories />
      </div>
    </>
  );
}
