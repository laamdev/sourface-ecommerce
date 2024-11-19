import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCategoryBySlug } from '@/sanity/lib/category/getCategoryBySlug'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  props: CategoryPageProps
): Promise<Metadata> {
  const params = await props.params
  const { slug } = params

  const category = await getCategoryBySlug(slug)

  if (!category) {
    return notFound()
  }

  return {
    title: category.name
  }
}

export default function CategoryPage() {
  return <div>CategoryPage</div>
}
