/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Faq = {
  _id: string
  _type: 'faq'
  _createdAt: string
  _updatedAt: string
  _rev: string
  question?: string
  answer?: string
}

export type Person = {
  _id: string
  _type: 'person'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  avatar?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  email?: string
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: never
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  bioExcerpt?: string
  role?: string
  order?: number
  isTeamMember?: boolean
  skills?: {
    areas?: Array<string>
    platforms?: Array<string>
    languages?: Array<string>
  }
  isAuthor?: boolean
}

export type Event = {
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  category?: 'tasting' | 'presentation' | 'meet-the-brewer' | 'other'
  summary?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  startDate?: string
  endDate?: string
  price?: number
  capacity?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type Food = {
  _id: string
  _type: 'food'
  _createdAt: string
  _updatedAt: string
  _rev: string
  order?: number
  name?: string
  description?: string
  price?: number
}

export type Tap = {
  _id: string
  _type: 'tap'
  _createdAt: string
  _updatedAt: string
  _rev: string
  tapNumber?: number
  beerName?: string
  breweryName?: string
  beerStyle?: string
  abv?: number
  halfPintPrice?: number
  pintPrice?: number
}

export type Sale = {
  _id: string
  _type: 'sale'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  summary?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  discountAmount?: number
  couponCode?: string
  coverImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  validFrom?: string
  validUntil?: string
  isActive?: boolean
}

export type Order = {
  _id: string
  _type: 'order'
  _createdAt: string
  _updatedAt: string
  _rev: string
  orderNumber?: string
  stripeCheckoutSessionId?: string
  stripeCustomerId?: string
  clerkUserId?: string
  customerName?: string
  email?: string
  stripePaymentIntentId?: string
  products?: Array<{
    product?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'product'
    }
    quantity?: number
    _key: string
  }>
  totalPrice?: number
  currency?: string
  amountDiscount?: number
  status?: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  orderDate?: string
}

export type Product = {
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  price?: number
  abv?: number
  ingredients?: Array<string>
  description?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  stock?: number
  category?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'category'
  }
  manufacturer?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'manufacturer'
  }
  collaborator?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'manufacturer'
  }
  releaseDate?: string
  format?: 'Can' | 'Bottle'
  size?: number
  isFeatured?: boolean
}

export type Manufacturer = {
  _id: string
  _type: 'manufacturer'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  location?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  logo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'image'
  }
}

export type Category = {
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
      listItem?: 'bullet'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
      _key: string
    }
>

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Faq
  | Person
  | Event
  | Food
  | Tap
  | Sale
  | Order
  | Product
  | Manufacturer
  | Category
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/sanity/lib/bar/getAllDishes.ts
// Variable: ALL_DISHES_QUERY
// Query: *[_type == "food"] | order(order asc) {      _id,      name,      description,      price    }
export type ALL_DISHES_QUERYResult = Array<{
  _id: string
  name: string | null
  description: string | null
  price: number | null
}>

// Source: ./src/sanity/lib/bar/getAllTaps.ts
// Variable: ALL_TAPS_QUERY
// Query: *[_type == "tap"] | order(tapNumber asc) {      _id,      tapNumber,      beerName,      breweryName,      beerStyle,      abv,      halfPintPrice,      pintPrice    }
export type ALL_TAPS_QUERYResult = Array<{
  _id: string
  tapNumber: number | null
  beerName: string | null
  breweryName: string | null
  beerStyle: string | null
  abv: number | null
  halfPintPrice: number | null
  pintPrice: number | null
}>

// Source: ./src/sanity/lib/category/getCategoryBySlug.ts
// Variable: CATEGORY_BY_SLUG_QUERY
// Query: *[_type == "category" && slug.current == $slug] | order(name asc)[0]
export type CATEGORY_BY_SLUG_QUERYResult = {
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
} | null

// Source: ./src/sanity/lib/customers/getAllUniqueCustomers.ts
// Variable: ALL_CUSTOMERS_QUERY
// Query: *[_type == "order"] {      customerName,      email,      clerkUserId    }
export type ALL_CUSTOMERS_QUERYResult = Array<{
  customerName: string | null
  email: string | null
  clerkUserId: string | null
}>

