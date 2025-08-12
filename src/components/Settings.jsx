import OutlinedButton from "../UI/OutlinedButton";
import classes from "./Settings.module.css";
import { useContext } from "react";
import AVAILABLE_PARTS from "../utils/preconfigurations";

import { alpacaContext } from "./store/alpaca-store";

export default function Settings() {
  const alpacaCtx = useContext(alpacaContext);
  const styles = AVAILABLE_PARTS.find(partItem => partItem.part === alpacaCtx.currentPart).styles;

  return (
    <div className="settings">
      <div className={classes.accessorize}>
        <h3>Accessorize the alpaca's</h3>
        {AVAILABLE_PARTS.map((partItem) => (
          <OutlinedButton
            key={partItem.part}
            selected={alpacaCtx.currentPart === partItem.part}
            onClick={() => alpacaCtx.changeCurrentPart(partItem.part)}
          >
            {partItem.part}
          </OutlinedButton>
        ))}
      </div>
      <div className="style">
        <h3> Style </h3>
        {styles.map(style => <OutlinedButton onClick={() => alpacaCtx.chan} part={alpacaCtx.currentPart} selected={alpacaCtx[alpacaCtx.currentPart.toLowerCase()] === style}>{style}</OutlinedButton>)} 
      </div>
    </div>
  );
}
