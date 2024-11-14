import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'

export const getAllProducts = async (
  filter: string,
  query: string | null,
  paginationStart: number,
  paginationEnd: number
) => {
  const searchFilter = query ? `&& name match $query` : ''
  const ALL_PRODUCTS_QUERY = defineQuery(`
    *[_type == "product" && ($filter == 'all' || category->slug.current == $filter) ${searchFilter}] | order(name asc) [$paginationStart...$paginationEnd] {
      _id,
      name,
      "slug": slug.current,
      price,
      image,
      "manufacturer": manufacturer->name,
      "style": category->name,
      "styleFilter": category->slug.current,
    }
  `)

  try {
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
      params: {
        filter: filter || 'all',
        // @ts-expect-error
        query: query ? `*${query}*` : '',
        paginationStart,
        paginationEnd
      }
    })
    return products.data || []
  } catch (error) {
    console.error('Error fetching all products: ', error)
    return []
  }
}
