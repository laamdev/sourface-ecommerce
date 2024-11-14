import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getAllEvents = async () => {
  const ALL_EVENTS_QUERY = defineQuery(`
    *[_type == "event"] | order(startDate asc)
  `)

  try {
    const events = await sanityFetch({
      query: ALL_EVENTS_QUERY
    })
    return events.data || []
  } catch (error) {
    console.error('Error fetching all events:', error)
    return []
  }
}
