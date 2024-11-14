import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

import { Cart } from '@/components/navigation/cart'
import { Menu } from '@/components/navigation/menu'
import { UserMenu } from '@/components/navigation/user-menu'

import { COMPANY_NAME } from '@/lib/constants'
import { navLinks } from '@/lib/constants'
import { SignIn } from '@phosphor-icons/react/dist/ssr'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-y-2'>
      <Link href='/' className='pl-4 font-serif text-3xl font-black'>
        {COMPANY_NAME}
      </Link>
      <div className='flex items-center'>
        <ul className='flex w-full items-center gap-x-4'>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} className='px-4 py-2 text-xl font-medium'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='grid grid-cols-3 divide-x-2 sm:grid-cols-2'>
          <div className='flex items-center justify-center border-l-2 px-8 py-4'>
            <Cart />
          </div>

          <div className='flex items-center justify-center'>
            <SignedOut>
              <SignInButton mode='modal'>
                <SignIn className='size-8 cursor-pointer' />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserMenu />
            </SignedIn>
          </div>

          <div className='flex items-center justify-center px-8 py-4 sm:hidden'>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}
