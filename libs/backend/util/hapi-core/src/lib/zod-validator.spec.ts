import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import Boom from '@hapi/boom';
import { zodValidator } from './zod-validator';

describe('zodValidator', () => {
  const schema = z
    .object({
      email: z.email().max(320),
    })
    .strict();

  it('returns parsed values', async () => {
    const validate = zodValidator(schema);
    await expect(
      validate({ email: 'host@example.com' }, {}),
    ).resolves.toEqual({ email: 'host@example.com' });
  });

  it('throws Boom with problem details on invalid input', async () => {
    const validate = zodValidator(schema);

    await expect(validate({ email: 'nope' }, {})).rejects.toSatisfy(
      (error: unknown) => {
        expect(Boom.isBoom(error)).toBe(true);
        if (!Boom.isBoom(error)) {
          return false;
        }
        expect(error.data).toMatchObject({
          code: 'validation_failed',
          status: 400,
        });
        return true;
      },
    );
  });
});
