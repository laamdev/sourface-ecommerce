import { Metadata } from 'next'

import { PageTitle } from '@/components/globals/page-title'
import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'

export const metadata: Metadata = {
  title: 'Contact'
}

export default async function ContactPage() {
  return (
    <MaxWidthWrapper className='py-8 sm:py-16'>
      <PageTitle title='Contact' />

      <div>
        <a
          href='mailto:hello@sourface.com'
          target='_blank'
          rel='noopener noreferrer'
          className='font-serif text-xl font-medium'
        >
          hello@sourface.com
        </a>
      </div>
    </MaxWidthWrapper>
  )
}
