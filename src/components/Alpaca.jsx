import { useRef, useContext } from "react";
import FeatureButton from "../UI/FeatureButton";
import {
  accessoriesImagesMap,
  backgroundImagesMap,
  earsImagesMap,
  eyesImagesMap,
  hairImagesMap,
  legImagesMap,
  mouthImagesMap,
  neckImagesMap,
  noseImagesMap,
} from "../utils/imagePaths";
import Part from "./Part";
import Settings from "./Settings";
import { alpacaContext } from "../store/alpaca-store";
import AVAILABLE_PARTS from "../utils/preconfigurations";
import html2canvas from "html2canvas";

const allAvailableParts = AVAILABLE_PARTS;

export default function Alpaca() {
  const alpacaCtx = useContext(alpacaContext);
  const alpacaDivRef = useRef(null);

  function shuffleParts() {
    allAvailableParts.forEach((partDetails) => {
      const length = partDetails.styles.length;
      const randomIdx = Math.floor(Math.random() * length);
      const randomPartStyle = partDetails.styles[randomIdx];

      switch (partDetails.part) {
        case "Hair":
          alpacaCtx.changeHair(randomPartStyle);
          break;

        case "Leg":
          alpacaCtx.changeLeg(randomPartStyle);
          break;

        case "Eyes":
          alpacaCtx.changeEyes(randomPartStyle);
          break;

        case "Ears":
          alpacaCtx.changeEars(randomPartStyle);
          break;

        case "Mouth":
          alpacaCtx.changeMouth(randomPartStyle);
          break;

        case "Accessories":
          alpacaCtx.changeAccessories(randomPartStyle);
          break;

        case "Background":
          alpacaCtx.changeBackground(randomPartStyle);
          break;

        case "neck":
          alpacaCtx.changeNeck(randomPartStyle);
          break;
      }
    });
  }

  async function handleDownload() {
    if (!alpacaDivRef.current) {
      return;
    }

    const canvas = await html2canvas(alpacaDivRef.current, {
      useCORS: true,
      backgroundColor: null,
    });
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "alpaca.png";
    link.click();
  }

  return (
    <div className="mx-auto w-3/5">
      <div className="text-center m-[50px]">
        <h1 className="text-[30px] md:text-[40px]">
          Alpaca Generator
        </h1>
        <p className="">
          Show some ❤️{" "}
          <a href="https://github.com/sedfarouk/alpaca-generator" className="text-blue-600 underline">here</a>
        </p>
      </div>
      <div className="main mt-[80px] flex flex-col md:flex-row gap-20">
        <div className="alpaca basis-1/2">
          <div
            className="relative h-[400px] md:h-[600px] w-auto"
            ref={alpacaDivRef}
          >
            <Part partItem="background" partImagesMap={backgroundImagesMap}>
              <Part partItem="leg" partImagesMap={legImagesMap}>
                <Part partItem="ears" partImagesMap={earsImagesMap}>
                  <Part partItem="neck" partImagesMap={neckImagesMap}>
                    <Part partItem="nose" partImagesMap={noseImagesMap}>
                      <Part partItem="mouth" partImagesMap={mouthImagesMap}>
                        <Part partItem="hair" partImagesMap={hairImagesMap}>
                          <Part
                            partItem="accessories"
                            partImagesMap={accessoriesImagesMap}
                          >
                            <Part
                              partItem="eyes"
                              partImagesMap={eyesImagesMap}
                            ></Part>
                          </Part>
                        </Part>
                      </Part>
                    </Part>
                  </Part>
                </Part>
              </Part>
            </Part>
          </div>
          <div className="flex flex-row justify-center gap-10 mt-10">
            <FeatureButton onClick={shuffleParts}>
              <i
                className="fa-solid fa-shuffle"
                style={{ marginRight: "8px", color: "blue" }}
              ></i>
              Random
            </FeatureButton>
            <FeatureButton onClick={handleDownload}>
              <i
                className="fa-solid fa-download"
                style={{ marginRight: "8px", color: "green" }}
              ></i>
              Download
            </FeatureButton>
          </div>
        </div>
        <div className="basis-1/2">
          <Settings />
        </div>
      </div>
    </div>
  );
}
