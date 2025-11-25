<script setup lang="ts">
import { useTeamStore } from '@/composables/useTeamStore';
import { checkColorAccessibility } from '@/util/colorBlind';
import { computed, watch } from 'vue';

const { homeTeam, awayTeam, updateAccessibilityResults } = useTeamStore()

const results = computed(() => {
  if (!homeTeam.value || !awayTeam.value) {
    return null
  }
  return checkColorAccessibility(homeTeam.value.primary, awayTeam.value.primary)
})

// Update the store whenever results change
watch(results, (newResults) => {
  updateAccessibilityResults(newResults)
}, { immediate: true })

</script>

<template>
    <div class="results-section">
      <div class="results-header">Accessibility Results</div>

      <div class="results-badges">
        <div class="badge-item" v-for="result in results?.results" :key="result.name">
          <span class="badge-label">{{ result.name }}</span>
          <div class="badge-icon" :class="{ 'pass': result.pass, 'fail': !result.pass }">
            {{ result.pass ? '✓' : '✗' }}
          </div>
          <div class="badge-swatches">
            <div class="badge-swatch" :style="{ backgroundColor: result.simulatedColors.color1 }"></div>
            <div class="badge-swatch" :style="{ backgroundColor: result.simulatedColors.color2 }"></div>
          </div>
        </div>


      </div>

      <div class="overall-result pass" :class="{ 'pass': results?.overallPass, 'fail': !results?.overallPass }">
        {{ results?.overallPass ? '✓ All Clear! These teams pass all vision tests' : '✗ Warning! These teams may be hard to distinguish for some viewers' }}
      </div>
    </div>
</template>
