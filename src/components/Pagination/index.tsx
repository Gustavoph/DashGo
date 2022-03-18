import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegister: number;
  registerPerPage?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to-from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 1)
}

export function Pagination({
  onPageChange,
  currentPage = 1,
  totalCountOfRegister,
  registerPerPage = 10
}: PaginationProps) {
  
  const lastPage = Math.floor(totalCountOfRegister / registerPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPage = currentPage < lastPage 
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      mt="8"
      spacing="6"
      align="center"
      direction={["column", "row"]}
      justify="space-between"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        { currentPage > (1 + siblingsCount) && 
          <>
            <PaginationItem number={1} onPageChange={onPageChange} /> 
            { currentPage > (2 + siblingsCount) && <Text>...</Text>}
          </>
        }

        { previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
        }) }
        
        <PaginationItem number={currentPage} onPageChange={onPageChange} isCurrent />
        
        { nextPage.length > 0 && nextPage.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        }) }

        {(currentPage + siblingsCount) < lastPage && (
          <>
            { currentPage + 1 + siblingsCount < lastPage && <Text>...</Text> }
            <PaginationItem number={lastPage} onPageChange={onPageChange} /> 
          </>
        )}
      </Stack>
    </Stack>
  )
}