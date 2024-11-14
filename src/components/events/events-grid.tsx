'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { EventCard } from '@/components/events/event-card'

import { cn } from '@/lib/utils'
import { Event } from 'sanity.types'

export const EventsGrid = ({
  events,
  className
}: {
  events: Event[]
  className?: string
}) => {
  return (
    <div className={cn('grid grid-cols-1 gap-8 sm:grid-cols-3', className)}>
      {events.map((event: any) => {
        return (
          <AnimatePresence key={event._id}>
            <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EventCard key={event._id} event={event} />
            </motion.div>
          </AnimatePresence>
        )
      })}
    </div>
  )
}
