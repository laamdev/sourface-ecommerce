'use client'

import { useRouter } from 'next/navigation'
import { useDraftModeEnvironment } from 'next-sanity/hooks'

export const DisableDraftMode = () => {
  const environment = useDraftModeEnvironment()
  const router = useRouter()

  if (environment !== 'live' && environment !== 'unknown') {
    return null
  }

  const handleClick = async () => {
    await fetch('/draft-mode/disable')
    router.refresh()
  }
  return (
    <button
      onClick={handleClick}
      className='fixed bottom-4 right-4 z-50 bg-stone-50 px-4 py-2'
    >
      Disable Draft Mode
    </button>
  )
}
