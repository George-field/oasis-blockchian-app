import { Input as ChakraInput } from '@chakra-ui/react'
import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from 'react';

interface InputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  valid: boolean;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const Input = ({ onChange, value, valid, onBlur, name, type, placeholder }: InputProps) => (
  <ChakraInput
    onChange={onChange}
    value={value}
    isInvalid={!valid}
    onBlur={onBlur}
    name={name}
    type={type}
    my='2'
    placeholder={placeholder}
  />
)

export default Input;