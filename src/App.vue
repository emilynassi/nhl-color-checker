<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>🏒 NHL Color Accessibility Checker</h1>

    <!-- Team Selection -->
    <div class="team-selection">
      <div class="team-selector">
        <label>Home Team</label>
        <select>
          <option>Select a team...</option>
          <option selected>Toronto Maple Leafs</option>
          <option>Montreal Canadiens</option>
          <option>Boston Bruins</option>
        </select>
        <div class="selected-team">
          <div class="color-swatch" style="background-color: #003e7e"></div>
          <div class="team-info">
            <div class="team-name">Toronto Maple Leafs</div>
            <div class="team-color-code">#003E7E</div>
          </div>
        </div>
      </div>

      <div class="team-selector">
        <label>Away Team</label>
        <select>
          <option>Select a team...</option>
          <option>Toronto Maple Leafs</option>
          <option selected>Montreal Canadiens</option>
          <option>Boston Bruins</option>
        </select>
        <div class="selected-team">
          <div class="color-swatch" style="background-color: #af1e2d"></div>
          <div class="team-info">
            <div class="team-name">Montreal Canadiens</div>
            <div class="team-color-code">#AF1E2D</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rink Visualization -->
    <div class="rink-container">
      <div class="rink-label">On The Ice</div>
      <div class="rink">
        <!-- Rink markings -->
        <div class="goal-line left"></div>
        <div class="blue-line left"></div>
        <div class="center-line"></div>
        <div class="blue-line right"></div>
        <div class="goal-line right"></div>
        <div class="center-dot"></div>

        <!-- Team 1 players (Toronto - Blue) - Left side -->
        <div class="player-dot" style="background-color: #003e7e"></div>
        <div class="player-dot" style="background-color: #003e7e"></div>
        <div class="player-dot" style="background-color: #003e7e"></div>
        <div class="player-dot" style="background-color: #003e7e"></div>
        <div class="player-dot" style="background-color: #003e7e"></div>

        <!-- Team 2 players (Montreal - Red) - Right side -->
        <div class="player-dot" style="background-color: #af1e2d"></div>
        <div class="player-dot" style="background-color: #af1e2d"></div>
        <div class="player-dot" style="background-color: #af1e2d"></div>
        <div class="player-dot" style="background-color: #af1e2d"></div>
        <div class="player-dot" style="background-color: #af1e2d"></div>
        <div class="player-dot" style="background-color: #af1e2d"></div>
      </div>
    </div>

    <!-- Accessibility Results -->
    <div class="results-section">
      <div class="results-header">Accessibility Results</div>

      <div class="results-badges">
        <div class="badge-item">
          <span class="badge-label">Deuteranopia</span>
          <div class="badge-icon pass">✓</div>
          <div class="badge-swatches">
            <div class="badge-swatch" style="background-color: #1a4a7e"></div>
            <div class="badge-swatch" style="background-color: #8a5a3d"></div>
          </div>
        </div>

        <div class="badge-item">
          <span class="badge-label">Protanopia</span>
          <div class="badge-icon pass">✓</div>
          <div class="badge-swatches">
            <div class="badge-swatch" style="background-color: #1e497a"></div>
            <div class="badge-swatch" style="background-color: #865838"></div>
          </div>
        </div>

        <div class="badge-item">
          <span class="badge-label">Tritanopia</span>
          <div class="badge-icon pass">✓</div>
          <div class="badge-swatches">
            <div class="badge-swatch" style="background-color: #003d5e"></div>
            <div class="badge-swatch" style="background-color: #cf2e4d"></div>
          </div>
        </div>
      </div>

      <div class="overall-result pass">✓ All Clear! These teams pass all vision tests</div>
    </div>
  </div>
</template>

<style scoped>
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
</style>

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
  max-width: 900px;
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

.rink {
  width: 100%;
  height: 300px;
  background: #e9e5e1;
  border: 4px solid #223759;
  border-radius: 150px;
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
  left: 25%;
}

.blue-line.right {
  right: 25%;
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
  left: 8%;
}

.goal-line.right {
  right: 8%;
}

.center-dot {
  position: absolute;
  width: 28px;
  height: 28px;
  background: #468dcc;
  border: 3px solid #223759;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
}

.player-dot:hover {
  transform: scale(1.15);
  border-color: #223759;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Positioned dots - Team 1 on left, Team 2 on right */
.player-dot:nth-child(7) {
  top: 25%;
  left: 18%;
}
.player-dot:nth-child(8) {
  top: 50%;
  left: 15%;
}
.player-dot:nth-child(9) {
  top: 75%;
  left: 20%;
}
.player-dot:nth-child(10) {
  top: 40%;
  left: 32%;
}
.player-dot:nth-child(11) {
  top: 65%;
  left: 35%;
}

.player-dot:nth-child(12) {
  top: 30%;
  left: 68%;
}
.player-dot:nth-child(13) {
  top: 55%;
  left: 65%;
}
.player-dot:nth-child(14) {
  top: 70%;
  left: 80%;
}
.player-dot:nth-child(15) {
  top: 45%;
  left: 82%;
}
.player-dot:nth-child(16) {
  top: 20%;
  left: 85%;
}
.player-dot:nth-child(17) {
  top: 80%;
  left: 70%;
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
</style>
