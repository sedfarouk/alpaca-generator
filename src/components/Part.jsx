import { useContext } from "react";
import { alpacaContext } from "../store/alpaca-store";

export default function Part({partItem, partImagesMap, ...props}) {
  const alpacaCtx = useContext(alpacaContext);
  const selectPartStyle = alpacaCtx[partItem] + '.png';
  console.log(partImagesMap[selectPartStyle]);
  return (
    <div style={{ backgroundImage: `url(${partImagesMap[selectPartStyle]})` }}>
      {props.children}
    </div>
  );
}
