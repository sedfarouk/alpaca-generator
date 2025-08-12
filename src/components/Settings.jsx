import OutlinedButton from "../UI/OutlinedButton";
import classes from "./Settings.module.css";
import { useState } from "react";
import AVAILABLE_PARTS from "../utils/preconfigurations";

export default function Settings() {
  const [availableStyles, setAvailableStyles] = useState([]);

  return (
    <div className="settings">
      <div className={classes.accessorize}>
        <h3>Accessorize the alpaca's</h3>
        <div>
          {AVAILABLE_PARTS.map((part) => (
            <OutlinedButton key={part}>{part}</OutlinedButton>
          ))}
        </div>
      </div>
      <div className="style">
        <h3> Style </h3>
      </div>
    </div>
  );
}
