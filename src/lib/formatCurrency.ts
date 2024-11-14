export const formatCurrency = (
  amount: number,
  currencyCode: string = 'EUR'
) => {
  try {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currencyCode.toUpperCase()
    }).format(amount)
  } catch (e) {
    console.error('Error formatting currency', e)
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`
  }
}
