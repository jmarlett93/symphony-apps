import { createServer } from 'hapi-core';
import { healthPlugin, v1Plugin } from 'http-api';

const host = process.env['HOST'] ?? '0.0.0.0';
const port = Number(process.env['PORT'] ?? 2212);

const start = async () => {
  const server = await createServer({ host, port });
  await server.register([healthPlugin, v1Plugin]);
  await server.start();
  console.log(`API listening on ${server.info.uri}`);
};

start().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
