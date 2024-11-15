import Link from 'next/link'
import { List } from '@phosphor-icons/react/dist/ssr'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { navLinks } from '@/lib/constants'

export const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <List className='size-6 sm:size-8' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='border-b border-white'>
          <SheetTitle className='text-left uppercase text-background'>
            Menu
          </SheetTitle>
        </SheetHeader>
        <ul className='p-6'>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='block py-2 font-serif text-3xl font-medium text-background'
              >
                <SheetClose>{link.name}</SheetClose>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
