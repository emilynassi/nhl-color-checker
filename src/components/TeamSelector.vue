<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NHLTeams, type NHLTeam } from '../data/nhl-teams'
import { useTeamStore } from '@/composables/useTeamStore'

const homeTeam = ref<NHLTeam | null>(NHLTeams[0] ?? null)
const awayTeam = ref<NHLTeam | null>(NHLTeams[1] ?? null)

const { updateHomeTeam, updateAwayTeam } = useTeamStore()

onMounted(() => {
  updateHomeTeam(homeTeam.value)
  updateAwayTeam(awayTeam.value)
})

const homeTeamOptions = NHLTeams;
const awayTeamOptions = NHLTeams;

</script>

<template>
    <div class="team-selection">
      <div class="team-selector">
        <label>Home Team</label>
        <select v-model="homeTeam" placeholder="Select a team..." @change="updateHomeTeam(homeTeam ?? null)">
          <option v-for="option in homeTeamOptions" :key="option.id" :value="option">
            {{ option.name }}
          </option>
        </select>
        <div class="selected-team">
          <div class="color-swatch" :style="{ backgroundColor: homeTeam?.primary }"></div>
          <div class="team-info">
            <div class="team-name">{{ homeTeam?.name }}</div>
            <div class="team-color-code">{{ homeTeam?.primary }}</div>
          </div>
        </div>
      </div>

      <div class="team-selector">
        <label>Away Team</label>
        <select v-model="awayTeam" placeholder="Select a team..." @change="updateAwayTeam(awayTeam ?? null)">
          <option v-for="option in awayTeamOptions" :key="option.id" :value="option">
            {{ option.name }}
          </option>
        </select>
        <div class="selected-team">
          <div class="color-swatch" :style="{ backgroundColor: awayTeam?.primary }"></div>
          <div class="team-info">
            <div class="team-name">{{ awayTeam?.name }}</div>
            <div class="team-color-code">{{ awayTeam?.primary }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
/* Team Selection */
.team-selection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 50px;
}

.team-selector {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.team-selector label {
  font-size: 14px;
  font-weight: 800;
  color: #223759;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.team-selector select {
  padding: 14px 16px;
  border: 2px solid #223759;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: white;
  color: #223759;
  cursor: pointer;
  transition: all 0.2s;
}

.team-selector select:hover {
  background: #e9e5e1;
  border-color: #bb4424;
}

.team-selector select:focus {
  outline: none;
  border-color: #468dcc;
  box-shadow: 0 0 0 3px rgba(70, 141, 204, 0.2);
}

.selected-team {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 12px;
  padding: 16px;
  background: #e9e5e1;
  border: 2px solid #223759;
  border-radius: 12px;
}

.color-swatch {
  width: 48px;
  height: 48px;
  border: 3px solid #223759;
  border-radius: 8px;
  flex-shrink: 0;
}

.team-info {
  flex: 1;
}

.team-name {
  font-weight: 800;
  font-size: 16px;
  color: #223759;
}

.team-color-code {
  font-size: 13px;
  color: #223759;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  margin-top: 4px;
  opacity: 0.7;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .team-selection {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 32px;
  }

  .team-selector {
    width: 100%;
  }

  .team-selector label {
    font-size: 12px;
  }

  .team-selector select {
    padding: 12px 14px;
    font-size: 14px;
  }

  .selected-team {
    padding: 14px;
    gap: 12px;
  }

  .color-swatch {
    width: 40px;
    height: 40px;
  }

  .team-name {
    font-size: 14px;
  }

  .team-color-code {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .team-selection {
    gap: 16px;
    margin-bottom: 24px;
  }

  .team-selector label {
    font-size: 11px;
  }

  .team-selector select {
    padding: 10px 12px;
    font-size: 13px;
  }

  .selected-team {
    padding: 12px;
    gap: 10px;
  }

  .color-swatch {
    width: 36px;
    height: 36px;
  }

  .team-name {
    font-size: 13px;
  }

  .team-color-code {
    font-size: 11px;
  }
}
</style>
