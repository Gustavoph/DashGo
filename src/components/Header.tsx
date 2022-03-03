import * as C from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <C.Flex
      h="20"
      mt="4"
      px="6"
      w="100%"
      mx="auto"
      as="header"
      align="center"
      maxWidth={1480}
    >
      <C.Text
        w="64"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
        <C.Text
          ml="1"
          as="span"
          color="pink.500"
        >.</C.Text>
      </C.Text>

      <C.Flex
        py="4"
        px="8"
        ml="6"
        flex='1'
        as="label"
        bg="gray.800"
        maxWidth={400}
        color="gray.200"
        alignSelf="center"
        position="relative"
        borderRadius="full"
      >
        <C.Input
          px="4"
          mr="4"
          color="gray.500"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <C.Icon as={RiSearchLine} fontSize="20"/>
      </C.Flex>

      <C.Flex
        ml="auto"
        align="center"
      >
        <C.HStack
          mx="8"
          pr="8"
          py="1"
          spacing="8"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <C.Icon as={RiNotificationLine} fontSize="20"/>
          <C.Icon as={RiUserAddLine} fontSize="20" />
        </C.HStack>

        <C.Flex>
          <C.Box mr="4" textAlign="center">
            <C.Text>Gustavo Oliveira</C.Text>
            <C.Text color="gray.300" fontSize="small">
              gusta.coliveira@gmail.com
            </C.Text>
          </C.Box>

          <C.Avatar size="md" name="Gustavo Oliveira" src="https://github.com/gustavoph.png" />
        </C.Flex>
      </C.Flex>
    </C.Flex>
  )
}