require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard return machine soft grace casino slot general'; 
let testAccounts = [
"0x851eb6d5ffb01bbc988d87d6267dc80af43c4703327cfe00d1cf30d05d69ed1d",
"0xcf6f2ed8b67c7bf29514fe116de87bdb7b6f3db6e99f3a6a8e7cbd4356cf777e",
"0x71150cdbf8b7510d548ac945de4ce786c058e2cc618ef9aab1cd90c8d6643995",
"0x2e263a05cdaaf67f1d69dd1fc99ca6c26900ddc31d5ab8fc63b212bea0689dde",
"0x0a6801cb0e64237c8fe015d56369e9d9fbcbe29f8788a8b7792ea2390e8612e6",
"0xafa9e051d0e2fa7443b2cd5da1186567f772bb246e0c848c3574f0633e56098b",
"0x5009f528006e37d9b1bb20092937d0d7007821933b5fc3341d3c57f51952ddf0",
"0x04e9fdfa0b0e9ce38fd18cb319ce6856d692e81a2dae1ac03916c3d866d65bdb",
"0x0f851841a93563422c363a2d65f9c31e57e794025c14e2c669748ec7412a0a4c",
"0xfaba7795ad96aabed0c483dce0c8fe41192d93da5157a8d9b4cd1a4eaf1dce68"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


