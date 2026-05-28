export type User = {
  id: number
  email: string
  role: string
  username: string
  age: number
  gender: string
  lastName: string
  firstName: string
}

export type ResponseType<T, Key extends string = 'data'> = {
  limit: number
  skip: number
  total: number
} & {
  [K in Key]: T[]
}
