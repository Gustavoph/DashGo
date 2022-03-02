import * as C from '@chakra-ui/react'

interface InputProps extends C.InputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <C.FormControl>
      {!!label && <C.FormLabel htmlFor={name}>{label}</C.FormLabel>}
      <C.Input
        id={name}
        name={name}
        variant="filled"
        bgColor="gray.900"
        focusBorderColor='pink.500'
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        {...rest}
      />
    </C.FormControl>
  )
}