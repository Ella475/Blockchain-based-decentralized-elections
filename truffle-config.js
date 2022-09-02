const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: '172.19.224.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
  }
};