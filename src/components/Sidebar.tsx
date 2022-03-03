import * as C from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiInputMethodLine } from 'react-icons/ri'

export function Sidebar() {
  return (
    <C.Box as="aside" w="64" mr="8">
      <C.Stack spacing="12" align="flex-start">
        <C.Box>
          <C.Text
            fontSize="small"
            color="gray.400"
            fontWeight="bold"
          >
            GERAL
          </C.Text>
          <C.Stack spacing="4" mt="8" align="stretch">

            <C.Link display="flex" py="1">
              <C.Icon as={RiDashboardLine} fontSize="20" />
              <C.Text ml="4" fontWeight="medium" >Dashboard</C.Text>
            </C.Link>

            <C.Link display="flex" py="1">
              <C.Icon as={RiContactsLine} fontSize="20" />
              <C.Text ml="4" fontWeight="medium" >Usuários</C.Text>
            </C.Link>

          </C.Stack>
        </C.Box>

        <C.Box>
          <C.Text
            fontSize="small"
            color="gray.400"
            fontWeight="bold"
          >
            AUTOMAÇÃO
          </C.Text>
          <C.Stack spacing="4" mt="8" align="stretch">

            <C.Link display="flex" py="1">
              <C.Icon as={RiInputMethodLine} fontSize="20" />
              <C.Text ml="4" fontWeight="medium" >Formulários</C.Text>
            </C.Link>

            <C.Link display="flex" py="1">
              <C.Icon as={RiGitMergeFill} fontSize="20" />
              <C.Text ml="4" fontWeight="medium" >Automação</C.Text>
            </C.Link>

          </C.Stack>
        </C.Box>
      </C.Stack>
    </C.Box>
  )
}