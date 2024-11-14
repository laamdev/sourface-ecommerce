import { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { ProductsGrid } from '@/components/products/products-grid'
import { PageTitle } from '@/components/globals/page-title'
import { CategoryFilters } from '@/components/products/category-filters'
import { ProductSearch } from '@/components/products/product-search'
import { ProductPagination } from '@/components/products/product-pagination'

import { getAllProducts } from '@/sanity/lib/products/getAllProducts'
import { getAllCategories } from '@/sanity/lib/products/getAllCategories'
import { getProductsCount } from '@/sanity/lib/products/getProductsCount'
import { PRODUCTS_PER_PAGE } from '@/lib/constants'

interface ProductsPageProps {
  searchParams: Promise<{
    filter: string
    query: string | null
    page: number
  }>
}

export const metadata: Metadata = {
  title: 'Products'
}

export default async function ProductsPage({
  searchParams
}: ProductsPageProps) {
  const { filter, query, page } = await searchParams

  const paginationStart = page > 1 ? (page - 1) * PRODUCTS_PER_PAGE : 0
  const paginationEnd = page > 1 ? page * PRODUCTS_PER_PAGE : PRODUCTS_PER_PAGE

  const products = await getAllProducts(
    filter,
    query,
    paginationStart,
    paginationEnd
  )
  const productsCount = await getProductsCount()
  const categories = await getAllCategories()

  const categoriesList = categories.map(category => ({
    label: category.name,
    value: category.slug
  }))

  return (
    <MaxWidthWrapper>
      <section>
        <PageTitle title='All Products' />

        <div className='mt-8'>
          <div className='flex flex-col gap-y-4'>
            <ProductSearch placeholder='Search products...' />
            <CategoryFilters filters={categoriesList} />
          </div>

          <div className='py-16'>
            <ProductsGrid products={products} />
          </div>
        </div>

        {PRODUCTS_PER_PAGE < productsCount && (
          <ProductPagination totalDocs={productsCount} />
        )}
      </section>
    </MaxWidthWrapper>
  )
}
