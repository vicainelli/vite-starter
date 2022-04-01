import { hashid } from './hashid'
import { describe, expect, it } from 'vitest'

describe('hashid', () => {
  it('return random string length 8', async () => {
    expect(hashid().length).toBe(8)
  })
  it('return random string length 4', async () => {
    expect(hashid(4).length).toBe(4)
  })
});