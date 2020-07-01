<template>
  <div class="link_list">
    <router-link to="/about" class="link_item">このアプリについて</router-link>
    <a
      href="https://github.com/yuta-hayashi/likes"
      target="_blank"
      class="link_item"
      >GitHub</a
    >
    <a href="https://yuta.run" target="_blank" class="link_item"
      >Made by yuta.run</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SettingLinkList extends Vue {}
</script>

<style scoped>
.link_list {
  text-align: left;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  border-top: solid 2px #c4c4c4;
}
.link_item {
  padding: 1em;
  border-bottom: solid 2px #c4c4c4;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
