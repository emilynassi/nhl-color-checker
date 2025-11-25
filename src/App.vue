<script setup lang="ts">
import { ref } from 'vue'
import TeamSelector from './components/TeamSelector.vue'
import ResultCard from './components/ResultCard.vue'
import Rink from './components/Rink.vue'
import type { NHLTeam } from './data/nhl-teams'

const homeTeam = ref<NHLTeam | null>(null)
const awayTeam = ref<NHLTeam | null>(null)

const updateHomeTeam = (
  team:
    | NHLTeam
    | {
        id: string
        name: string
        primary: string
        secondary: string
        tertiary?: string | undefined
        darkText: boolean
      }
    | null,
) => {
  homeTeam.value = team
}

const updateAwayTeam = (
  team:
    | NHLTeam
    | {
        id: string
        name: string
        primary: string
        secondary: string
        tertiary?: string | undefined
        darkText: boolean
      }
    | null,
) => {
  awayTeam.value = team
}
</script>

<template>
  <div class="container">
    <h1>🏒 NHL Color Accessibility Checker</h1>

    <!-- Team Selection -->
    <TeamSelector @update:homeTeam="updateHomeTeam" @update:awayTeam="updateAwayTeam" />

    <!-- Rink Visualization -->
    <Rink :homeTeam="homeTeam" :awayTeam="awayTeam" />

    <!-- Accessibility Results -->
    <ResultCard :homeTeam="homeTeam" :awayTeam="awayTeam" />
  </div>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    'Space Grotesk',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  background: #e9e5e1;
  padding: 40px 20px;
  color: #223759;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  border: 3px solid #223759;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 20px rgba(34, 55, 89, 0.15);
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: 900;
  color: #223759;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

/* Rink Visualization */
.rink-container {
  margin-bottom: 50px;
}

.rink-label {
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  background: #bb4424;
  padding: 12px;
  border-radius: 8px;
  display: inline-block;
  width: 100%;
}

/* View mode tabs */
.view-mode-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.view-mode-tab {
  padding: 10px 20px;
  border: 2px solid #223759;
  background: white;
  color: #223759;
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.view-mode-tab:hover {
  background: #e9e5e1;
  transform: translateY(-2px);
}

.view-mode-tab.active {
  background: #468dcc;
  color: white;
  border-color: #468dcc;
}



/* Accessibility Results */
.results-section {
  margin-top: 50px;
}

.results-header {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 28px;
  color: #223759;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.results-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 28px;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: white;
  border: 2px solid #223759;
  border-radius: 50px;
  transition: all 0.2s;
}

.badge-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 55, 89, 0.15);
}

.badge-label {
  font-weight: 700;
  color: #223759;
  font-size: 14px;
}

.badge-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
  flex-shrink: 0;
}

.badge-icon.pass {
  background: #468dcc;
  color: white;
}

.badge-icon.fail {
  background: #bb4424;
  color: white;
}

.badge-swatches {
  display: flex;
  gap: 6px;
}

.badge-swatch {
  width: 24px;
  height: 24px;
  border: 2px solid #223759;
  border-radius: 4px;
}

/* Overall Result */
.overall-result {
  text-align: center;
  padding: 28px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 3px solid #223759;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(34, 55, 89, 0.15);
}

.overall-result.pass {
  background: #468dcc;
  color: white;
}

.overall-result.fail {
  background: #bb4424;
  color: white;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  body {
    padding: 16px;
  }

  .container {
    padding: 24px 20px;
    border-radius: 12px;
    border-width: 2px;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 24px;
    letter-spacing: -0.3px;
  }

  .rink-container {
    margin-bottom: 32px;
  }

  .rink-label {
    font-size: 14px;
    padding: 10px;
    margin-bottom: 16px;
  }

  .view-mode-tabs {
    gap: 6px;
    margin-bottom: 16px;
  }

  .view-mode-tab {
    padding: 8px 12px;
    font-size: 11px;
    letter-spacing: 0.3px;
  }

  .view-mode-tab:hover {
    transform: none;
  }

  .results-section {
    margin-top: 32px;
  }

  .results-header {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .results-badges {
    gap: 12px;
    margin-bottom: 20px;
  }

  .badge-item {
    padding: 12px 16px;
    gap: 10px;
  }

  .badge-label {
    font-size: 12px;
  }

  .badge-icon {
    width: 20px;
    height: 20px;
    font-size: 12px;
  }

  .badge-swatch {
    width: 20px;
    height: 20px;
  }

  .overall-result {
    padding: 20px 16px;
    font-size: 14px;
    letter-spacing: 0.3px;
    line-height: 1.4;
  }

  .badge-item {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  body {
    padding: 12px;
  }

  .container {
    padding: 20px 16px;
    border-radius: 8px;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 1.3;
  }

  .view-mode-tab {
    padding: 8px 12px;
    font-size: 11px;
  }

  .badge-item {
    padding: 12px 14px;
    gap: 10px;
    width: 100%;
  }

  .badge-label {
    font-size: 12px;
  }

  .overall-result {
    font-size: 13px;
    padding: 18px 14px;
    line-height: 1.5;
    word-break: break-word;
  }
}
</style>
