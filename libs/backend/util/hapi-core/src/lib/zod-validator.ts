import Boom from '@hapi/boom';
import type { z } from 'zod';
import { problemFromZodError } from './problem-response';

type ValidatorOptions = {
  context?: Record<string, unknown>;
};

export const zodValidator = <TSchema extends z.ZodType>(schema: TSchema) => {
  return async (
    value: unknown,
    options: ValidatorOptions = {},
  ): Promise<z.infer<TSchema>> => {
    const parsed = await schema.safeParseAsync(value);

    if (!parsed.success) {
      const reference =
        typeof options.context?.['requestId'] === 'string'
          ? options.context['requestId']
          : undefined;
      const problem = problemFromZodError(parsed.error, reference);
      throw Boom.badRequest(problem.title, problem);
    }

    return parsed.data;
  };
};
