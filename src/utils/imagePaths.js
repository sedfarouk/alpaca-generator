const accessoriesImages = import.meta.glob(
  "../public/images/accessories/*.png",
  { eager: true }
);

export const accessoriesImagesMap = Object.fromEntries(
  Object.entries(accessoriesImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const earsImages = import.meta.glob("../public/images/ears/*.png", {
  eager: true,
});

export const earsImagesMap = Object.fromEntries(
  Object.entries(earsImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const eyesImages = import.meta.glob("../public/images/eyes/*.png", {
  eager: true,
});

export const eyesImagesMap = Object.fromEntries(
  Object.entries(eyesImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const hairImages = import.meta.glob("../public/images/hair/*.png", {
  eager: true,
});

export const hairImagesMap = Object.fromEntries(
  Object.entries(hairImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const legImages = import.meta.glob("../public/images/leg/*.png", {
  eager: true,
});

export const legImagesMap = Object.fromEntries(
  Object.entries(legImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const mouthImages = import.meta.glob("../public/images/mouth/*.png", {
  eager: true,
});

export const mouthImagesMap = Object.fromEntries(
  Object.entries(mouthImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const neckImages = import.meta.glob("../public/images/neck/*.png", {
  eager: true,
});

export const neckImagesMap = Object.fromEntries(
  Object.entries(neckImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const noseImages = import.meta.glob("../public/images/nose/*.png", {
  eager: true,
});

export const noseImagesMap = Object.fromEntries(
  Object.entries(noseImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

const backgroundImages = import.meta.glob(
  "../public/images/background_images/*.png",
  { eager: true }
);

export const backgroundImagesMap = Object.fromEntries(
  Object.entries(backgroundImages).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);
