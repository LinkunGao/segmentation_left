<template>
  <div class="split-container" ref="splitContainer">
    <div class="box left" ref="left_container">
      <LeftPanel />
    </div>
    <Logo />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LeftPanel from "./components/left-panel-core/left.vue";
import Logo from "@/components/logo.vue";
</script>

<style scoped>
.split-container {
  display: grid;
  grid-template-columns: 100% 0%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  user-select: none;
}

.box {
  height: 100%;
}

.left {
  background-color: #ffcccc;
}
.panel_active{
  position: fixed;
  width: 100vw;
  z-index: 100;
}

.right {
  background-color: #6b6bd3;
}

.split-bar {
  position: absolute;
  top: 0;
  left: 65%;
  width: 2px;
  height: 100%;
  background-color: #555;
  cursor: col-resize;
  z-index: 99;
}
</style>
