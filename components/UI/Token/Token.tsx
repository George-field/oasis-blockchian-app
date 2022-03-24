import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { TokenConfig } from "../../../interfaces";

const Token = ({ iconUrl, label, amount }: TokenConfig) => (
  <Flex
    alignItems='center'
    p={4}
  >
    <Flex
      alignItems='center'
      grow={1}
    >
      <Avatar
        size='sm'
        src={iconUrl}
        mr={2}
      />
      <Text
        fontWeight='medium'
      >
        {label}
      </Text>
    </Flex>
    <Box>
      <Text>{amount && (parseFloat(amount) > 0) ? amount : `-${label.toLocaleUpperCase()}`}</Text>
    </Box>
  </Flex>
)

export default Token;