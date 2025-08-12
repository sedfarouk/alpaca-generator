import { createContext, useState } from "react";

export const alpacaContext = createContext({
  currentPart: "",
  hair: "",
  ears: "",
  mouth: "",
  eyes: "",
  neck: "",
  leg: "",
  accessories: "",
  background: "",
  changeHair: () => {},
  changeEars: () => {},
  changeMouth: () => {},
  changeEyes: () => {},
  changeNeck: () => {},
  changeLeg: () => {},
  changeAccessories: () => {},
  changeBackground: () => {},
  changeCurrentPart: () => {}
});

export default function AlpacaContextProvider(props) {
  const [hair, setHair] = useState("default");
  const [ears, setEars] = useState("default");
  const [mouth, setMouth] = useState("default");
  const [eyes, setEyes] = useState("default");
  const [neck, setNeck] = useState("default");
  const [leg, setLeg] = useState("default");
  const [accessories, setAccessories] = useState("default");
  const [background, setBackground] = useState("default");
  const [currentPart, setCurrentPart] = useState("Hair");

  function changeHair(hairstyle) {
    setHair(hairstyle);
  }

  function changeEars(earstyle) {
    setEars(earstyle);
  }

  function changeMouth(mouthstyle) {
    setMouth(mouthstyle);
  }

  function changeEyes(eyesstyle) {
    setEyes(eyesstyle);
  }

  function changeNeck(neckstyle) {
    setNeck(neckstyle);
  }

  function changeLeg(legstyle) {
    setLeg(legstyle);
  }

  function changeAccessories(accessoriesstyle) {
    setAccessories(accessoriesstyle);
  }

  function changeBackground(backgroundstyle) {
    setBackground(backgroundstyle);
  }

  function changeCurrentPart(part) {
    setCurrentPart(part);
  }

  const alpacaCtxValue = {
    currentPart,
    hair,
    mouth,
    ears,
    eyes,
    neck,
    leg,
    accessories,
    background,
    changeEars,
    changeEyes,
    changeAccessories,
    changeBackground,
    changeHair,
    changeLeg,
    changeMouth,
    changeNeck,
    changeCurrentPart
  };

  return (
    <alpacaContext.Provider value={alpacaCtxValue}>{props.children}</alpacaContext.Provider>
  );
}
