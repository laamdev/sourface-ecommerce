interface AdminConatinerProps {
  children: React.ReactNode
}

export const AdminContainer = ({ children }: AdminConatinerProps) => {
  return (
    <div className='mx-auto flex w-full max-w-5xl flex-col py-8 sm:py-16'>
      {children}
    </div>
  )
}
