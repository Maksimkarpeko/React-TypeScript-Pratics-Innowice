import { z } from 'zod'

export const schema = z.object({
  username: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email().optional(),
  password: z.string().min(3, { message: 'Password must be at least 3 characters long' }),
})

export type AuthFormFields = z.infer<typeof schema>
