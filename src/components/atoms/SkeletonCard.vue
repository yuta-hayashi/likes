<template>
  <div class="card small">
    <div class="skeleton"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SkeletonCard extends Vue {}
</script>

<style scoped>
.small {
  width: 35vw;
  height: 35vw;
  max-width: 140px;
  max-height: 140px;
}
.card {
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  background: #d9d9d9;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
.skeleton {
  height: 100%;
  width: 100%;
  /* background: red; */
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  position: absolute;
  top: 0;
  left: 0;
  animation: skeleton-animation 1.2s linear infinite;
}
@keyframes skeleton-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
