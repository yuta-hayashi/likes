<template>
  <span class="message_bar"><slot></slot></span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class InstallButton extends Vue {}
</script>

<style scoped>
.message_bar {
  margin: 10px auto;
  padding: 4px 10px 1px 10px;
  display: flex;
  background: var(--primary);
  border-radius: 20px;
  color: #ffffff;
}
</style>
