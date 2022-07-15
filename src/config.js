const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Dropy Getty";
const description = "We are very proud to present this collection to everyone who loves dogs and their breeding around the world because, as it is said, “a dog is man’s best friend”, We have launched 5,000 works of art that represent the love and passion for dogs and the great ambition to achieve dreams and what we love in life, also we would like to start dogs compititions and fastivals, you can own a work of art now if you are really a dog lover";
const baseUri = "ipfs://QmNZupi2qgBVgWQYBw8su1g3tQ4YswufXuQfkUTvdeTExH";

const solanaMetadata = {
  symbol: "DG",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "www.droopyGetty.com",
  creators: [
    {
      address: "0xcEd43a40B223D06ADD5891b1F0393AE9dCFe2a1D",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: 'Background'},
      { name: 'Photo'},
      { name: 'Eyes'},
      { name: 'Hat' },
      { name: 'Mouth'},
      { name: 'Shirt'},
    ],
  },
];

    

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
