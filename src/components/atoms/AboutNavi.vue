<template>
  <div class="about_navi">
    <span @click="$router.push('/')" class="about_navi_left">Skip</span>
    <span @click="nextCard" class="about_navi_right">Next</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutNavi extends Vue {
  nextCard() {
    this.$emit("next");
  }
}
</script>

<style scoped>
.about_navi {
  margin: 0em 2em;
  font-size: 18px;
  display: flex;

  justify-content: space-between;
}
.about_navi_left {
  cursor: pointer;
  color: #c4c4c4;
}
.about_navi_right {
  cursor: pointer;
  color: var(--primary);
}
</style>
