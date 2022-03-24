import sdk from 'lib/ether-sdk';
import { ethers } from 'ethers';
import { useState } from 'react';

const formatBalance = (value: ethers.BigNumberish) => ethers.utils.formatUnits(value, 18)

const useGetBalances = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [balance, setBalance] = useState({
    dai: '0',
    usdc: '0',
    maker: '0'
  })

  const getAddressBalances = async (address: string) => {
    try {
      setIsLoading(true)
      const newBalance = {
        dai: formatBalance(await sdk.dai.balanceOf(address)),
        usdc: formatBalance(await sdk.usdc.balanceOf(address)),
        maker: formatBalance(await sdk.maker.balanceOf(address)),
      }
      
      // TODO: Validate responses
      setBalance(newBalance)
      setIsLoading(false)

    } catch (e) {
      // TODO: Handle Error
      setIsLoading(false)
    }
  }

  return {
    balance,
    isLoading,
    getAddressBalances
  }
}

export default useGetBalances;