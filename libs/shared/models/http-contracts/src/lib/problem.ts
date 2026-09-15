import { z } from 'zod';

export const fieldErrorSchema = z
  .object({
    path: z.string().min(1).max(200),
    message: z.string().min(1).max(500),
  })
  .strict();

export const problemDetailsSchema = z
  .object({
    type: z.string().min(1).max(200),
    title: z.string().min(1).max(200),
    status: z.number().int().min(400).max(599),
    code: z.string().min(1).max(100),
    reference: z.string().min(1).max(100).optional(),
    errors: z.array(fieldErrorSchema).max(50).optional(),
  })
  .strict();

export type FieldError = z.infer<typeof fieldErrorSchema>;
export type ProblemDetails = z.infer<typeof problemDetailsSchema>;
