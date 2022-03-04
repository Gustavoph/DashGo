import { useRouter } from 'next/router'
import { createContext, useContext, useEffect } from 'react';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface SidebarDrawerProviderProps {
  children: React.ReactNode
}

type SidebarDrawerContext = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const router = useRouter()
  const disclousere = useDisclosure()
  const { onClose } = disclousere

  useEffect(() => {
    onClose()
  }, [router.asPath, onClose])

  return (
    <SidebarDrawerContext.Provider value={disclousere}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
