import { Food } from 'sanity.types'

interface FoodItemProps {
  dish: Food
}

export const FoodItem = ({ dish }: FoodItemProps) => {
  return (
    <div className='flex items-center justify-between gap-x-8'>
      <div>
        <h2 className='text-3xl font-bold uppercase tracking-tighter'>
          {dish.name}
        </h2>
        <p className='text-xl text-zinc-700'>{dish.description}</p>
      </div>
      <h3 className='text-3xl font-bold'>{`${dish.price?.toFixed(2)}€`}</h3>
    </div>
  )
}
