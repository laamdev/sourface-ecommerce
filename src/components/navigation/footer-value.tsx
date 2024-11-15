import { cn } from '@/lib/utils'

interface FooterValueProps {
  children: React.ReactNode
  className?: string
}

export const FooterValue = ({ children, className }: FooterValueProps) => {
  return (
    <p className={cn('text-base text-white sm:text-lg', className)}>
      {children}
    </p>
  )
}
