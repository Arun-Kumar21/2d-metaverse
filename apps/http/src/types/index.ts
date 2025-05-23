import * as z from 'zod'

export const SignupSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
  type: z.enum(["Admin", "User"])
})

export const SigninSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8)
}) 

export const UpdateMetadataSchema = z.object({
  avatarId: z.string()
})

export const CreateSpaceSchema = z.object({
  name: z.string().min(3),
  dimensions: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}&/),
  mapId: z.string(),
})

export const AddElementSchema = z.object({
  spaceId: z.string(),
  elementId: z.string(),
  x: z.number(),
  y: z.number()
})

export const DeleteElementSchema = z.object({
  id: z.string()
})

export const CreateElementSchema = z.object({
  imageUrl: z.string(),
  width: z.number(),
  height: z.number(),
  static: z.boolean()
})

export const UpdateElementSchema = z.object({
  imageUrl: z.string()
})

export const CreateAvatarSchema = z.object({
  name: z.string(),
  imageUrl: z.string(),
})

export const CreateMapSchema = z.object({
  name: z.string(),
  thumbnail: z.string(),
  dimension: z.string().regex(/^[0-9]{1-4}x[0-9]{1-4}&/),
  defaultElements: z.array(z.object({
    elementId: z.string(),
    x: z.number(),
    y: z.number()
  }))
})

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}