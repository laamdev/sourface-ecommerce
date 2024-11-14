import React from 'react'

import { cn } from '@/lib/utils'

export const MaxWidthWrapper = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'mx-auto mt-16 flex max-w-screen-2xl flex-col gap-y-20 px-10',
        className
      )}
    >
      {children}
    </div>
  )
}
