<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useTeamStore, VIEW_MODE, type ViewMode } from '@/composables/useTeamStore';

const { getColorsForMode } = useTeamStore()
const selectedViewMode = ref<ViewMode>(VIEW_MODE.NORMAL)

const homeTeamColor = computed(() => {
  return getColorsForMode(selectedViewMode.value).homeColor
})

const awayTeamColor = computed(() => {
  return getColorsForMode(selectedViewMode.value).awayColor
})

const updateViewMode = (mode: ViewMode) => {
  selectedViewMode.value = mode
}
</script>

<template>
     <!-- Rink Visualization -->
    <div class="rink-container">
      <div class="rink-label">On The Ice</div>

      <!-- View mode selector -->
      <div class="view-mode-tabs">
        <button
          v-for="mode in Object.values(VIEW_MODE)"
          :key="mode"
          class="view-mode-tab"
          :class="{ active: selectedViewMode === mode }"
          @click="updateViewMode(mode)">
          {{ mode }}
        </button>
      </div>

      <div class="rink">
        <!-- Rink markings -->
        <div class="goal-line left"></div>
        <div class="blue-line left"></div>
        <div class="center-line"></div>
        <div class="blue-line right"></div>
        <div class="goal-line right"></div>

        <!-- Center ice -->
        <div class="center-circle"></div>
        <div class="center-dot"></div>

        <!-- Face-off circles -->
        <div class="faceoff-circle left-top"></div>
        <div class="faceoff-circle left-bottom"></div>
        <div class="faceoff-circle right-top"></div>
        <div class="faceoff-circle right-bottom"></div>

        <!-- Goalie creases -->
        <div class="goalie-crease left"></div>
        <div class="goalie-crease right"></div>

        <!-- Team 1 players (Home team) -->
        <div v-for="i in 6" :key="i"
        class="player-dot" :style="{ backgroundColor: homeTeamColor }"></div>


        <!-- Team 2 players (Away team) -->
        <div v-for="i in 6" :key="i"
        class="player-dot" :style="{ backgroundColor: awayTeamColor }"></div>
      </div>
    </div>

</template>

<style scoped>
.rink {
  width: 100%;
  height: 300px;
  background: #e9e5e1;
  border: 4px solid #223759;
  border-radius: 100px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(34, 55, 89, 0.2);
}

/* Rink lines */
.blue-line {
  position: absolute;
  width: 4px;
  height: 100%;
  background: #468dcc;
  top: 0;
}

.blue-line.left {
  left: 30%;
}

.blue-line.right {
  right: 30%;
}

.center-line {
  position: absolute;
  width: 4px;
  height: 100%;
  background: #bb4424;
  left: 50%;
  transform: translateX(-50%);
}

.goal-line {
  position: absolute;
  width: 4px;
  height: 100%;
  background: #bb4424;
  top: 0;
}

.goal-line.left {
  left: 10%;
}

.goal-line.right {
  right: 10%;
}

/* Center ice circle */
.center-circle {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 3px solid #468dcc;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
}

.center-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #468dcc;
  border: 2px solid #223759;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

/* Face-off circles */
.faceoff-circle {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 3px solid #bb4424;
  border-radius: 50%;
  background: transparent;
}

.faceoff-circle.left-top {
  top: 20%;
  left: 18%;
  transform: translate(-50%, -50%);
}

.faceoff-circle.left-bottom {
  bottom: 20%;
  left: 18%;
  transform: translate(-50%, 50%);
}

.faceoff-circle.right-top {
  top: 20%;
  right: 18%;
  transform: translate(50%, -50%);
}

.faceoff-circle.right-bottom {
  bottom: 20%;
  right: 18%;
  transform: translate(50%, 50%);
}

/* Goalie creases */
.goalie-crease {
  position: absolute;
  width: 50px;
  height: 30px;
  border: 3px solid #bb4424;
  border-radius: 0 0 25px 25px;
  background: rgba(187, 68, 36, 0.1);
}

.goalie-crease.left {
  left: 10%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
}

.goalie-crease.right {
  right: 10%;
  top: 50%;
  transform: translate(50%, -50%) rotate(-90deg);
}

/* Player dots */
.player-dot {
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 3px solid #223759;
  transition: all 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.player-dot:hover {
  transform: scale(1.15);
  border-color: #223759;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Positioned dots - 6 per side */
/* Home team (blue) - left side */
.player-dot:nth-child(14) {
  top: 20%;
  left: 15%;
}
.player-dot:nth-child(15) {
  top: 40%;
  left: 12%;
}
.player-dot:nth-child(16) {
  top: 60%;
  left: 18%;
}
.player-dot:nth-child(17) {
  top: 80%;
  left: 15%;
}
.player-dot:nth-child(18) {
  top: 35%;
  left: 25%;
}
.player-dot:nth-child(19) {
  top: 70%;
  left: 28%;
}

/* Away team (red) - right side */
.player-dot:nth-child(20) {
  top: 25%;
  right: 15%;
}
.player-dot:nth-child(21) {
  top: 45%;
  right: 12%;
}
.player-dot:nth-child(22) {
  top: 65%;
  right: 18%;
}
.player-dot:nth-child(23) {
  top: 85%;
  right: 15%;
}
.player-dot:nth-child(24) {
  top: 38%;
  right: 25%;
}
.player-dot:nth-child(25) {
  top: 75%;
  right: 28%;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .rink {
    height: 220px;
  }

  .center-circle {
    width: 60px;
    height: 60px;
    border-width: 2px;
  }

  .center-dot {
    width: 12px;
    height: 12px;
  }

  .faceoff-circle {
    width: 45px;
    height: 45px;
    border-width: 2px;
  }

  .goalie-crease {
    width: 40px;
    height: 24px;
    border-width: 2px;
  }

  .player-dot {
    width: 28px;
    height: 28px;
    border-width: 2px;
  }

  .blue-line,
  .center-line,
  .goal-line {
    width: 3px;
  }
}

@media (max-width: 480px) {
  .rink {
    height: 180px;
    border-width: 3px;
    border-radius: 80px;
  }

  .center-circle {
    width: 50px;
    height: 50px;
  }

  .center-dot {
    width: 10px;
    height: 10px;
  }

  .faceoff-circle {
    width: 36px;
    height: 36px;
  }

  .goalie-crease {
    width: 32px;
    height: 20px;
  }

  .player-dot {
    width: 24px;
    height: 24px;
  }

  .blue-line,
  .center-line,
  .goal-line {
    width: 2px;
  }
}
</style>
