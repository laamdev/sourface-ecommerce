import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { EventDetails } from '@/components/events/event-details'

import { getFormattedCurrency } from '@/lib/utils'
import { getFormattedDate } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import { Event } from '../../../sanity.types'

interface EventCardProps {
  event: Event
}

export const EventCard = ({ event }: EventCardProps) => {
  const eventCategory =
    event.category === 'tasting'
      ? 'Tasting'
      : event.category === 'presentation'
        ? 'Presentation'
        : event.category === 'meet-the-brewer'
          ? 'Meet the Brewer'
          : event.category === 'other'
            ? 'Event'
            : 'Event'

  const formattedDate = getFormattedDate(event.startDate!)
  const formattedPrice = getFormattedCurrency(event.price!)

  return (
    <div className='grid max-w-2xl grid-cols-2 overflow-hidden rounded-2xl bg-card'>
      <div className='relative aspect-square rounded-b-none'>
        <Image
          src={
            (urlForImage(event.image)
              ?.height(1080)
              .width(1080)
              .url() as string) ?? '/images/event-1.webp'
          }
          alt={event.name ?? 'Evento LamBeer.'}
          fill
          className='rounded-b-none'
        />

        <Badge variant='secondary' className='absolute left-4 top-4'>
          {eventCategory}
        </Badge>
      </div>
      <div className='flex flex-col justify-center p-4 sm:px-6 sm:py-4'>
        <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
          {event.name}
        </h2>
        <h3 className='stone-700 text-sm font-medium'>{formattedDate}</h3>
        <div className='mt-4'>
          <EventDetails event={event} />
        </div>

        <div className='mt-8 flex items-center justify-between'>
          <Button>Book Now</Button>
          <h4 className='text-2xl font-bold text-stone-700'>
            {event.price ? <span>{formattedPrice}</span> : <span>Gratis</span>}
          </h4>
        </div>
      </div>
    </div>
  )
}
