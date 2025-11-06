import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CompanyHeader } from '../CompanyHeader'
import { mockCompany } from '@/__tests__/fixtures/mock-company'

describe('CompanyHeader', () => {
  it('should render company name and description', () => {
    render(<CompanyHeader company={mockCompany} />)

    expect(screen.getByText('Test Company AS')).toBeInTheDocument()
    expect(screen.getByText('This is a test company description')).toBeInTheDocument()
  })

  it('should render company info links', () => {
    render(<CompanyHeader company={mockCompany} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', 'https://test.com')
    expect(links[1]).toHaveAttribute('href', 'https://test.com/investor')
  })
})
