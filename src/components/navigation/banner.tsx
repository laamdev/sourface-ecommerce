export const Banner = () => {
  return (
    <div className='flex w-full items-center justify-center gap-x-6 bg-foreground px-6 py-2.5 sm:px-3.5'>
      <p className='text-xs text-white sm:text-sm/6'>
        {/* <strong className='font-semibold'>Pedidos</strong> */}
        {/* <svg
          viewBox='0 0 2 2'
          aria-hidden='true'
          className='mx-2 inline h-0.5 w-0.5 fill-current'
        >
          <circle r={1} cx={1} cy={1} />
        </svg> */}
        {`📦 Orders can be picked at the store during opening hours.`}
      </p>
    </div>
  )
}
