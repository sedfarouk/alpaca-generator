import { useContext } from "react";
import { alpacaContext } from "../../store/alpaca-store";

export default function Part({partItem, ...props}) {
  const alpacaCtx = useContext(alpacaContext);
  const selectedAccessory = alpacaCtx.accessories + '.png';

  return (
    <div style={{ backgroundImage: `url(${accessoriesImagesMap[selectedAccessory]})` }}>
      {props.children}
    </div>
  );
}
