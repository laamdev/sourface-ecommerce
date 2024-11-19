import { cn } from '@/lib/utils'

export const SectionHeading = ({
  title,
  isLeft
}: {
  title: string
  isLeft?: boolean
}) => {
  return (
    <h2
      className={cn(
        'text-center font-serif text-4xl font-bold uppercase sm:text-7xl',
        {
          'text-left': isLeft
        }
      )}
    >
      {title}
    </h2>
  )
}
