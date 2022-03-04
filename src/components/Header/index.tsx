import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const {  onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      h="20"
      mt="4"
      px="6"
      w="100%"
      mx="auto"
      as="header"
      align="center"
      maxWidth={1480}
    >
      { !isWideVersion && (
        <IconButton
          mt="2"
          mr="2"
          fontSize="24"
          onClick={onOpen}
          variant="unstyled"
          aria-label='Open Navigation'
          icon={<Icon as={RiMenuLine} />}
        >
          
        </IconButton>
      ) }

      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex ml="auto" align="center">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}