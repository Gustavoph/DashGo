import * as C from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <C.Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <C.Flex
        p="8"
        w="100%"
        as="form"
        bg="gray.800"
        maxWidth={360}
        flexDirection="column"
      >
        <C.Stack spacing={4}>
          <Input
            name="email"
            label="E-mail"
            type="email"
          />

          <Input
            label="Senha" 
            name="password"
            type="password"
          />
        </C.Stack>
        <C.Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </C.Button>
      </C.Flex>
    </C.Flex>
  )
}
