<template>
  <div>
    <img
      class="back_button"
      src="../../assets/ui/BackButton.svg"
      @click="emit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BackButton extends Vue {
  emit() {
    this.$emit("push");
  }
}
</script>

<style scoped>
.back_button {
  display: flex;
  margin-left: 10px;
}
</style>
