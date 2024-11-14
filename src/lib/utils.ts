import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getFormattedDate = (date: string) => {
  const formattedDate = format(new Date(date), 'EEEE, MMM d, yyyy', {
    locale: enGB
  })

  return formattedDate
}

export const getFormattedCurrency = (
  amount: number,
  currencyCode: string = 'EUR'
) => {
  try {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currencyCode.toUpperCase()
    }).format(amount)
  } catch (e) {
    console.error('Error formatting currency', e)
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`
  }
}
