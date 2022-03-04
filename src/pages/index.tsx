import { Input } from '../components/Form/Input'
import { Button, Flex, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        p="8"
        w="100%"
        as="form"
        bg="gray.800"
        maxWidth={360}
        flexDirection="column"
      >
        <Stack spacing={4}>
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
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
