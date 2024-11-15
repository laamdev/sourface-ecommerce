interface FooterWrapperProps {
  children: React.ReactNode
}

export const FooterWrapper = ({ children }: FooterWrapperProps) => {
  return <div className='flex flex-col gap-y-2 sm:gap-y-4'>{children}</div>
}
