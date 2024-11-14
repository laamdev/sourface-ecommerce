import { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { PageTitle } from '@/components/globals/page-title'
import { FoodMenu } from '@/components/bar/food-menu'
import { TapsMenu } from '@/components/bar/taps-menu'

export const metadata: Metadata = {
  title: 'Bar'
}
export default async function BarPage() {
  return (
    <MaxWidthWrapper>
      <section className='flex flex-col gap-y-8'>
        <PageTitle title='Grifos' />
        <TapsMenu />
      </section>
      <section className='flex flex-col gap-y-8'>
        <PageTitle title='Comida' />
        <FoodMenu />
      </section>
    </MaxWidthWrapper>
  )
}
