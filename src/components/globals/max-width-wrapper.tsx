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
        'mx-auto flex max-w-screen-2xl flex-col gap-y-8 px-4 sm:gap-y-16 sm:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}
