import { Spinner } from '@phosphor-icons/react/dist/ssr'

export const Loader = () => {
  return (
    <div role='status'>
      <Spinner className='animate-spin' />
    </div>
  )
}
