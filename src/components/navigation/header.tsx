'use client'

import { Banner } from '@/components/navigation/banner'
import { Navbar } from '@/components/navigation/navbar'

export const Header = () => {
  return (
    <div className='relative'>
      <Banner />
      <Navbar />
    </div>
  )
}
