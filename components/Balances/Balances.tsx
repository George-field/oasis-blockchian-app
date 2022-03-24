import { Box } from "@chakra-ui/react"
import { Token } from "../UI";

interface BalancesProps {
  balance: {
    dai: string;
    usdc: string;
    maker: string;
  }
}

const Balances = ({ balance: { dai, usdc, maker } }: BalancesProps) => {
  return (
    <Box>
      <Token 
        label='Dai'
        iconUrl='/dai.png'
        amount={dai}
      />
       <Token 
        label='USDC'
        iconUrl='/usdc.png'
        amount={usdc}
      />
       <Token 
        label='Maker'
        iconUrl='/maker.png'
        amount={maker}
      />
    </Box>
  )
}

export default Balances;