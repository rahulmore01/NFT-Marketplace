require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/0oob_94JamV7JcxKwRLUsgVYKfH-eylc",
      accounts: [
        "0x9ece959046b328b18fdc643ff221253e6f5eb2748ceeabe8386b2bd84ee6b217",
        // Add more accounts if needed
      ],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     mumbai: {
//       url: "https://polygon-mumbai.g.alchemy.com/v2/0oob_94JamV7JcxKwRLUsgVYKfH-eylc",
//       accounts:
//         "9ece959046b328b18fdc643ff221253e6f5eb2748ceeabe8386b2bd84ee6b217",
//     },
//     // mumbai: {
//     //   url:
//     //     process.env.DEPLOY_URL ||
//     //     "https://polygon-mumbai.g.alchemy.com/v2/0oob_94JamV7JcxKwRLUsgVYKfH-eylc",
//     //   accounts: process.env.SECRET_KEY,
//     // },
//     // mumbai: {
//     //   url: `${process.env.DEPLOY_URL}` || "https://rpc-mumbai.maticvigil.com",
//     //   accounts: [`0x${process.env.SECRET_KEY}`],
//     // },
//   },
//   solidity: {
//     version: "0.8.4",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };
