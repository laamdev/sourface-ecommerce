import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { productType } from './productType'
import { manufacturerType } from './manufacturerType'
import { orderType } from './orderType'
import { salesType } from './salesType'
import { tapType } from './tapType'
import { foodType } from './foodType'
import { eventType } from './eventType'
import { personType } from './personType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    orderType,
    productType,
    manufacturerType,
    salesType,
    tapType,
    foodType,
    eventType,
    personType
  ]
}
