import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet, goerlitestnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: goerlitestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'FrackinFrogs',
  tokenName: 'Frackin Frogs',
  tokenSymbol: 'FF',
  hiddenMetadataUri: 'ipfs://QmWvfkEieSiwx3CoFJa3ygmJfPK6sBjuXppjxJd12nztWH/hidden.json',
  maxSupply: 4444,
  whitelistSale: {
    price: 0.004,
    maxMintAmountPerTx: 100,
  },
  preSale: {
    price: 0.004,
    maxMintAmountPerTx: 100,
  },
  publicSale: {
    price: 0.004,
    maxMintAmountPerTx: 100,
  },
  // contractAddress: "0xb2Ff3D95060492e60b65e42DBA6BB72f300329A7",
  // contractAddress: "0x2de1E9FA8cB8d6aF8A74d854DADC580bA7b76A77",
  // contractAddress: "0xAc0FC0816b79803B409C0938aa954E8370f518be",
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
