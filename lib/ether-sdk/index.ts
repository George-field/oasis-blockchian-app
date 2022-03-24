import { getMainnetSdk } from "@dethcrypto/eth-sdk-client";
import { ethers } from "ethers";

const mainnetProvider = ethers.getDefaultProvider('mainnet', {
  // TODO: Put in env
  etherscan: '538W8K7RIBZAJW4CKYFHE59WYEITXIH9U8'
});

const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider);

export default getMainnetSdk(defaultSigner);