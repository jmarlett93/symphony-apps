import type Hapi from '@hapi/hapi';
import {
  apiInfoResponseSchema,
  healthLiveResponseSchema,
  healthReadyResponseSchema,
  type ApiInfoResponse,
  type HealthLiveResponse,
  type HealthReadyResponse,
} from 'http-contracts';

const healthPlugin: Hapi.Plugin<null> = {
  name: 'health',
  register: async (server) => {
    server.route({
      method: 'GET',
      path: '/health/live',
      options: { auth: false },
      handler: (): HealthLiveResponse =>
        healthLiveResponseSchema.parse({ status: 'ok' }),
    });

    server.route({
      method: 'GET',
      path: '/health/ready',
      options: { auth: false },
      handler: (): HealthReadyResponse =>
        healthReadyResponseSchema.parse({ status: 'ready' }),
    });
  },
};

const v1Plugin: Hapi.Plugin<null> = {
  name: 'v1',
  register: async (server) => {
    server.route({
      method: 'GET',
      path: '/v1',
      options: { auth: false },
      handler: (): ApiInfoResponse =>
        apiInfoResponseSchema.parse({
          name: 'breaktimerr-api',
          version: '0.0.0',
        }),
    });
  },
};

export const registerHttpApi = async (server: Hapi.Server): Promise<void> => {
  await server.register([healthPlugin, v1Plugin]);
};
