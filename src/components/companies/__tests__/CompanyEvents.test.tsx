import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CompanyEvents } from '../CompanyEvents'
import { mockCompany } from '@/__tests__/fixtures/mock-company'

describe('CompanyEvents', () => {
  it('should render event information', () => {
    render(<CompanyEvents events={mockCompany.events} />)

    expect(screen.getByText('Q4 2024 Earnings Release')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('should show empty state when no events', () => {
    render(<CompanyEvents events={[]} />)

    expect(screen.getByText(/No events available/i)).toBeInTheDocument()
  })
})
