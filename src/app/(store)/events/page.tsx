import { Metadata } from 'next'

import { PageTitle } from '@/components/globals/page-title'
import { EventsGrid } from '@/components/events/events-grid'
import { EmptyState } from '@/components/globals/empty-state'
import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'

import { getAllEvents } from '@/sanity/lib/events/getAllEvents'

export const metadata: Metadata = {
  title: 'Events',
  description: `Tastings, presentations, meet the brewer events, and much more. Book your spot for one of our events and enjoy the best of Madrid's craft beer scene.`
}

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <MaxWidthWrapper className='py-8 sm:py-16'>
      <div>
        <PageTitle title='Events' />
      </div>

      <section className='flex flex-col gap-y-2 sm:gap-y-4'>
        {events && events.length > 0 ? (
          <EventsGrid events={events} />
        ) : (
          <EmptyState
            message='No hay futuros eventos programados.'
            linkHref='/beers'
            linkLabel='Ver cervezas'
          />
        )}
      </section>
    </MaxWidthWrapper>
  )
}
