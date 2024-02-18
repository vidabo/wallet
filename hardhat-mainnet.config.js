require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
console.log(process.env);

/** @type import('hardhat/config').HardhatUserConfig */
const NEXT_PUBLIC_POLYGON_MAINNET_RPC = "https://polygon-rpc.com"; // Example RPC URL for Polygon mainnet
const NEXT_PUBLIC_PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: { // This is the mainnet configuration
      url: NEXT_PUBLIC_POLYGON_MAINNET_RPC,
      accounts: [`${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
