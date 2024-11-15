import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { getAllTaps } from '@/sanity/lib/bar/getAllTaps'

export const TapsMenu = async () => {
  const taps = await getAllTaps()

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Tap</TableHead>
          <TableHead>Beer</TableHead>
          <TableHead>Brewery</TableHead>
          <TableHead>Style</TableHead>
          <TableHead>ABV</TableHead>
          <TableHead className='text-right'>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {taps.map(tap => (
          <TableRow key={tap._id}>
            <TableCell className='font-serif text-lg font-bold uppercase sm:text-3xl'>
              #0{tap.tapNumber}
            </TableCell>
            <TableCell className='text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
              {tap.beerName}
            </TableCell>
            <TableCell className='text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
              {tap.breweryName}
            </TableCell>
            <TableCell className='text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
              {tap.beerStyle}
            </TableCell>
            <TableCell className='text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
              {tap.abv}%
            </TableCell>
            <TableCell className='text-right text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
              {tap.halfPintPrice!.toFixed(2)}€ / €{tap.pintPrice!.toFixed(2)}€
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
