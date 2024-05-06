
require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.13",

  defaultNetwork: "calibrationnet",
  networks:{
    hardhat:{},
    calibrationnet: {
      chainId: 314159,
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: ["4b37e644ab78c477cf92ed880dd52d5b0d50bfe36056696d1e05ba480d5abaa3"]
    }
  }
};


// 0x8138489b863a68f224307a5D0Fa630917d848e25