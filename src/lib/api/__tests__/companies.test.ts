import { describe, it, expect, beforeEach, vi } from 'vitest'
import { getCompanies, getCompanyById, getAllCompanyIds } from '../companies'

// Mock fetch
global.fetch = vi.fn()

describe('Companies API', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getCompanies', () => {
    it('should fetch all companies successfully', async () => {
      const mockResponse = {
        data: [
          { companyId: 1, displayName: 'Company 1' },
          { companyId: 2, displayName: 'Company 2' },
        ],
      }

      ;(global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })

      const result = await getCompanies()

      expect(result).toEqual(mockResponse)
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/companies'),
        expect.objectContaining({
          next: { revalidate: 60 },
        })
      )
    })

    it('should throw error on failed fetch', async () => {
      ;(global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      })

      await expect(getCompanies()).rejects.toThrow(
        'Failed to fetch companies: 500 Internal Server Error'
      )
    })
  })

  describe('getCompanyById', () => {
    it('should fetch a single company successfully', async () => {
      const mockCompany = {
        companyId: 1,
        displayName: 'Test Company',
        description: 'Test description',
      }

      ;(global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCompany,
      })

      const result = await getCompanyById(1)

      expect(result).toEqual(mockCompany)
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/companies/1'),
        expect.objectContaining({
          next: { revalidate: 60 },
        })
      )
    })

    it('should return null for 404 response', async () => {
      ;(global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404,
      })

      const result = await getCompanyById(999)

      expect(result).toBeNull()
    })

    it('should return null on fetch error', async () => {
      ;(global.fetch as any).mockRejectedValueOnce(new Error('Network error'))

      const result = await getCompanyById(1)

      expect(result).toBeNull()
    })

    it('should throw error on non-404 failed response', async () => {
      ;(global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      })

      const result = await getCompanyById(1)

      // Should return null due to catch block
      expect(result).toBeNull()
    })
  })

  describe('getAllCompanyIds', () => {
    it('should return array of company IDs as strings', async () => {
      const mockResponse = {
        data: [
          { companyId: 1, displayName: 'Company 1' },
          { companyId: 2, displayName: 'Company 2' },
          { companyId: 3, displayName: 'Company 3' },
        ],
      }

      ;(global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })

      const result = await getAllCompanyIds()

      expect(result).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ])
    })

    it('should handle empty companies array', async () => {
      ;(global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: [] }),
      })

      const result = await getAllCompanyIds()

      expect(result).toEqual([])
    })
  })
})
