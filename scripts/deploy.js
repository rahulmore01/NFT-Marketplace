const hre = require("hardhat");
const { ethers } = require("hardhat");

const fs = require("fs");
async function main() {
  const Marketplace = await ethers.getContractFactory("NFTMarketplace");
  const marketplace = await Marketplace.deploy(); // Remove the argument
  console.log("Contract deployed to address:", marketplace.address);

  // const data = {
  //   address: marketplace.address,
  //   abi: JSON.parse(marketplace.interface.format("json")),
  // };

  // // This writes the ABI and address to the Marketplace.json
  // fs.writeFileSync("../src/Marketplace.json", JSON.stringify(data));
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// const { ethers } = require("hardhat");
// const fs = require("fs");

// async function main() {
//   // Wait for the promise to resolve
//   const [deployer] = await ethers.getSigners();
//   console.log("deployer", deployer.address); // Access the address property of the deployer

//   const Marketplace = await ethers.getContractFactory("NFTMarketplace");
//   const marketplace = await Marketplace.deploy();

//   await marketplace.deployed();

//   const data = {
//     address: marketplace.address,
//     abi: JSON.parse(marketplace.interface.format("json")),
//   };

//   // This writes the ABI and address to the Marketplace.json
//   fs.writeFileSync("../src/Marketplace.json", JSON.stringify(data));
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

// const { ethers } = require("hardhat");
// const fs = require("fs");
// // const NFTMarketplace = require("../contracts/NFTMarketplace.sol");

// async function main() {
//   const [deployer] = await ethers.getSigners();
//   console.log("deployer", deployer);
//   const Marketplace = await ethers.getContractFactory("NFTMarketplace");
//   const marketplace = await Marketplace.deploy();
//   console.log("Marketplace", Marketplace);

//   await marketplace.deployed();

//   const data = {
//     address: marketplace.address,
//     abi: JSON.parse(marketplace.interface.format("json")),
//   };

//   // This writes the ABI and address to the Marketplace.json
//   fs.writeFileSync("../src/Marketplace.json", JSON.stringify(data));
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
