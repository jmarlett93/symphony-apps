import { describe, expect, it } from 'vitest';
import { problemDetailsSchema } from './problem';

describe('problemDetailsSchema', () => {
  it('accepts a valid problem document', () => {
    const parsed = problemDetailsSchema.safeParse({
      type: 'about:blank',
      title: 'Bad Request',
      status: 400,
      code: 'validation_failed',
      reference: 'req_1',
      errors: [{ path: 'email', message: 'Required' }],
    });

    expect(parsed.success).toBe(true);
  });

  it('rejects unknown properties', () => {
    const parsed = problemDetailsSchema.safeParse({
      type: 'about:blank',
      title: 'Bad Request',
      status: 400,
      code: 'validation_failed',
      secret: 'nope',
    });

    expect(parsed.success).toBe(false);
  });
});
