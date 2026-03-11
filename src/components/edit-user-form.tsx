"use client"

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { type User } from "@/lib/api"

export function EditUserFields({ user }: { user: User }) {
  return (
    <div className="grid gap-4">
      <Field>
        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
        <Input id="firstName" defaultValue={user.firstName} />
      </Field>
      <Field>
        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
        <Input id="lastName" defaultValue={user.lastName} />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" defaultValue={user.email} />
      </Field>
      <Field>
        <FieldLabel htmlFor="phone">Phone</FieldLabel>
        <Input id="phone" defaultValue={user.phone} />
      </Field>
    </div>
  )
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original
      return (
        <Button
          onClick={() => {
            console.log("Edit user:", user)
          }}
        >
          Edit
        </Button>
      )
    },
  },
]

export function UserTable({ data }: { data: User[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}