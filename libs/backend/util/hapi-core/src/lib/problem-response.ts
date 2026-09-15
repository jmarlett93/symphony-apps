import type { ZodError } from 'zod';
import type { FieldError, ProblemDetails } from 'http-contracts';

export const problemFromZodError = (
  error: ZodError,
  reference?: string,
): ProblemDetails => {
  const errors: FieldError[] = error.issues.slice(0, 50).map((issue) => ({
    path: issue.path.length > 0 ? issue.path.join('.') : '(root)',
    message: issue.message,
  }));

  return {
    type: 'about:blank',
    title: 'Bad Request',
    status: 400,
    code: 'validation_failed',
    ...(reference ? { reference } : {}),
    errors,
  };
};

export const problemFromBoom = (
  statusCode: number,
  title: string,
  code: string,
  reference?: string,
): ProblemDetails => ({
  type: 'about:blank',
  title,
  status: statusCode,
  code,
  ...(reference ? { reference } : {}),
});
