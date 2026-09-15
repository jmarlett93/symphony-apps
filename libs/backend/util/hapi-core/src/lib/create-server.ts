import Boom from '@hapi/boom';
import Hapi from '@hapi/hapi';
import { problemDetailsSchema } from 'http-contracts';
import { problemFromBoom } from './problem-response';

export type CreateServerOptions = {
  host?: string;
  port?: number;
};

export const createServer = async (
  options: CreateServerOptions = {},
): Promise<Hapi.Server> => {
  const server = Hapi.server({
    host: options.host ?? '0.0.0.0',
    port: options.port ?? 2212,
    routes: {
      validate: {
        failAction: async (_request, _h, error) => {
          throw error;
        },
      },
    },
  });

  server.ext('onPreResponse', (request, h) => {
    const response = request.response;

    if (!Boom.isBoom(response)) {
      return h.continue;
    }

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

    return h
      .response(problem)
      .type('application/problem+json')
      .code(problem.status);
  });

  return server;
};
