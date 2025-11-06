import { describe, it, expect } from 'vitest'
import { GET } from '../[id]/route'

describe('GET /api/companies/[id]', () => {
  it('should return company for valid ID', async () => {
    const mockRequest = new Request('http://localhost:3000/api/companies/1')
    const mockContext = {
      params: Promise.resolve({ id: '1' }),
    }

    const response = await GET(mockRequest, mockContext)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toHaveProperty('companyId', 1)
    expect(data).toHaveProperty('displayName')
    expect(data).toHaveProperty('description')
  })

  it('should return 404 for non-existent company', async () => {
    const mockRequest = new Request('http://localhost:3000/api/companies/999')
    const mockContext = {
      params: Promise.resolve({ id: '999' }),
    }

    const response = await GET(mockRequest, mockContext)
    const data = await response.json()

    expect(response.status).toBe(404)
    expect(data).toHaveProperty('error', 'Company not found')
  })

  it('should return 400 for invalid ID format', async () => {
    const mockRequest = new Request('http://localhost:3000/api/companies/invalid')
    const mockContext = {
      params: Promise.resolve({ id: 'invalid' }),
    }

    const response = await GET(mockRequest, mockContext)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data).toHaveProperty('error', 'Invalid company ID')
  })

  it('should include proper cache headers', async () => {
    const mockRequest = new Request('http://localhost:3000/api/companies/1')
    const mockContext = {
      params: Promise.resolve({ id: '1' }),
    }

    const response = await GET(mockRequest, mockContext)

    expect(response.headers.get('Cache-Control')).toContain('public')
    expect(response.headers.get('Cache-Control')).toContain('s-maxage=60')
  })

  it('should return all company properties', async () => {
    const mockRequest = new Request('http://localhost:3000/api/companies/1')
    const mockContext = {
      params: Promise.resolve({ id: '1' }),
    }

    const response = await GET(mockRequest, mockContext)
    const data = await response.json()

    // Verify essential company properties exist
    expect(data).toHaveProperty('companyId')
    expect(data).toHaveProperty('companyName')
    expect(data).toHaveProperty('displayName')
    expect(data).toHaveProperty('description')
    expect(data).toHaveProperty('logoLightUrl')
    expect(data).toHaveProperty('logoDarkUrl')
    expect(data).toHaveProperty('events')
  })
})
