import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex>
      { showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Gustavo Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            gusta.coliveira@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gustavo Oliveira" src="https://github.com/gustavoph.png" />
    </Flex>
  )
}