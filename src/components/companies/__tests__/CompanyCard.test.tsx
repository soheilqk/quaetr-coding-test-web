import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CompanyCard } from '../CompanyCard'
import { mockCompany } from '@/__tests__/fixtures/mock-company'

describe('CompanyCard', () => {
  it('should render company name', () => {
    render(<CompanyCard company={mockCompany} />)

    expect(screen.getByText('Test Company AS')).toBeInTheDocument()
  })

  it('should render company description', () => {
    render(<CompanyCard company={mockCompany} />)

    expect(screen.getByText('This is a test company description')).toBeInTheDocument()
  })

  it('should render company logo with alt text', () => {
    render(<CompanyCard company={mockCompany} />)

    const logo = screen.getByAltText('Test Company AS logo')
    expect(logo).toBeInTheDocument()
  })

  it('should have correct link href', () => {
    render(<CompanyCard company={mockCompany} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/companies/1')
  })

  it('should render chevron icon', () => {
    render(<CompanyCard company={mockCompany} />)

    // Check for svg icon (ChevronRight)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <CompanyCard company={mockCompany} className="custom-class" />
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should truncate long company names', () => {
    const longNameCompany = {
      ...mockCompany,
      displayName: 'Very Long Company Name That Should Be Truncated',
    }

    render(<CompanyCard company={longNameCompany} />)

    const nameElement = screen.getByText(longNameCompany.displayName)
    expect(nameElement).toHaveClass('truncate')
  })

  it('should line-clamp long descriptions', () => {
    const longDescCompany = {
      ...mockCompany,
      description: 'This is a very long description '.repeat(10),
    }

    render(<CompanyCard company={longDescCompany} />)

    // Use substring match since text might be clamped
    const descElement = screen.getByText(/This is a very long description/i)
    expect(descElement).toHaveClass('line-clamp-1')
  })
})
