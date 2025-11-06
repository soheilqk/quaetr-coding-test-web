import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CompanyLogo } from '../CompanyLogo'

describe('CompanyLogo', () => {
  const mockProps = {
    logoLightUrl: 'https://example.com/logo-light.png',
    logoDarkUrl: 'https://example.com/logo-dark.png',
    alt: 'Test Company Logo',
  }

  it('should render logo with alt text', () => {
    render(<CompanyLogo {...mockProps} />)

    const logo = screen.getByAltText('Test Company Logo')
    expect(logo).toBeInTheDocument()
  })

  it('should apply correct size class', () => {
    const { container, rerender } = render(<CompanyLogo {...mockProps} size="lg" />)

    expect(container.firstChild).toHaveClass('h-20 w-20')

    rerender(<CompanyLogo {...mockProps} size="sm" />)
    expect(container.firstChild).toHaveClass('h-12 w-12')
  })
})
