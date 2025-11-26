import { ref } from 'vue'
import type { NHLTeam } from '@/data/nhl-teams'

export const VIEW_MODE = {
  ORIGINAL: 'original',
  DEUTERANOPIA: 'deuteranopia',
  PROTANOPIA: 'protanopia',
  TRITANOPIA: 'tritanopia',
} as const

export type ViewMode = (typeof VIEW_MODE)[keyof typeof VIEW_MODE]

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

const homeTeam = ref<NHLTeam | null>(null)
const awayTeam = ref<NHLTeam | null>(null)
const accessibilityResults = ref<ColorBlindResults | null>(null)

export const useTeamStore = () => {
  const updateHomeTeam = (team: NHLTeam | null) => {
    homeTeam.value = team
  }

  const updateAwayTeam = (team: NHLTeam | null) => {
    awayTeam.value = team
  }

  const updateAccessibilityResults = (results: ColorBlindResults | null) => {
    accessibilityResults.value = results
  }

  // Helper to get simulated colors for a specific view mode
  const getColorsForMode = (mode: string) => {
    // For original mode or if no results, return original colors
    if (!accessibilityResults.value || mode === 'original') {
      return {
        homeColor: homeTeam.value?.primary,
        awayColor: awayTeam.value?.primary,
      }
    }

    // Find the result matching the selected mode
    const result = accessibilityResults.value.results.find(
      (r) => r.name.toLowerCase() === mode.toLowerCase(),
    )

    return {
      homeColor: result?.simulatedColors.color1 ?? homeTeam.value?.primary,
      awayColor: result?.simulatedColors.color2 ?? awayTeam.value?.primary,
    }
  }

  return {
    homeTeam,
    awayTeam,
    accessibilityResults,
    updateHomeTeam,
    updateAwayTeam,
    updateAccessibilityResults,
    getColorsForMode,
  }
}
