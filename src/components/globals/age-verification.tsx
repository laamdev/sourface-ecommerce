// components/AgeVerification.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { Button } from '@/components/ui/button'

export const AgeVerification = () => {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const ageVerified = Cookies.get('age-verified')
    if (!ageVerified) {
      setShowModal(true)
    }
  }, [])

  const handleVerification = (isOver21: boolean) => {
    if (isOver21) {
      Cookies.set('age-verified', 'true', { expires: 30 }) // Expires in 30 days
      setShowModal(false)
    } else {
      router.push('https://www.google.com')
    }
  }

  if (!showModal) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 text-center'>
        <h2 className='mb-6 text-2xl font-bold'>Age Verification Required</h2>
        <p className='mb-8'>You must be 21 or older to visit this site.</p>
        <div className='flex justify-center gap-4'>
          <Button onClick={() => handleVerification(true)}>
            I am 21 or older
          </Button>
          <Button
            variant='destructive'
            onClick={() => handleVerification(false)}
          >
            I am under 21
          </Button>
        </div>
      </div>
    </div>
  )
}
