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

export default function Alpaca() {
  console.log(backgroundImagesMap);
  return (
    <>
      <h1> Alpaca Generator </h1>
      <div className="main">
        <div className="alpaca">
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
        <Settings />
      </div>
    </>
  );
}
