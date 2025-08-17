import { useContext } from "react";
import { alpacaContext } from "../store/alpaca-store";

export default function Part({ partItem, partImagesMap, ...props }) {
  const alpacaCtx = useContext(alpacaContext);
  const selectPartStyle = alpacaCtx[partItem] + ".png";

  return (
    <>
      <img
        src={partImagesMap[selectPartStyle]}
        alt={partItem}
        className="alpaca-part h-auto w-full object-contain"
      />
      {props.children}
    </>
  );
}
