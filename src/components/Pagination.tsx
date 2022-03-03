import * as C from '@chakra-ui/react'

export function Pagination() {
  return (
    <C.Stack
      mt="8"
      spacing="6"
      align="center"
      direction="row"
      justify="space-between"
    >
      <C.Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </C.Box>
      <C.Stack direction="row" spacing="2">
        <C.Button 
          size="sm"
          width="4"
          disabled
          fontSize="xs"
          colorScheme="pink"
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </C.Button>

        <C.Button 
          size="sm"
          width="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </C.Button>
        <C.Button 
          size="sm"
          width="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </C.Button>
        <C.Button 
          size="sm"
          width="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          4
        </C.Button>
      </C.Stack>
    </C.Stack>
  )
}