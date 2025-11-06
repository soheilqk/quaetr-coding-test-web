import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from '../Header'

describe('Header', () => {
  it('should render Quartr branding', () => {
    render(<Header />)

    expect(screen.getByText('Quartr')).toBeInTheDocument()
  })

  it('should render as sticky header', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toHaveClass('sticky')
  })
})
