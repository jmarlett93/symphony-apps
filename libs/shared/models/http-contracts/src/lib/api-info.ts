import { z } from 'zod';

export const apiInfoResponseSchema = z
  .object({
    name: z.literal('breaktimerr-api'),
    version: z.string().min(1).max(32),
  })
  .strict();

export type ApiInfoResponse = z.infer<typeof apiInfoResponseSchema>;
