import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY, ETHERSCAN_KEY, SEPOLIA_URL_KEY, CORE_URL_KEY } =
  process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    core: {
      url: CORE_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
      timeout: 120000, // 2 minutes
      httpHeaders: {
        Connection: "keep-alive",
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};

export default config;
