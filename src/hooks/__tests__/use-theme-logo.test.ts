import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useThemeLogo } from '../use-theme-logo'
import * as NextThemes from 'next-themes'

describe('useThemeLogo', () => {
  const lightLogoUrl = 'https://example.com/logo-light.png'
  const darkLogoUrl = 'https://example.com/logo-dark.png'

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return dark logo URL in light theme', () => {
    vi.spyOn(NextThemes, 'useTheme').mockReturnValue({
      resolvedTheme: 'light',
    } as any)

    const { result } = renderHook(() =>
      useThemeLogo(lightLogoUrl, darkLogoUrl)
    )

    expect(result.current).toBe(darkLogoUrl)
  })

  it('should return light logo URL in dark theme', () => {
    vi.spyOn(NextThemes, 'useTheme').mockReturnValue({
      resolvedTheme: 'dark',
    } as any)

    const { result } = renderHook(() =>
      useThemeLogo(lightLogoUrl, darkLogoUrl)
    )

    expect(result.current).toBe(lightLogoUrl)
  })

  it('should return dark logo URL when not mounted', () => {
    vi.spyOn(NextThemes, 'useTheme').mockReturnValue({
      resolvedTheme: undefined,
    } as any)

    const { result } = renderHook(() =>
      useThemeLogo(lightLogoUrl, darkLogoUrl)
    )

    // Before mount, should default to dark logo (light theme)
    expect(result.current).toBe(darkLogoUrl)
  })

  it('should handle theme undefined gracefully', () => {
    vi.spyOn(NextThemes, 'useTheme').mockReturnValue({
      resolvedTheme: undefined,
    } as any)

    const { result } = renderHook(() =>
      useThemeLogo(lightLogoUrl, darkLogoUrl)
    )

    expect(result.current).toBe(darkLogoUrl)
  })
})
