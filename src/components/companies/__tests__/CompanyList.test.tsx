import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CompanyList } from '../CompanyList'
import { mockCompany } from '@/__tests__/fixtures/mock-company'

describe('CompanyList', () => {
  it('should render list title and companies', () => {
    render(<CompanyList companies={[mockCompany]} title="Test Companies" />)

    expect(screen.getByText('Test Companies')).toBeInTheDocument()
    expect(screen.getByText('Test Company AS')).toBeInTheDocument()
  })

  it('should render empty state when no companies', () => {
    render(<CompanyList companies={[]} />)

    expect(screen.getByText('No companies found')).toBeInTheDocument()
    expect(screen.queryByText('Test Company AS')).not.toBeInTheDocument()
  })
})
