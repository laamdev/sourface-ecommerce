'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'

export const CategoryFilters = ({ filters }: { filters: any }) => {
  const searchParams = useSearchParams()
  const filter = searchParams.get('filter') || 'all'
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams)
    if (filter === 'all') {
      params.delete('filter')
    } else {
      params.set('filter', filter)
    }
    params.delete('page')
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <Badge
        variant={filter === 'all' ? 'default' : 'outline'}
        onClick={() => handleFilter('all')}
        className={cn(
          filter === 'all' && 'pointer-events-none',
          'cursor-pointer text-sm sm:text-base'
        )}
      >
        All
      </Badge>
      {filters.map((item: any) => (
        <Badge
          variant={filter === item.value.toLowerCase() ? 'default' : 'outline'}
          key={item.value}
          onClick={() => handleFilter(item.value.toLowerCase())}
          className={cn(
            filter === item.value.toLowerCase() && 'pointer-events-none',
            'cursor-pointer text-sm sm:text-base'
          )}
        >
          {item.label}
        </Badge>
      ))}
    </div>
  )
}
