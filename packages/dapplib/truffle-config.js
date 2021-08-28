require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace casual flee seed edge rare remember assume guess arena off shallow'; 
let testAccounts = [
"0x23c6b560a251ca6395d0dfaa0055083acd06fc18f68ea5fb4e19daf5c5689561",
"0x2a3700705d05ec00891a8aa15fb56e4363c4339bfbcd80c900e484e5b2a93de0",
"0x9a93145c52b1271d5cc4410a3854fccf8169398b6cd593573a0fa27657346cbb",
"0xda04a8d32cdf17c1dee07dfa916fb68ee8cf5b3b5cba7ebf087ffaed5a13a1b7",
"0x59fc927be49ed19ae527168999d6c3dd5b8947eeb8729816d45be0f0eb932831",
"0x615d2a3534a3b70c52c259ea8f58dbd54f401f288a741945b928d1eb2cba81cd",
"0x52a61e0427dfd2adef7675cdfeed76ca3277c8ff92ab47d0e855e8543d267228",
"0x84c028193b6958599bdcf2c6b9d699059ef7c5744f03b9fae75c9a2dd0662466",
"0x63bd2f6529447d26650b50106adcb96451c32574bec9a5efd3b7822e88db78fc",
"0x14367123d5a5ed966d5548392f9b258022e8d4be377cda885a8f1e5cc4fc4aa3"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


