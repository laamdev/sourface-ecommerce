import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_ID_QUERY = defineQuery(`
    *[_type == "product" && slug.current == $slug] | order(name asc)[0]{
      _id,
      name,
      description,
      "slug": slug.current,
      "manufacturer": manufacturer->{
        name, 
        "slug": slug.current
        },
      "style": category->{
        name,
        "slug": slug.current
      },
      image,
      price,
      abv,
      size,
      format
    }
  `)

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: { slug }
    })
    return product.data || null
  } catch (error) {
    console.error('Error fetching product: ', error)
    return null
  }
}
