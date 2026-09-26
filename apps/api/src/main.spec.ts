import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type Hapi from '@hapi/hapi';
import { createServer } from 'hapi-core';
import { healthPlugin, v1Plugin } from 'http-api';

describe('api routes', () => {
  let server: Hapi.Server;

  beforeAll(async () => {
    server = await createServer({ host: '127.0.0.1', port: 0 });
    await server.register([healthPlugin, v1Plugin]);
    await server.initialize();
  });

  afterAll(async () => {
    await server.stop();
  });

  it('returns live health', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/health/live',
    });
    expect(response.statusCode).toBe(200);
    expect(response.result).toEqual({ status: 'ok' });
  });

  it('returns ready health', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/health/ready',
    });
    expect(response.statusCode).toBe(200);
    expect(response.result).toEqual({ status: 'ready' });
  });

  it('returns api info under /v1', async () => {
    const response = await server.inject({ method: 'GET', url: '/v1' });
    expect(response.statusCode).toBe(200);
    expect(response.result).toEqual({
      name: 'breaktimerr-api',
      version: '0.0.0',
    });
  });

  it('reflects CORS headers for browser Origin', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/health/live',
      headers: { origin: 'http://localhost:2211' },
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers['access-control-allow-origin']).toBe(
      'http://localhost:2211',
    );
    expect(response.headers['access-control-allow-credentials']).toBe('true');
  });
});
