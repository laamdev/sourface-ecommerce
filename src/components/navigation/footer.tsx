import Link from 'next/link'
import {
  Envelope,
  InstagramLogo,
  OrangeSlice,
  WhatsappLogo
} from '@phosphor-icons/react/dist/ssr'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'

import { COMPANY_NAME, CURRENT_YEAR } from '@/lib/constants'
import { FooterLabel } from './footer-label'
import { FooterValue } from './footer-value'
import { FooterWrapper } from './footer-wrapper'

export const Footer = () => {
  return (
    <footer className='bg-foreground py-16 sm:py-24'>
      <MaxWidthWrapper className='grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-16'>
        <div className='col-span-1'>
          <div className='flex w-fit flex-col items-center -space-y-4'>
            <FooterLabel text={COMPANY_NAME} />
            <OrangeSlice
              weight='fill'
              className='size-14 text-white sm:size-20'
            />
          </div>
        </div>
        <div className='col-span-1'>
          <FooterWrapper>
            <FooterLabel text='Visit Us' />
            <FooterValue className='flex flex-col gap-y-1 sm:gap-y-2'>
              <span>Greenwood Center,</span>
              <span>789 Maple Lane,</span>
              <span>Uptown, 10101 Springfield</span>
            </FooterValue>
          </FooterWrapper>
        </div>

        <div className='col-span-1'>
          <FooterWrapper>
            <FooterLabel text='Opening Hours' />

            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-1'>
                <p className='text-xs text-stone-300 sm:text-sm'>Tue - Sat</p>
                <FooterValue>12:00 - 22:00</FooterValue>
              </div>
              <div className='flex flex-col gap-y-1'>
                <p className='text-xs text-stone-300 sm:text-sm'>
                  Sun & Holidays
                </p>
                <FooterValue>12:00 - 16:00</FooterValue>
              </div>
              <div className='flex flex-col gap-y-1'>
                <p className='text-xs text-stone-300 sm:text-sm'>Mon</p>
                <FooterValue>Closed</FooterValue>
              </div>
            </div>
          </FooterWrapper>
        </div>

        <div className='col-span-1'>
          <FooterWrapper>
            <FooterLabel text='Contact Us' />
            <FooterValue className='flex gap-x-4'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramLogo className='tw-animation size-8 text-white hover:text-stone-300' />
              </a>
              <a href=''>
                <Envelope className='tw-animation size-8 text-white hover:text-stone-300' />
              </a>
              <a href=''>
                <WhatsappLogo className='tw-animation size-8 text-white hover:text-stone-300' />
              </a>
            </FooterValue>
          </FooterWrapper>
        </div>
      </MaxWidthWrapper>

      <div className='mt-24 text-center text-stone-300'>
        <p className='text-xs sm:text-sm'>
          &copy; {CURRENT_YEAR} {COMPANY_NAME}. All Rights Reserverd.
        </p>
      </div>
    </footer>
  )
}
