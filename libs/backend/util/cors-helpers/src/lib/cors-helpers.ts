import type { Request, ResponseObject } from '@hapi/hapi';

/** Browser-visible request headers for BreakTimerr (cookies + idempotent mutations). */
export const CORS_ALLOW_HEADERS =
  'Accept, Authorization, Content-Type, Idempotency-Key, If-Match';

export const CORS_EXPOSE_HEADERS = 'Authorization';

/**
 * Reflect CORS on a Hapi response when the request carries Origin.
 * Needed for Boom/error paths under API Gateway, where success CORS may
 * already be handled at the edge but Hapi still owns error responses.
 */
export const addCorsHeaders = (
  response: ResponseObject,
  request: Request,
): ResponseObject => {
  const rawOrigin = request.headers['origin'];
  const origin = Array.isArray(rawOrigin) ? rawOrigin[0] : rawOrigin;

  if (origin) {
    response.header('Access-Control-Allow-Origin', origin);
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header('Access-Control-Allow-Headers', CORS_ALLOW_HEADERS);
    response.header('Access-Control-Expose-Headers', CORS_EXPOSE_HEADERS);
  }

  return response;
};
