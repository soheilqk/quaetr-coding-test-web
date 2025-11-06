import { describe, it, expect } from 'vitest'
import { GET } from '../route'

describe('GET /api/companies', () => {
  it('should return 200 status', async () => {
    const response = await GET()
    expect(response.status).toBe(200)
  })

  it('should return companies data in correct format', async () => {
    const response = await GET()
    const data = await response.json()

    expect(data).toHaveProperty('data')
    expect(Array.isArray(data.data)).toBe(true)
    expect(data.data.length).toBeGreaterThan(0)
  })
})
