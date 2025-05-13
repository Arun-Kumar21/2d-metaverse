import * as z from 'zod';

export const signinSchema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
})

export const signupSchema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }), 
})