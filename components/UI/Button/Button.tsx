import { Button as Btn } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset"
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({ label, onClick, type, isLoading, isDisabled }: ButtonProps) => (
  <Btn
    onClick={onClick}
    type={type}
    isLoading={isLoading}
    isDisabled={isDisabled}
    width='full'
    colorScheme='blue'
  >
    {label}
  </Btn>
)

export default Button;