import { defineConfig } from 'vitest/config';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      'cors-helpers': resolve(
        root,
        '../../libs/backend/util/cors-helpers/src/index.ts',
      ),
      'http-contracts': resolve(
        root,
        '../../libs/shared/models/http-contracts/src/index.ts',
      ),
      'hapi-core': resolve(
        root,
        '../../libs/backend/util/hapi-core/src/index.ts',
      ),
      'http-api': resolve(
        root,
        '../../libs/backend/feature/http-api/src/index.ts',
      ),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.spec.ts'],
  },
});
