import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Storage contract...");

  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Get the contract factory
  const Storage = await ethers.getContractFactory("Storage");

  // Deploy with explicit gas settings
  const storage = await Storage.deploy({
    maxFeePerGas: ethers.parseUnits("20", "gwei"),
    maxPriorityFeePerGas: ethers.parseUnits("2", "gwei"), // 2 gwei tip
    gasLimit: 2100000,
  });

  console.log("Transaction hash:", storage.deploymentTransaction()?.hash);

  // Wait for deployment
  await storage.waitForDeployment();

  const contractAddress = await storage.getAddress();
  console.log("Storage contract deployed to:", contractAddress);

  // Save the address for verification later
  console.log("\nTo verify this contract, run:");
  console.log(`npx hardhat verify --network testnet ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
