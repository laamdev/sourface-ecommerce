import Link from 'next/link'
import { User } from '@phosphor-icons/react/dist/ssr'
import { useUser } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const UserMenu = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User className='size-6 sm:size-8' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {isLoaded ? user?.fullName : 'My Account'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/orders'>My Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOutButton>Sign Out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
