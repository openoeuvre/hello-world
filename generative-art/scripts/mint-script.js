const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmbqQxSk1nHqY1UzPjhU9wSHeaQirxNAEXQeEDxKsjkRkg"
  const WALLET_ADDRESS = "0x5FcDc7F291D2c5e232642f324757fc5D9ba1Fb5E"
  const CONTRACT_ADDRESS = "0xe7371092458d006D245596A37f6DBC9B76168388"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});