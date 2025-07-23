import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY, ETHERSCAN_API, SEPOLIA_RPC_URL, RPC_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    testnet: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 20000000000,
      gas: 8000000,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};
export default config;
