<template>
  <button @click="emit" class="button" :class="color" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RadiusButton extends Vue {
  @Prop() color?: "primary" | "secondary";
  @Prop({ default: false }) disabled?: boolean;
  emit() {
    this.$emit("push");
  }
}
</script>

<style scoped>
.button {
  margin: 10px auto;
  border-color: #00000000;
  padding: 7px 13px;
  position: relative;
  height: 40px;
  background: #c4c4c4;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  color: #ffff;
}

.primary {
  background: var(--primary);
  box-shadow: 0px 2px 10px var(--primary);
}

.secondary {
  background: var(--secondary);
  box-shadow: 0px 2px 10px var(--secondary);
}

.button:disabled {
  color: var(--dark);
  background-color: var(--back);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: not-allowed;
}
</style>
