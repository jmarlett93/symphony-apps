import { z } from 'zod';

export const healthLiveResponseSchema = z
  .object({
    status: z.literal('ok'),
  })
  .strict();

export const healthReadyResponseSchema = z
  .object({
    status: z.literal('ready'),
  })
  .strict();

export type HealthLiveResponse = z.infer<typeof healthLiveResponseSchema>;
export type HealthReadyResponse = z.infer<typeof healthReadyResponseSchema>;
