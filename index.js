const ethers = require('ethers');

async function createWallet() {

    console.log('------------------------------------------------------------------------------------------------------')
    console.log('Beware, the information below is sensitive. Make sure you are in a controlled development environment.')
    console.log('------------------------------------------------------------------------------------------------------')
  
  // Create a new random wallet
  const wallet = await ethers.Wallet.createRandom();

  // Print the wallet address"
  console.log(`Wallet: ${wallet.address}`);

  // Print the mnemonic words
  console.log(`Mnemonic: ${wallet._mnemonic().phrase}`);

  // Imprime the privatekey
  console.log(`PrivateKey: ${wallet.privateKey}`);



}

createWallet();
