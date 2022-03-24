import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Tag } from 'components/UI';

const Header = () => {
  return (
    <Flex
      bg='gray.50'
      alignItems='center'
      padding='2'
    >
      <Box
        mx='4'
      >
        <Image
          src='https://oasis.app/static/img/logo.svg'
        />
      </Box>
      <Box
        lineHeight='none'
      >
        <Heading
          size='lg'
          color='gray.600'
        >
          George Field
        </Heading>
        <Text
          fontWeight='normal'
          color='gray.600'
          marginBottom='2'
        >Oasis Apps full stack candidate</Text>
        <Tag 
          label="George Field"
        />
      </Box>
    </Flex>
  )
}

export default Header;