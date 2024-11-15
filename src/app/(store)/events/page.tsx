import { Metadata } from 'next'

import { PageTitle } from '@/components/globals/page-title'
import { EventsGrid } from '@/components/events/events-grid'
import { EmptyState } from '@/components/globals/empty-state'

import { getAllEvents } from '@/sanity/lib/events/getAllEvents'

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Catas, presentaciones, meet the brewer y mucho más. Reserva tu plaza para uno de nuestros eventos y disfruta de lo mejor de la escena craft madrileña.'
}

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <div className='py-8 sm:py-16'>
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
    </div>
  )
}
