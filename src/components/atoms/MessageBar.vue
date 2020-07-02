<template>
  <transition name="message_bar">
    <span class="message_bar"><slot></slot></span>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class InstallButton extends Vue {}
</script>

<style scoped>
.message_bar {
  margin: 0 auto;
  padding: 4px 10px 1px 10px;
  background: var(--primary);
  border-radius: 20px;
  color: #ffffff;
}

.message_bar-enter-active {
  animation: SlideDown 0.8s;
}
.message_bar-leave-active {
  animation: SlideUp 0.8s;
}

@keyframes SlideDown {
  0% {
    opacity: 0.2;
    height: 0px;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    height: 18px;
    transform: translateY(0px);
  }
}

@keyframes SlideUp {
  0% {
    opacity: 1;
    height: 18px;
    transform: translateY(0px);
  }
  100% {
    opacity: 0.2;
    height: 0px;
    transform: translateY(-20px);
  }
}
</style>