// Source: ./src/sanity/lib/customers/getCustomerOrders.ts
// Variable: CUSTOMER_ORDERS_QUERY
// Query: *[_type == "order" && clerkUserId == $customerId] | order(orderDate desc) {      ...,      products[]{        ...,        product->      }    }
export type CUSTOMER_ORDERS_QUERYResult = Array<{
  _id: string
  _type: 'order'
  _createdAt: string
  _updatedAt: string
  _rev: string
  orderNumber?: string
  stripeCheckoutSessionId?: string
  stripeCustomerId?: string
  clerkUserId?: string
  customerName?: string
  email?: string
  stripePaymentIntentId?: string
  products: Array<{
    product: {
      _id: string
      _type: 'product'
      _createdAt: string
      _updatedAt: string
      _rev: string
      name?: string
      slug?: Slug
      price?: number
      abv?: number
      ingredients?: Array<string>
      description?: string
      image?: {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
      }
      stock?: number
      category?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'category'
      }
      manufacturer?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      collaborator?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      releaseDate?: string
      format?: 'Bottle' | 'Can'
      size?: number
      isFeatured?: boolean
    } | null
    quantity?: number
    _key: string
  }> | null
  totalPrice?: number
  currency?: string
  amountDiscount?: number
  status?: 'cancelled' | 'delivered' | 'paid' | 'pending' | 'shipped'
  orderDate?: string
}>

// Source: ./src/sanity/lib/events/getAllEvents.ts
// Variable: ALL_EVENTS_QUERY
// Query: *[_type == "event"] | order(startDate asc)
export type ALL_EVENTS_QUERYResult = Array<{
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  category?: 'meet-the-brewer' | 'other' | 'presentation' | 'tasting'
  summary?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  startDate?: string
  endDate?: string
  price?: number
  capacity?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}>

// Source: ./src/sanity/lib/orders/getAllOrders.tsx
// Variable: ALL_ORDERS_QUERY
// Query: *[_type == "order"] | order(orderDate desc) {      ...,      products[]{        ...,        product->      }    }
export type ALL_ORDERS_QUERYResult = Array<{
  _id: string
  _type: 'order'
  _createdAt: string
  _updatedAt: string
  _rev: string
  orderNumber?: string
  stripeCheckoutSessionId?: string
  stripeCustomerId?: string
  clerkUserId?: string
  customerName?: string
  email?: string
  stripePaymentIntentId?: string
  products: Array<{
    product: {
      _id: string
      _type: 'product'
      _createdAt: string
      _updatedAt: string
      _rev: string
      name?: string
      slug?: Slug
      price?: number
      abv?: number
      ingredients?: Array<string>
      description?: string
      image?: {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
      }
      stock?: number
      category?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'category'
      }
      manufacturer?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      collaborator?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      releaseDate?: string
      format?: 'Bottle' | 'Can'
      size?: number
      isFeatured?: boolean
    } | null
    quantity?: number
    _key: string
  }> | null
  totalPrice?: number
  currency?: string
  amountDiscount?: number
  status?: 'cancelled' | 'delivered' | 'paid' | 'pending' | 'shipped'
  orderDate?: string
}>

// Source: ./src/sanity/lib/orders/getMyOrders.tsx
// Variable: MY_ORDERS_QUERY
// Query: *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {      ...,      products[]{        ...,        product->      }    }
export type MY_ORDERS_QUERYResult = Array<{
  _id: string
  _type: 'order'
  _createdAt: string
  _updatedAt: string
  _rev: string
  orderNumber?: string
  stripeCheckoutSessionId?: string
  stripeCustomerId?: string
  clerkUserId?: string
  customerName?: string
  email?: string
  stripePaymentIntentId?: string
  products: Array<{
    product: {
      _id: string
      _type: 'product'
      _createdAt: string
      _updatedAt: string
      _rev: string
      name?: string
      slug?: Slug
      price?: number
      abv?: number
      ingredients?: Array<string>
      description?: string
      image?: {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
      }
      stock?: number
      category?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'category'
      }
      manufacturer?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      collaborator?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      releaseDate?: string
      format?: 'Bottle' | 'Can'
      size?: number
      isFeatured?: boolean
    } | null
    quantity?: number
    _key: string
  }> | null
  totalPrice?: number
  currency?: string
  amountDiscount?: number
  status?: 'cancelled' | 'delivered' | 'paid' | 'pending' | 'shipped'
  orderDate?: string
}>

