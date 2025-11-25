import { describe, it, expect } from 'vitest'
import { checkColorAccessibility, formatResults } from '../colorBlind'

describe('colorBlind', () => {
  it('should check color accessibility', () => {
    const result = checkColorAccessibility('#003e7e', '#af1e2d')
    expect(result).toBeDefined()
  })
})
