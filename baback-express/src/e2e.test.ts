import {describe, expect, it} from '@jest/globals';

describe('Health check', () => {
    it('should return 200', async () => {
        const response = await fetch('http://localhost:3000');
        expect(response.status).toBe(200);
    });
});