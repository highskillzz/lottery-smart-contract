const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("Web3");
const { bytecode, interface } = require("./compile");

const provider = new HDWalletProvider(
  "guitar scrub bar divert oblige trouble vacuum sport bubble federal peasant balcony",
  "https://rinkeby.infura.io/YTwWVaCH0Dy4QHOqk2Bk"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy contract from ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode})
    .send({from:accounts[0],gas:"1000000"})

  console.log("Interface ", interface);
  console.log("Contract deployed to ", result.options.address);
    
};

deploy();
