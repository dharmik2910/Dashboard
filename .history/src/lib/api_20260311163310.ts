export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  birthDate: string
  age: number
}

export interface TableData {
  id: number
  name: string
  email: string
  phone: string
  birthDate: string
  age: string
}

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://dummyjson.com/users?limit=100", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch users")
  }

  const { users } = await res.json()
  return users
}

export async function transformUsersToTableData(
  users: User[]
): Promise<TableData[]> {
  return users.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    phone: user.phone,
    birthDate: user.birthDate,
    age: user.age.toString(),
  }))
}

export async function getTableData(): Promise<TableData[]> {
  const users = await getUsers()
  return transformUsersToTableData(users)
}
