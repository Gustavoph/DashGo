import { ElementType } from 'react';
import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import Link from 'next/link'

interface NavLinkProps extends LinkProps {
  href: string;
  children: string;
  icon: ElementType;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium" >{children}</Text>
      </ChakraLink>
    </Link>
  )
}