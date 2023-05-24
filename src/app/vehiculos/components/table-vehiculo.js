import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge
} from '@tremor/react'

export default function TableVehiculo () {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Registro de salida</TableHeaderCell>
          <TableHeaderCell>Registro de entrada</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow>
            <TableCell>
              <Badge color="emerald">
                2016-12-12 12:12:12
              </Badge>
            </TableCell>
            <TableCell>
              <Badge color="emerald">
                2016-12-12 12:12:12
              </Badge>
            </TableCell>
          </TableRow>
      </TableBody>
    </Table>
  )
}
