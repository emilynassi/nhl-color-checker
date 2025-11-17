// utils/colorBlindness.js
import blinder from 'color-blind'

/**
 * Convert hex to RGB object
 */
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1] ?? '0', 16),
        g: parseInt(result[2] ?? '0', 16),
        b: parseInt(result[3] ?? '0', 16),
      }
    : null
}

/**
 * Calculate color difference using Euclidean distance in RGB space
 * Returns a value where higher = more different
 */
function calculateColorDifference(color1: string, color2: string) {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  if (!rgb1 || !rgb2) return 0

  const rDiff = rgb1.r - rgb2.r
  const gDiff = rgb1.g - rgb2.g
  const bDiff = rgb1.b - rgb2.b

  // Euclidean distance
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff)
}

/**
 * Main function to check color accessibility between two team colors
 * @param {string} color1 - First team's primary color (hex)
 * @param {string} color2 - Second team's primary color (hex)
 * @param {number} threshold - Minimum color difference to pass (default: 50)
 * @returns {object} Results for each color blindness type
 */
export function checkColorAccessibility(color1: string, color2: string, threshold = 50) {
  // Types of color blindness to test (the "opia" versions are the complete types)
  const types = [
    { name: 'Deuteranopia', method: 'deuteranopia', description: 'Red-green (no green)' },
    { name: 'Protanopia', method: 'protanopia', description: 'Red-green (no red)' },
    { name: 'Tritanopia', method: 'tritanopia', description: 'Blue-yellow' },
  ]

  const results = types.map((type) => {
    // Simulate both colors for this type of color blindness
    const simulated1 = blinder[type.method as keyof typeof blinder](color1)
    const simulated2 = blinder[type.method as keyof typeof blinder](color2)

    // Calculate the difference between the simulated colors
    const difference = calculateColorDifference(simulated1, simulated2)

    // Determine pass/fail based on threshold
    const pass = difference >= threshold

    return {
      name: type.name,
      description: type.description,
      pass,
      difference: Math.round(difference),
      simulatedColors: {
        color1: simulated1,
        color2: simulated2,
      },
    }
  })

  // Overall pass is true only if ALL tests pass
  const overallPass = results.every((result) => result.pass)

  return {
    overallPass,
    results,
    threshold,
  }
}

/**
/**
 * Helper function to format results for display
 */
interface ColorBlindTestResult {
  name: string
  description: string
  pass: boolean
  difference: number
  simulatedColors: {
    color1: string
    color2: string
  }
}

interface ColorBlindResults {
  overallPass: boolean
  results: ColorBlindTestResult[]
  threshold: number
}

export function formatResults(results: ColorBlindResults) {
  return {
    pass: results.overallPass,
    message: results.overallPass
      ? '✓ All Clear! These teams pass all vision tests'
      : '✗ Warning! These teams may be hard to distinguish for some viewers',
    tests: results.results.map((test: ColorBlindTestResult) => ({
      type: test.name,
      status: test.pass ? 'pass' : 'fail',
      colors: test.simulatedColors,
      difference: test.difference,
    })),
  }
}
