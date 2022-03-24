import { ethers } from "ethers"
import sdk from './';

interface Balance {
  dai: string;
  usdc: string;
  maker: string;
}

// Utility function for fomating the returned balance
export const formatBalance = (value: ethers.BigNumberish) => ethers.utils.formatUnits(value, 18)

export const getBalances = async (address: string): Promise<Balance> => new Promise(async (resolve, reject) => {
  try {
    resolve ({
      dai: formatBalance(await sdk.dai.balanceOf(address)),
      usdc: formatBalance(await sdk.usdc.balanceOf(address)),
      maker: formatBalance(await sdk.maker.balanceOf(address)),
    })
  } catch (e) {
    reject(e)
  }
}) 