// Source: ./src/sanity/lib/orders/getOrderById.tsx
// Variable: ORDER_QUERY
// Query: *[_type == "order" && orderNumber == $orderId][0] {      ...,      products[]{        ...,        product->      }    }
export type ORDER_QUERYResult = {
  _id: string
  _type: 'order'
  _createdAt: string
  _updatedAt: string
  _rev: string
  orderNumber?: string
  stripeCheckoutSessionId?: string
  stripeCustomerId?: string
  clerkUserId?: string
  customerName?: string
  email?: string
  stripePaymentIntentId?: string
  products: Array<{
    product: {
      _id: string
      _type: 'product'
      _createdAt: string
      _updatedAt: string
      _rev: string
      name?: string
      slug?: Slug
      price?: number
      abv?: number
      ingredients?: Array<string>
      description?: string
      image?: {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
      }
      stock?: number
      category?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'category'
      }
      manufacturer?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      collaborator?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'manufacturer'
      }
      releaseDate?: string
      format?: 'Bottle' | 'Can'
      size?: number
      isFeatured?: boolean
    } | null
    quantity?: number
    _key: string
  }> | null
  totalPrice?: number
  currency?: string
  amountDiscount?: number
  status?: 'cancelled' | 'delivered' | 'paid' | 'pending' | 'shipped'
  orderDate?: string
} | null

// Source: ./src/sanity/lib/orders/getOrdersCount.tsx
// Variable: ORDERS_COUNT_QUERY
// Query: count(*[_type == "order"])
export type ORDERS_COUNT_QUERYResult = number

// Source: ./src/sanity/lib/products/getAllCategories.ts
// Variable: ALL_CATEGORIES_QUERY
// Query: *[_type == "category"] | order(name asc) {      _id,      name,      "slug": slug.current,    }
export type ALL_CATEGORIES_QUERYResult = Array<{
  _id: string
  name: string | null
  slug: string | null
}>

// Source: ./src/sanity/lib/products/getFeaturedProducts.ts
// Variable: FEATURED_PRODUCTS_QUERY
// Query: *[_type == "product" && isFeatured][0...4] | order(name asc) {      _id,      name,      "slug": slug.current,      price,      image,      "manufacturer": manufacturer->name,      "style": category->name,    }
export type FEATURED_PRODUCTS_QUERYResult = Array<{
  _id: string
  name: string | null
  slug: string | null
  price: number | null
  image: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  manufacturer: string | null
  style: string | null
}>

// Source: ./src/sanity/lib/products/getProductBySlug.ts
// Variable: PRODUCT_BY_ID_QUERY
// Query: *[_type == "product" && slug.current == $slug] | order(name asc)[0]{      _id,      name,      description,      "slug": slug.current,      "manufacturer": manufacturer->{        name,         "slug": slug.current        },      "style": category->{        name,        "slug": slug.current      },      image,      price,      abv,      size,      format    }
export type PRODUCT_BY_ID_QUERYResult = {
  _id: string
  name: string | null
  description: string | null
  slug: string | null
  manufacturer: {
    name: string | null
    slug: string | null
  } | null
  style: {
    name: string | null
    slug: string | null
  } | null
  image: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  price: number | null
  abv: number | null
  size: number | null
  format: 'Bottle' | 'Can' | null
} | null

// Source: ./src/sanity/lib/products/getProductsByCategory.ts
// Variable: PRODUCT_BY_CATEGORY_QUERY
// Query: *[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)
export type PRODUCT_BY_CATEGORY_QUERYResult = Array<{
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  price?: number
  abv?: number
  ingredients?: Array<string>
  description?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  stock?: number
  category?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'category'
  }
  manufacturer?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'manufacturer'
  }
  collaborator?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'manufacturer'
  }
  releaseDate?: string
  format?: 'Bottle' | 'Can'
  size?: number
  isFeatured?: boolean
}>

// Source: ./src/sanity/lib/products/getProductsCount.ts
// Variable: PRODUCTS_COUNT_QUERY
// Query: count(*[_type == "product"])
export type PRODUCTS_COUNT_QUERYResult = number

