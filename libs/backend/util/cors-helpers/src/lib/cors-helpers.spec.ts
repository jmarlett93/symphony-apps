import type { Request, ResponseObject } from '@hapi/hapi';
import { describe, expect, it, vi } from 'vitest';
import { CORS_ALLOW_HEADERS, addCorsHeaders } from './cors-helpers';

describe('addCorsHeaders', () => {
  it('sets CORS headers when Origin is present', () => {
    const header = vi.fn();
    const response = { header } as unknown as ResponseObject;
    const request = {
      headers: { origin: 'https://app.example' },
    } as unknown as Request;

    const out = addCorsHeaders(response, request);

    expect(out).toBe(response);
    expect(header).toHaveBeenCalledWith(
      'Access-Control-Allow-Origin',
      'https://app.example',
    );
    expect(header).toHaveBeenCalledWith(
      'Access-Control-Allow-Credentials',
      'true',
    );
    expect(header).toHaveBeenCalledWith(
      'Access-Control-Allow-Headers',
      CORS_ALLOW_HEADERS,
    );
  });

  it('leaves response unchanged when Origin is missing', () => {
    const header = vi.fn();
    const response = { header } as unknown as ResponseObject;
    const request = { headers: {} } as unknown as Request;

    addCorsHeaders(response, request);

    expect(header).not.toHaveBeenCalled();
  });
});
