import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Title,
  Badge
} from '@tremor/react'

export default function EntradaSalida () {
  return (
    <Card>
      <Title className='flex justify-between'>Entrada - Salida</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Número económico</TableHeaderCell>
            <TableHeaderCell>Entrada</TableHeaderCell>
            <TableHeaderCell>Salida</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>Toyota</TableCell>
              <TableCell>
                <Badge color="emerald">
                  hola
                </Badge>
              </TableCell>
              <TableCell>
                <Badge color="emerald">
                  hola
                </Badge>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
