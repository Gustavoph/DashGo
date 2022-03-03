import * as C from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  return (
    <C.Box>
      <Header />

      <C.Flex
        px="6"
        my="6"
        w="100%"
        mx="auto"
        maxWidth={1480}
      >
        <Sidebar />

        <C.Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <C.Flex mb="8" justify="space-between" align="center">
            <C.Heading size="lg" fontWeight="normal">Usuários</C.Heading>

            <C.Button
              as="a"
              size='sm'
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<C.Icon as={RiAddLine} />}
            >
              Criar novo
            </C.Button>
          </C.Flex>

          <C.Table>
            <C.Thead>
              <C.Tr>
                <C.Th px="6" color="gray.300" width="8">
                  <C.Checkbox colorScheme="pink" />
                </C.Th>
                <C.Th>Usuário</C.Th>
                <C.Th>Data de cadastro</C.Th>
                <C.Th width="8"></C.Th>
              </C.Tr>
            </C.Thead>

            <C.Tbody>
              <C.Tr>
                <C.Td px="6">
                  <C.Checkbox colorScheme="pink" />
                </C.Td>
                <C.Td>
                  <C.Box>
                    <C.Text fontWeight="bold">
                      Gustavo Oliveira
                    </C.Text>
                    <C.Text fontSize="sm" color="gray.300">
                      gusta.coliveira07@gmail.com
                    </C.Text>
                  </C.Box>
                </C.Td>
                <C.Td>04 de Abril, 2022</C.Td>
                <C.Td>
                  <C.Button
                    as="a"
                    size='sm'
                    fontSize="sm"
                    colorScheme="pink"
                    leftIcon={<C.Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </C.Button>
                </C.Td>
              </C.Tr>
            </C.Tbody>
          </C.Table>

          <Pagination />
        </C.Box>
      </C.Flex>
    </C.Box>
  )
}