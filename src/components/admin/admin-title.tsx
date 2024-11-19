interface AdminTitleProps {
  text: string
}

export default function AdminTitle({ text }: AdminTitleProps) {
  return <h1 className='font-serif text-5xl font-bold'>{text}</h1>
}
