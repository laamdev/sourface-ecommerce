import Link from 'next/link'
import {
  Envelope,
  InstagramLogo,
  OrangeSlice,
  WhatsappLogo
} from '@phosphor-icons/react/dist/ssr'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'

import { COMPANY_NAME, CURRENT_YEAR } from '@/lib/constants'

export const Footer = () => {
  return (
    <footer className='bg-foreground py-12'>
      <MaxWidthWrapper className='grid grid-cols-4 gap-x-16'>
        <div className='col-span-1'>
          <div className='flex w-fit flex-col items-center -space-y-4'>
            <h3 className='font-serif text-3xl font-bold uppercase text-white'>
              {COMPANY_NAME}
            </h3>
            <OrangeSlice weight='fill' className='size-20 text-white' />
          </div>
        </div>
        <div className='col-span-1 text-white'>
          <h3 className='font-serif text-3xl font-bold uppercase text-white'>
            Vist Us
          </h3>
          <div className='mt-4 flex flex-col gap-y-2 text-lg'>
            <span>Mercado de Prosperidad (local 31)</span>
            <span>C. de López de Hoyos, 81</span>
            <span>Chamartín, 28002 Madrid</span>
          </div>
        </div>
        <div className='col-span-1'>
          <h3 className='font-serif text-3xl font-bold uppercase text-white'>
            Opening Hours
          </h3>
          <div className='mt-4 flex flex-col gap-y-2'>
            <p className='flex flex-col text-white'>
              <span className='text-zinc-300'>Martes a Sábado</span>
              <span className='text-lg'>12:00 - 15:00 y 18:00 - 22:00</span>
            </p>
            <p className='flex flex-col text-white'>
              <span className='text-zinc-300'>Domingo y Feriados</span>
              <span className='text-lg'>12:00 - 16:00</span>
            </p>
            <p className='flex flex-col text-white'>
              <span className='text-zinc-300'>Lunes</span>
              <span className='text-lg'>Cerrado</span>
            </p>
          </div>
        </div>
        <div className='col-span-1'>
          <h3 className='font-serif text-3xl font-bold uppercase text-white'>
            Contact Us
          </h3>
          <div className='mt-4 flex gap-x-4'>
            <Link href=''>
              <InstagramLogo size={32} className='text-white' />
            </Link>
            <Link href=''>
              <Envelope size={32} className='text-white' />
            </Link>
            <Link href=''>
              <WhatsappLogo size={32} className='text-white' />
            </Link>
          </div>
          {/* <div className="mt-4 flex flex-col gap-y-2 text-lg">
            <p className="text-white">Instagram</p>
            <p className="text-white">Email</p>
            <p className="text-white">WhatsApp</p>
          </div> */}
        </div>
      </MaxWidthWrapper>

      <div className='mt-24 text-center text-zinc-300'>
        <p className='text-sm'>
          &copy; {CURRENT_YEAR} {COMPANY_NAME}. All Rights Reserverd.
        </p>
      </div>
    </footer>
  )
}
