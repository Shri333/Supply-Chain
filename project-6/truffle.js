// from the config for star notary project on github
// https://github.com/Shri333/Star-Notary/blob/main/truffle-config.js
const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // from the config for star notary project on github
    // https://github.com/Shri333/Star-Notary/blob/main/truffle-config.js
    rinkeby: {
      provider: () => new HDWallet(mnemonic, infuraKey),
      network_id: 4,
      gas: 4500000, // from Udacity course page on deploying ERC-20 smart contract
      gasPrice: 10000000000 // same here
    }
  }
};