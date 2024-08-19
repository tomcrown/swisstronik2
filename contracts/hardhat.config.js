require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "670a311ccb53f456e26a824c821988bc3cf8d29a5217273cdc07dbca8cb02ce4";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
