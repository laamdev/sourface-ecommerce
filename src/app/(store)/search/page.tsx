import { Metadata } from 'next'

import { searchProductsByName } from '@/sanity/lib/products/searchProductsByName'

export const metadata: Metadata = {
  title: 'Search'
}

interface SearchPageProps {
  searchParams: Promise<{
    query: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query } = await searchParams
  const products = await searchProductsByName(query)

  if (!products.length) {
    return <div>Products not found</div>
  }

  return <div>Search page for {query}</div>
}
