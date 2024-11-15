import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

interface EmptyStateProps {
  message: string
  linkHref: string
  linkLabel: string
}

export const EmptyState = ({
  message,
  linkHref,
  linkLabel
}: EmptyStateProps) => {
  return (
    <div className='mx-auto flex w-full max-w-5xl flex-col items-center rounded-2xl bg-card p-8 sm:p-16'>
      <h3 className='text-center text-base sm:text-2xl'>{message}</h3>

      <Link
        href={linkHref}
        className={buttonVariants({ className: 'mt-2 w-fit sm:mt-4' })}
      >
        {linkLabel}
      </Link>
    </div>
  )
}
