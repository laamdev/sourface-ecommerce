import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { PortableText } from 'next-sanity'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Event } from 'sanity.types'
import { getFormattedCurrency, getFormattedDate } from '@/lib/utils'

interface EventDetailsProps {
  event: Event
}

export const EventDetails = ({ event }: EventDetailsProps) => {
  const formattedDate = getFormattedDate(event.startDate!)
  const formattedPrice = getFormattedCurrency(event.price!)

  const eventCategory =
    event.category === 'tasting'
      ? 'Cata'
      : event.category === 'presentation'
        ? 'Presentación'
        : event.category === 'meet-the-brewer'
          ? 'Meet the Brewer'
          : event.category === 'other'
            ? 'Evento'
            : 'Evento'

  return (
    <Dialog>
      <DialogTrigger className='font-bold'>Ver Detalles</DialogTrigger>
      <DialogContent className='max-h-[80vh] overflow-y-auto'>
        <div className='relative flex h-full flex-col'>
          <div className='relative aspect-video'>
            <Image
              src='/images/event-1.webp'
              alt={event.name ?? 'Evento LamBeer.'}
              fill
              className='w-full'
            />

            <Badge variant='secondary' className='absolute left-4 top-4'>
              {eventCategory}
            </Badge>
          </div>
          <div className='p-4'>
            <div>
              <h2 className='text-3xl font-bold'>{event.name}</h2>
              <h3 className='stone-700 mt-2 text-sm font-medium uppercase'>
                {formattedDate}
              </h3>
            </div>

            <div className='mt-4 flex-grow overflow-y-auto'>
              {event.description && event.description.length > 0 && (
                <div className='prose'>
                  <PortableText value={event.description!} />
                </div>
              )}
            </div>
          </div>

          <div className='sticky bottom-0 flex items-center justify-between bg-white p-4'>
            <Button>Reserva tu plaza</Button>

            <h4 className='text-2xl font-bold text-stone-700'>
              {formattedPrice}
            </h4>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
