import { getAllDishes } from '@/sanity/lib/bar/getAllDishes'

import { FoodItem } from '@/components/bar/food-item'

export const FoodMenu = async () => {
  const dishes = await getAllDishes()
  return (
    <div className='flex flex-col gap-y-8'>
      {dishes.map(dish => (
        // @ts-expect-error
        <FoodItem key={dish._id} dish={dish} />
      ))}
    </div>
  )
}
