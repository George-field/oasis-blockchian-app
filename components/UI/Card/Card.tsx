import { Box } from "@chakra-ui/react";

interface CardProps {
  children: JSX.Element;
  width?: number;
  backgroundColor?: string;
}

const Card = ({ children, width, backgroundColor }: CardProps) => (
  <Box
    backgroundColor={backgroundColor || 'gray.50'}
    borderRadius='md'
    width={width || 'full'}
  >
    {children}
  </Box>
)

export default Card;