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
          <TableHead className='w-[100px]'>tap number</TableHead>
          <TableHead>beer & brewery name</TableHead>
          <TableHead>beer style</TableHead>
          <TableHead>ABV</TableHead>
          <TableHead className='text-right'>half pint / pint</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {taps.map(tap => (
          <TableRow key={tap._id}>
            <TableCell className='font-serif text-3xl font-bold uppercase'>
              #0{tap.tapNumber}
            </TableCell>
            <TableCell className='flex flex-col'>
              <span className='text-3xl font-bold uppercase tracking-tighter'>
                {tap.beerName}
              </span>
              <span className='text-xl font-medium text-zinc-700'>
                {tap.breweryName}
              </span>
            </TableCell>
            <TableCell className='text-3xl font-bold uppercase tracking-tighter'>
              {tap.beerStyle}
            </TableCell>
            <TableCell className='text-3xl font-bold uppercase tracking-tighter'>
              {tap.abv}%
            </TableCell>
            <TableCell className='text-right text-3xl font-bold uppercase tracking-tighter'>
              {tap.halfPintPrice!.toFixed(2)}€ / €{tap.pintPrice!.toFixed(2)}€
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
