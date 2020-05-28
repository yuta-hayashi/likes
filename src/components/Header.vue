<template>
  <div id="header">
    <span id="title">Likes</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped>
#header {
  background-color: var(--back);
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
}
#title {
  font-size: 24px;
}
</style>
