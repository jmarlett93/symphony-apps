import { defineConfig } from 'vitest/config';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      'cors-helpers': resolve(root, '../cors-helpers/src/index.ts'),
      'http-contracts': resolve(
        root,
        '../../../shared/models/http-contracts/src/index.ts',
      ),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.spec.ts'],
  },
});
