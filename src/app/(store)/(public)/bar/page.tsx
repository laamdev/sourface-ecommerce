import { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { PageTitle } from '@/components/globals/page-title'
import { FoodMenu } from '@/components/bar/food-menu'
import { TapsMenu } from '@/components/bar/taps-menu'
import { SectionHeading } from '@/components/globals/section-heading'

export const metadata: Metadata = {
  title: 'Bar'
}
export default async function BarPage() {
  return (
    <MaxWidthWrapper className='py-8 sm:py-16'>
      <PageTitle title='Bar' />
      <section className='flex flex-col gap-y-4 sm:gap-y-8'>
        <SectionHeading title='Taps' isLeft />
        <TapsMenu />
      </section>
      <section className='flex flex-col gap-y-4 sm:gap-y-8'>
        <SectionHeading title='Snacks' isLeft />
        <FoodMenu />
      </section>
    </MaxWidthWrapper>
  )
}
