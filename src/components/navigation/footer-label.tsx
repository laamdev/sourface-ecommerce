interface FooterLabelProps {
  text: string
}

export const FooterLabel = ({ text }: FooterLabelProps) => {
  return (
    <h3 className='font-serif text-xl font-bold uppercase text-white sm:text-3xl'>
      {text}
    </h3>
  )
}