// Source: ./src/sanity/lib/products/searchProductsByName.ts
// Variable: PRODUCT_SEARCH_QUERY
// Query: *[_type == "product" && name match $searchParam] | order(name asc)
export type PRODUCT_SEARCH_QUERYResult = Array<{
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  price?: number
  abv?: number
  ingredients?: Array<string>
  description?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  stock?: number
  category?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'category'
  }
  manufacturer?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'manufacturer'
  }
  collaborator?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'manufacturer'
  }
  releaseDate?: string
  format?: 'Bottle' | 'Can'
  size?: number
  isFeatured?: boolean
}>

// Source: ./src/sanity/lib/sales/getActiveSaleByCouponCode.ts
// Variable: ACTIVE_SALE_BY_COUPON_QUERY
// Query: *[      _type == "sale"      && isActive == true      && couponCode == $couponCode      ] | order(validFrom desc)[0]
export type ACTIVE_SALE_BY_COUPON_QUERYResult = {
  _id: string
  _type: 'sale'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  summary?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  discountAmount?: number
  couponCode?: string
  coverImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  validFrom?: string
  validUntil?: string
  isActive?: boolean
} | null

// Query TypeMap
import '@sanity/client'
declare module '@sanity/client' {
  interface SanityQueries {
    '\n    *[_type == "food"] | order(order asc) {\n      _id,\n      name,\n      description,\n      price\n    }\n  ': ALL_DISHES_QUERYResult
    '\n    *[_type == "tap"] | order(tapNumber asc) {\n      _id,\n      tapNumber,\n      beerName,\n      breweryName,\n      beerStyle,\n      abv,\n      halfPintPrice,\n      pintPrice\n    }\n  ': ALL_TAPS_QUERYResult
    '\n    *[_type == "category" && slug.current == $slug] | order(name asc)[0]\n  ': CATEGORY_BY_SLUG_QUERYResult
    '\n    *[_type == "order"] {\n      customerName,\n      email,\n      clerkUserId\n    }\n  ': ALL_CUSTOMERS_QUERYResult
    '\n    *[_type == "order" && clerkUserId == $customerId] | order(orderDate desc) {\n      ...,\n      products[]{\n        ...,\n        product->\n      }\n    }\n  ': CUSTOMER_ORDERS_QUERYResult
    '\n    *[_type == "event"] | order(startDate asc)\n  ': ALL_EVENTS_QUERYResult
    '\n    *[_type == "order"] | order(orderDate desc) {\n      ...,\n      products[]{\n        ...,\n        product->\n      }\n    }\n  ': ALL_ORDERS_QUERYResult
    '\n    *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {\n      ...,\n      products[]{\n        ...,\n        product->\n      }\n    }\n  ': MY_ORDERS_QUERYResult
    '\n    *[_type == "order" && orderNumber == $orderId][0] {\n      ...,\n      products[]{\n        ...,\n        product->\n      }\n    }\n  ': ORDER_QUERYResult
    '\n    count(*[_type == "order"])\n  ': ORDERS_COUNT_QUERYResult
    '\n    *[_type == "category"] | order(name asc) {\n      _id,\n      name,\n      "slug": slug.current,\n    }\n  ': ALL_CATEGORIES_QUERYResult
    '\n    *[_type == "product" && isFeatured][0...4] | order(name asc) {\n      _id,\n      name,\n      "slug": slug.current,\n      price,\n      image,\n      "manufacturer": manufacturer->name,\n      "style": category->name,\n    }\n  ': FEATURED_PRODUCTS_QUERYResult
    '\n    *[_type == "product" && slug.current == $slug] | order(name asc)[0]{\n      _id,\n      name,\n      description,\n      "slug": slug.current,\n      "manufacturer": manufacturer->{\n        name, \n        "slug": slug.current\n        },\n      "style": category->{\n        name,\n        "slug": slug.current\n      },\n      image,\n      price,\n      abv,\n      size,\n      format\n    }\n  ': PRODUCT_BY_ID_QUERYResult
    '\n    *[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)\n  ': PRODUCT_BY_CATEGORY_QUERYResult
    '\n    count(*[_type == "product"])\n  ': PRODUCTS_COUNT_QUERYResult
    '\n    *[_type == "product" && name match $searchParam] | order(name asc)\n  ': PRODUCT_SEARCH_QUERYResult
    '\n    *[\n      _type == "sale"\n      && isActive == true\n      && couponCode == $couponCode\n      ] | order(validFrom desc)[0]\n  ': ACTIVE_SALE_BY_COUPON_QUERYResult
  }
}
