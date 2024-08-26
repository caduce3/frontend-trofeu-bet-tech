import { z } from 'zod'

const envShcema = z.object({
    VITE_API_URL: z.string().url(),
})

export const env = envShcema.parse(import.meta.env)