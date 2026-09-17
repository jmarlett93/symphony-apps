import Boom from '@hapi/boom';
import Hapi from '@hapi/hapi';
import {
  CORS_ALLOW_HEADERS,
  CORS_EXPOSE_HEADERS,
  addCorsHeaders,
} from 'cors-helpers';
import { problemDetailsSchema } from 'http-contracts';
import { problemFromBoom } from './problem-response';

const DEFAULT_CORS_ORIGINS = ['http://localhost:2211'];

const resolveCorsOrigins = (origins?: string[]): string[] => {
  if (origins && origins.length > 0) {
    return origins;
  }

  const fromEnv = process.env['ALLOWED_ORIGINS']
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_CORS_ORIGINS;
};

export type CreateServerOptions = {
  host?: string;
  port?: number;
  /** Allowed browser origins for Hapi CORS / preflight. Defaults to ALLOWED_ORIGINS or localhost:2211. */
  corsOrigins?: string[];
};

export const createServer = async (
  options: CreateServerOptions = {},
): Promise<Hapi.Server> => {
  const corsOrigins = resolveCorsOrigins(options.corsOrigins);

  const server = Hapi.server({
    host: options.host ?? '0.0.0.0',
    port: options.port ?? 2212,
    routes: {
      cors: {
        origin: corsOrigins,
        credentials: true,
        headers: CORS_ALLOW_HEADERS.split(', '),
        exposedHeaders: CORS_EXPOSE_HEADERS.split(', '),
      },
      validate: {
        failAction: async (_request, _h, error) => {
          throw error;
        },
      },
    },
  });

  server.ext('onPreResponse', (request, h) => {
    const response = request.response;

    if (Boom.isBoom(response)) {
      const status = response.output.statusCode;
      const data = response.data;
      const parsedData = problemDetailsSchema.safeParse(data);
      const problem = parsedData.success
        ? {
            ...parsedData.data,
            reference: parsedData.data.reference ?? request.info.id,
          }
        : problemFromBoom(
            status,
            response.message || 'Request failed',
            status >= 500 ? 'internal_error' : 'http_error',
            request.info.id,
          );

      return addCorsHeaders(
        h
          .response(problem)
          .type('application/problem+json')
          .code(problem.status),
        request,
      );
    }

    if (response && typeof response === 'object' && 'header' in response) {
      return addCorsHeaders(response, request);
    }

    return h.continue;
  });

  return server;
};
