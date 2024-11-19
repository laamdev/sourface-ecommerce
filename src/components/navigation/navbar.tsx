import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

import { Cart } from '@/components/navigation/cart'
import { Menu } from '@/components/navigation/menu'
import { UserMenu } from '@/components/navigation/user-menu'

import { COMPANY_NAME } from '@/lib/constants'
import { navLinks } from '@/lib/constants'
import { SignIn } from '@phosphor-icons/react/dist/ssr'
import { currentUser } from '@clerk/nextjs/server'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-y-2'>
      <Link href='/' className='pl-4 font-serif text-xl font-black sm:text-3xl'>
        {COMPANY_NAME}
      </Link>
      <div className='flex items-center'>
        <ul className='hidden w-full items-center gap-x-4 sm:flex'>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} className='px-4 py-2 text-xl font-medium'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='grid grid-cols-3 divide-x-2 sm:grid-cols-2'>
          <div className='flex items-center justify-center border-l-2 sm:px-8 sm:py-4'>
            <Cart />
          </div>

          <div className='flex items-center justify-center'>
            <SignedOut>
              <SignInButton mode='modal'>
                <SignIn className='size-6 cursor-pointer sm:size-8' />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserMenu />
            </SignedIn>
          </div>

          <div className='flex items-center justify-center p-4 sm:hidden sm:px-8 sm:py-4'>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}
