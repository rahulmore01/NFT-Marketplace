// this file is to create a json abi file after deploying the contract
const fs = require("fs");
const path = require("path");
const { ethers, artifacts } = require("hardhat");

async function main() {
  const outputDir = path.join(__dirname, "..", "src");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Replace this with your correct contract's name
  const contractName = "NFTMarketplace";

  // Get the contract artifact
  const ContractArtifact = await artifacts.readArtifact(contractName);

  // Get the deployed contract address and ABI
  const contractAddress = ContractArtifact.deployedAddress;
  const contractABI = ContractArtifact.abi;

  // Prepare the JSON object
  const jsonConfig = {
    contractName,
    contractAddress,
    contractABI,
  };

  // Write the JSON object to a file
  const outputPath = path.join(outputDir, "config.json");
  fs.writeFileSync(outputPath, JSON.stringify(jsonConfig, null, 2));

  console.log("Configuration file generated at", outputPath);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
