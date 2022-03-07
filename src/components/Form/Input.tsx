import { FormControl, FormErrorMessage, FormLabel, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError
}

export function Input({ name, label, error = null, ...rest }: InputProps) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <Input
        id={name}
        name={name}
        variant="filled"
        bgColor="gray.900"
        focusBorderColor='pink.500'
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      ) }
    </FormControl>
  )
}